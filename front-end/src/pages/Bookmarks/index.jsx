import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import { getAllBookmarks } from "../../services/bookmarksApi";
import styled from "styled-components";
import Logo from "../../assets/images/dnd.svg"
import { GiSpikedDragonHead, GiMagicAxe, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import Footer from '../../components/Footer';

export default function Bookmarks() {
  const [bookmarkList, setBookmarkList] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'My Bookmarks - D&D Database';
    if (!token) navigate("/sign-in?return=bookmarks");
    async function fetchData() {
      const bookmark = await getAllBookmarks(token);
      setBookmarkList(bookmark);
    }
    fetchData();
  }, []);

  function renderDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString();
  }

  const filteredBookmarkList = selectedType
    ? bookmarkList.filter((bookmark) => bookmark.type === selectedType)
    : bookmarkList;

  return (
    <>
      <Header />
      <Container>
        <SidebarContainer background={Logo}>
          <div>
            <SidebarList>
              <SidebarListItem
                selected={selectedType === null}
                onClick={() => setSelectedType(null)}
              >
                -
              </SidebarListItem>
              <SidebarListItem
                selected={selectedType === "MONSTER"}
                onClick={() => setSelectedType("MONSTER")}
              >
                Monsters <GiSpikedDragonHead />
              </SidebarListItem>
              <SidebarListItem
                selected={selectedType === "SPELL"}
                onClick={() => setSelectedType("SPELL")}
              >
                Spells <GiMagicPalm />
              </SidebarListItem>
              <SidebarListItem
                selected={selectedType === "EQUIPMENT"}
                onClick={() => setSelectedType("EQUIPMENT")}
              >
                Equipments <GiAxeSword />
              </SidebarListItem>
              <SidebarListItem
                selected={selectedType === "MAGIC_ITEM"}
                onClick={() => setSelectedType("MAGIC_ITEM")}
              >
                Magic Items <GiMagicAxe />
              </SidebarListItem>
            </SidebarList>
          </div>
        </SidebarContainer>
        <Content>
          <BookmarkContainer>
            <MainHeading>                            
                {selectedType === "MONSTER"
                    ? "Bookmarks - Showing Monsters"
                    : selectedType === "SPELL"
                    ? "Bookmarks - Showing Spells"
                    : selectedType === "EQUIPMENT"
                     ? "Bookmarks - Showing Equipments"
                    : selectedType === "MAGIC_ITEM"
                    ? "Bookmarks - Showing Magic Items"
                    : "Bookmarks - Showing All"}
            </MainHeading>
            <BookmarkGrid>
              {filteredBookmarkList.map((bookmark, index) => (
                <BookmarkLink
                  key={index}
                  to={
                    bookmark.type === "MONSTER"
                      ? `/monster?index=${bookmark.index}`
                      : bookmark.type === "SPELL"
                      ? `/spell?index=${bookmark.index}`
                      : bookmark.type === "EQUIPMENT"
                      ? `/equipment?index=${bookmark.index}`
                      : bookmark.type === "MAGIC_ITEM"
                      ? `/magic-item?index=${bookmark.index}`
                      : ""
                  }
                >
                  <BookmarkName>
                    {bookmark.name}{" "}
                    <BookmarkDate>
                      {renderDate(bookmark.createdAt)}
                    </BookmarkDate>
                  </BookmarkName>
                </BookmarkLink>
              ))}
            </BookmarkGrid>
          </BookmarkContainer>
        </Content>
      </Container>
      <Footer/>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid red;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: fit-content;
`;

const BookmarkContainer = styled.div`
  padding: 1px 3%;
  margin-left: 10px;
`;

const SidebarList = styled.ul`
  margin-top: 4px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SidebarListItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.selected ? "#E5E7EB" : "none")};
  color: ${(props) => (props.selected ? "red" : "inherit")};
`;

const Content = styled.div`
  width: 75%;
`;

const MainHeading = styled.h2`
  margin-top: 10px;
  margin-left: 45%;
  margin-bottom: 10px;
  color: red;
  font-size: 2xl;
  font-weight: bold;
`;

const BookmarkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const BookmarkLink = styled(Link)`
  padding: 16px;
  background-color: #ccc;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8f8f8f;
  }
`;

const BookmarkName = styled.p`
  color: #333;
`;

const BookmarkDate = styled.span`
  margin-left: 30%;
`;
