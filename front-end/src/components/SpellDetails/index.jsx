import styled from "styled-components";
import { addBookmark, getBookmarkByIndex, removeBookmark } from "../../services/bookmarksApi"
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";

export default function SpellDetails({ spell }) {
  const [bookmarked, setBookmarked] = useState(false);
  const token = useToken();

  useEffect(() => {
    async function fetchData() {
        const bookmark = await getBookmarkByIndex(spell.index, token);
        setBookmarked(bookmark);
    }
    fetchData();
}, []);

async function handleBookmark() {
  try {
      if (!bookmarked) {
          const body = {
              index: spell.index,
              name: spell.name,
              type: "SPELL"
          };
          await addBookmark(body, token);
          setBookmarked(true);
      }
      else {
          await removeBookmark(spell.index, token);
          setBookmarked(false);
      }
  } catch (error) {
      alert('Error on bookmark!');
  }
}

  return (
    <MainContainer>
      <MainDetailContainer>
        <SpellName>{spell.name}
        {!bookmarked && token ? (<ButtontBookmark title="Add Bookmark" onClick={handleBookmark}><BsFillBookmarkPlusFill /></ButtontBookmark>) 
        : bookmarked && token ? (<ButtontBookmark title="Remove Bookmark" onClick={handleBookmark}><BsFillBookmarkDashFill /></ButtontBookmark>) 
        : (<></>)}
        </SpellName>
        <LabelHeader>Characteristic</LabelHeader>
        <BlockContainer>
          <InformationContainer>
            <Characteristic>
              <CharacteristicLabel>Level</CharacteristicLabel>
              <CharacteristicValue>{spell.level === 0 ? "Cantrip" : spell.level}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Casting Time</CharacteristicLabel>
              <CharacteristicValue>{spell.casting_time}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Range/Area</CharacteristicLabel>
              <CharacteristicValue>{spell.range}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Components</CharacteristicLabel>
              <CharacteristicValue>{spell.components.join(", ")}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Duration</CharacteristicLabel>
              <CharacteristicValue>{spell.duration}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>School</CharacteristicLabel>
              <CharacteristicValue>{spell.school.name}</CharacteristicValue>
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Attack/Save</CharacteristicLabel>
              {spell.attack_type ? (
                <CharacteristicValue>{spell.attack_type}</CharacteristicValue>
              ) : spell.dc ? (
                <CharacteristicValue>{spell.dc.dc_type.name} Save</CharacteristicValue>
              ) : (
                <CharacteristicValue>None</CharacteristicValue>
              )}
            </Characteristic>
            <Characteristic>
              <CharacteristicLabel>Damage</CharacteristicLabel>
              {spell.damage ? (
                <CharacteristicValue>{spell.damage.damage_type.name}</CharacteristicValue>
              ) : (
                <CharacteristicValue>None</CharacteristicValue>
              )}
            </Characteristic>
          </InformationContainer>
        </BlockContainer>
        <LabelHeader>Description</LabelHeader>
        {spell.desc.map((desc, index) => (
          <Description
            key={index}
            dangerouslySetInnerHTML={{
              __html: desc.replace(/\*\*\*(.*?)\*\*\*/g, "<strong>$1</strong>"),
            }}
          />
        ))}
        {spell.material ? (<Description><strong>Material Needed.</strong> {spell.material}</Description>): (<></>)}
        {spell.higher_level.length > 0 ? (
          <Description>
            <strong>At Higher Levels.</strong>
            {spell.higher_level.map((desc, index) => (
              <span key={index}>{desc}</span>
            ))}
          </Description>
        ) : (
          <></>
        )}
      </MainDetailContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  font-family: Roboto, Helvetica, sans-serif;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainDetailContainer = styled.div`
  font-family: "Scala Sans", sans-serif;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 20px;
  flex: 1;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const BlockContainer = styled.div``;

const SpellName = styled.div`
  font-size: 40px;
  margin-top: 10px;
  color: #822000;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Characteristic = styled.div`
  margin-top: 15px;
  flex: 25%;
  @media (max-width: 768px) {
    flex: 50%;
  }
`;

const CharacteristicLabel = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const CharacteristicValue = styled.div`
  font-size: 16px;
`;

const LabelHeader = styled.div`
  font-size: 25px;
  margin-top: 10px;
  border-bottom: 1px solid #822000;
  border-bottom-color: rgb(216, 53, 0);
`;

const Description = styled.div`
  margin-top: 10px;
`;

const ButtontBookmark = styled.button`
    background-color: transparent;
    margin-top: 20px;
    margin-left: 20px;
    @media (max-width: 580px) {
    margin-left: 18%;
  }
`;