import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import { getAllHistory, deleteAllHistory } from "../../services/historyApi";
import styled from "styled-components";
import Logo from "../../assets/images/dnd.svg"
import { GiSpikedDragonHead, GiMagicAxe, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import Footer from '../../components/Footer';

export default function History() {
    const [historyList, setHistoryList] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'My History - D&D Database';
        if (!token) navigate("/sign-in?return=history");
        async function fetchData() {
            const history = await getAllHistory(token);
            setHistoryList(history);
        }
        fetchData();
    }, []);

    function renderDate(date) {
        const dateObj = new Date(date);
        return dateObj.toLocaleString();
    }

    async function handleDeleteAllHistory() {
        if (confirm("Are you sure you want to delete all history?")) {
            try {
                await deleteAllHistory(token);
                setHistoryList([]);
                alert('Deleted all history!');
            } catch (error) {
                console.log(error);
                alert('Unable to delete all history!');
            }
        }
    }

    const filteredHistoryList = selectedType
        ? historyList.filter((history) => history.type === selectedType)
        : historyList;

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
                    <DeleteHistoryButton onClick={() => handleDeleteAllHistory()}>
                        Delete All History
                    </DeleteHistoryButton>
                </SidebarContainer>
                <Content>
                    <HistoryContainer>
                        <MainHeading>
                            {selectedType === "MONSTER"
                                ? "History - Showing Monsters"
                                : selectedType === "SPELL"
                                ? "History - Showing Spells"
                                : selectedType === "EQUIPMENT"
                                ? "History - Showing Equipments"
                                : selectedType === "MAGIC_ITEM"
                                ? "History - Showing Magic Items"
                                : "History - Showing All"}
                        </MainHeading>
                        <HistoryGrid>
                            {filteredHistoryList.map((history, index) => (
                                <HistoryLink
                                    key={index}
                                    to={
                                        history.type === "MONSTER"
                                            ? `/monster?index=${history.index}`
                                            : history.type === "SPELL"
                                                ? `/spell?index=${history.index}`
                                                : history.type === "EQUIPMENT"
                                                    ? `/equipment?index=${history.index}`
                                                    : history.type === "MAGIC_ITEM"
                                                        ? `/magic-item?index=${history.index}`
                                                        : ""
                                    }
                                >
                                    <HistoryName>
                                        {history.name}{" "}
                                        <HistoryDate>{renderDate(history.createdAt)}</HistoryDate>
                                    </HistoryName>
                                </HistoryLink>
                            ))}
                        </HistoryGrid>
                    </HistoryContainer>
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
      background-image: url(${props => props.background});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: fit-content;
    `;


const HistoryContainer = styled.div`
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

const HistoryGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    `;

const HistoryLink = styled(Link)`
      padding: 16px;
      background-color: #ccc;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.2s ease-in-out;
    
      &:hover {
        background-color: #8f8f8f;
      }
    `;

const HistoryName = styled.p`
      color: #333;
    `;

const HistoryDate = styled.span`
    margin-left: 30%;
    `;

const DeleteHistoryButton = styled.button`
margin-top: 5px;
color: #fff;
font-weight: bold;
font-size: 16px;
background: #f74545;
height: 50px;
width: 100%;
border: 1px solid #d8dde3;
box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
transition: background-color 0.2s ease-in-out;
cursor: pointer;

&:hover {
background-color: #c53939;
}
`;
