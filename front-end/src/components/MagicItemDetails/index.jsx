import styled from "styled-components";
import { addBookmark, getBookmarkByIndex, removeBookmark } from "../../services/bookmarksApi"
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";

export default function MagicItemDetails({ magicItem }) {
  const [bookmarked, setBookmarked] = useState(false);
  const token = useToken();

  useEffect(() => {
    async function fetchData() {
        const bookmark = await getBookmarkByIndex(magicItem.index, token);
        setBookmarked(bookmark);
    }
    fetchData();
}, []);

async function handleBookmark() {
  try {
      if (!bookmarked) {
          const body = {
              index: magicItem.index,
              name: magicItem.name,
              type: "MAGIC_ITEM"
          };
          await addBookmark(body, token);
          setBookmarked(true);
      }
      else {
          await removeBookmark(magicItem.index, token);
          setBookmarked(false);
      }
  } catch (error) {
      alert('Error on bookmark!');
  }
}

  const isTableRow = (text) => text.startsWith("|") && text.endsWith("|");

  function renderTable() {
    const tableRows = magicItem.desc.filter(isTableRow);
    if (tableRows.length === 0) {
      return null;
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {tableRows[0]
              .split("|")
              .filter(Boolean)
              .map((cell, index) => (
                <TableHeaderCell key={index}>{cell.trim()}</TableHeaderCell>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows.slice(1).map((row, index) => (
            <TableRow key={index}>
              {row
                .split("|")
                .filter(Boolean)
                .map((cell, index) => (
                  <TableCell key={index}>{cell.trim()}</TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  function renderDescription() {
    const descriptionTexts = magicItem.desc.filter((text) => !isTableRow(text));

    return descriptionTexts.map((desc, index) => (
      <Description
        key={index}
        dangerouslySetInnerHTML={{
          __html: desc.replace(/\*\*\*(.*?)\*\*\*/g, "<strong>$1</strong>"),
        }}
      />
    ));
  }

  return (
    <MainContainer>
      <MainDetailContainer>
        <MagicItemName>{magicItem.name}
        {!bookmarked && token ? (<ButtontBookmark title="Add Bookmark" onClick={handleBookmark}><BsFillBookmarkPlusFill /></ButtontBookmark>) 
        : bookmarked && token ? (<ButtontBookmark title="Remove Bookmark" onClick={handleBookmark}><BsFillBookmarkDashFill /></ButtontBookmark>) 
        : (<></>)}
        </MagicItemName>
        <Details>
          <div>Type: <strong>{magicItem.equipment_category.name}</strong></div>
          <div>Type Rarity: <strong>{magicItem.rarity ? magicItem.rarity.name : '--'}</strong></div>
          <div>Is a Variant: <strong>{magicItem.variant ? 'True' : 'False'}</strong></div>
        </Details>
        {renderDescription()}
        {renderTable()}
        {magicItem.variants.length > 0 ? (<LabelHeader>Variants:</LabelHeader>) : (<></>)}
        {magicItem.variants.map((variant, index) => (
          <Description key={index}>{variant.name}</Description>
        ))}
      </MainDetailContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  font-family: Roboto, Helvetica, sans-serif;
`;

const MainDetailContainer = styled.div`
  width: calc(100% - 20px);
  font-family: 'Scala Sans', sans-serif;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 10px;

  @media (min-width: 768px) {
    width: calc(100% - 370px);
    margin-left: 20px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const MagicItemName = styled.div`
  font-size: 36px;
  margin-top: 10px;
  color: #242527;
`;

const LabelHeader = styled.div`
  font-size: 25px;
  margin-top: 10px;
  border-bottom: 1px solid #822000;
  border-bottom-color: rgb(216, 53, 0);
`;

const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

const ButtontBookmark = styled.button`
    background-color: transparent;
    margin-top: 20px;
    margin-left: 20px;
    @media (max-width: 580px) {
    margin-left: 18%;
  }
`;