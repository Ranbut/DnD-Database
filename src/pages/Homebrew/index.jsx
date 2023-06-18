import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import styled from "styled-components";
import Logo from "../../assets/images/dnd.svg"
import { GiSpikedDragonHead, GiMagicAxe, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import { getAllMonster } from "../../services/monstersApi";
import { getAllSpells } from "../../services/spellsApi";

export default function Homebrew() {
    const [monsterList, setMonsterList] = useState([]);
    const [spellList, setSpellList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'My Homebrew - D&D Database';
        if (!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const monsters = await getAllMonster(token);
            setMonsterList(monsters);
            const spells = await getAllSpells(token);
            setSpellList(spells);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <SidebarContainer background={Logo}>
                    <div>
                        <SidebarList>
                            <SidebarListItem onClick={() => setSelectedCategory("Monsters")}>My Monsters <GiSpikedDragonHead /></SidebarListItem>
                            <SidebarListItem onClick={() => setSelectedCategory("Spells")}>My Spells <GiMagicPalm /></SidebarListItem>
                            <SidebarListItem onClick={() => setSelectedCategory("Equipments")}>My Equipments <GiAxeSword /></SidebarListItem>
                            <SidebarListItem onClick={() => setSelectedCategory("Magic Items")}>My Magic Items <GiMagicAxe /></SidebarListItem>
                        </SidebarList>
                    </div>
                </SidebarContainer>
                <Content>
                    <ItemContainer>
                        {selectedCategory === "Monsters" ? (
                            <>
                                <MainHeading>My Monsters</MainHeading>
                                <ItemGrid>
                                    {monsterList.map((monster, index) => (
                                        <ItemLink
                                            key={index}
                                        >
                                            <ItemName>{monster.monster.name}</ItemName>
                                        </ItemLink>
                                    ))}
                                </ItemGrid>
                            </>
                        ) : selectedCategory === "Spells" ? 
                        (
                            <>
                                <MainHeading>My Spells</MainHeading>
                                <ItemGrid>
                                    {spellList.map((spell, index) => (
                                        <ItemLink
                                            key={index}
                                        >
                                            <ItemName>{spell.spell.name}</ItemName>
                                        </ItemLink>
                                    ))}
                                </ItemGrid>
                            </>
                        ) : (<></>)}
                    </ItemContainer>
                </Content>
            </Container>
        </>
    );
};

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

const Container = styled.div`
display: flex;
`;

const ItemContainer = styled.div`
padding: 1px 3%;
margin-left: 10px;
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

const ItemGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 16px;
`;

const ItemLink = styled(Link)`
padding: 16px;
background-color: #ccc;
border-radius: 4px;
text-decoration: none;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #8f8f8f;
}
`;

const ItemName = styled.p`
color: #333;
`;
