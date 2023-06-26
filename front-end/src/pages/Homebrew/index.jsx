import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import styled from "styled-components";
import Logo from "../../assets/images/dnd.svg"
import { GiSpikedDragonHead, GiMagicAxe, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { getAllMonster, deleteMonster } from "../../services/monstersApi";
import { getAllSpells, deleteSpell } from "../../services/spellsApi";
import { getAllEquipments, deleteEquipment } from "../../services/equipmentApi";
import { getAllMagicItems, deleteMagicItem } from "../../services/magicItemApi";
import Footer from '../../components/Footer';

export default function Homebrew() {
    const [monsterList, setMonsterList] = useState([]);
    const [spellList, setSpellList] = useState([]);
    const [equipmentList, setEquipmentList] = useState([]);
    const [magicItemList, setMagicItemsList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Monsters");

    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const paramCategory = queryParams.get('category');

        if(paramCategory){
            setSelectedCategory(paramCategory);
        }

        document.title = 'My Homebrew - D&D Database';
        if (!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const monsters = await getAllMonster(token);
            setMonsterList(monsters);
            const spells = await getAllSpells(token);
            setSpellList(spells);
            const equipment = await getAllEquipments(token);
            setEquipmentList(equipment);
            const magicItems = await getAllMagicItems(token);
            setMagicItemsList(magicItems);
        }
        fetchData();
    }, []);

    async function handleDelete(id) {
        if (selectedCategory === "Monsters") {
            if (confirm("Do you want to delete this Monster?")) {
                await deleteMonster(id, token);
                try {
                    const monsters = await getAllMonster(token);
                    setMonsterList(monsters);
                    alert('Monster deleted successfully!');
                } catch (error) {
                    alert('Unable to deleted Monster!');
                }
            }
        }
        else if (selectedCategory === "Spells") {
            if (confirm("Do you want to delete this Spell?")) {
                await deleteSpell(id, token);
                try {
                    const spells = await getAllSpells(token);
                    setSpellList(spells);
                    alert('Spell deleted successfully!');
                } catch (error) {
                    alert('Unable to deleted Spell!');
                }
            }
        }

        else if (selectedCategory === "Equipments") {
            if (confirm("Do you want to delete this Equipment?")) {
                await deleteEquipment(id, token);
                try {
                    const equipment = await getAllEquipments(token);
                    setEquipmentList(equipment);
                    alert('Equipment deleted successfully!');
                } catch (error) {
                    alert('Unable to deleted Equipment!');
                }
            }
        }

        else if (selectedCategory === "Magic Items") {
            if (confirm("Do you want to delete this Magic Item?")) {
                await deleteMagicItem(id, token);
                try {
                    const magicItems = await getAllMagicItems(token);
                    setMagicItemsList(magicItems);
                    alert('Magic Item deleted successfully!');
                } catch (error) {
                    alert('Unable to deleted Magic Item!');
                }
            }
        }
    }

    async function handleEdit(id) {
        if (selectedCategory === "monsters")
            navigate(`/homebrew/create-monster?id=${id}`);
        else if (selectedCategory === "spells") 
            navigate(`/homebrew/create-spell?id=${id}`);
        else if (selectedCategory === "equipments")
            navigate(`/homebrew/create-equipment?id=${id}`);
        else if (selectedCategory === "magic-items")
            navigate(`/homebrew/create-magic-item?id=${id}`);
    }

    return (
        <>
            <Header />
            <Container>
                <SidebarContainer background={Logo}>
                    <div>
                        <SidebarList>
                            <SidebarListItem selected={selectedCategory === "monsters"} onClick={() => setSelectedCategory("monsters")}>My Monsters <GiSpikedDragonHead /></SidebarListItem>
                            <SidebarListItem selected={selectedCategory === "spells"} onClick={() => setSelectedCategory("spells")}>My Spells <GiMagicPalm /></SidebarListItem>
                            <SidebarListItem selected={selectedCategory === "equipments"} onClick={() => setSelectedCategory("equipments")}>My Equipments <GiAxeSword /></SidebarListItem>
                            <SidebarListItem selected={selectedCategory === "magic-items"} onClick={() => setSelectedCategory("magic-items")}>My Magic Items <GiMagicAxe /></SidebarListItem>
                        </SidebarList>
                    </div>
                </SidebarContainer>
                <Content>
                    <ItemContainer>
                        {selectedCategory === "monsters" ? (
                            <>
                                <Heading>
                                    <MainHeading>My Monsters</MainHeading>
                                    <AddButton onClick={() => navigate("/homebrew/create-monster")}>Create Monster</AddButton>
                                </Heading>
                                <ItemGrid>
                                    {monsterList.map((monster, index) => (
                                        <ItemInfo key={index}>
                                            <ItemLink
                                                to={`/homebrew/monster?id=${monster.id}`}
                                            >
                                                <ItemName>{monster.monster.name}</ItemName>
                                            </ItemLink>
                                            <ItemOptions>
                                                <ItemEdit title="Edit Monster" onClick={() => handleEdit(monster.id)}/>
                                                <ItemDelete title="Delete Monster" onClick={() => handleDelete(monster.id)} />
                                            </ItemOptions>
                                        </ItemInfo>
                                    ))}
                                </ItemGrid>
                            </>
                        ) : selectedCategory === "spells" ?
                            (
                                <>
                                    <Heading>
                                        <MainHeading>My Spells</MainHeading>
                                        <AddButton onClick={() => navigate("/homebrew/create-spell")}>Create Spell</AddButton>
                                    </Heading>
                                    <ItemGrid>
                                        {spellList.map((spell, index) => (
                                            <ItemInfo key={index}>
                                                <ItemLink
                                                    to={`/homebrew/spell?id=${spell.id}`}
                                                >
                                                    <ItemName>{spell.spell.name}</ItemName>
                                                </ItemLink>
                                                <ItemOptions>
                                                    <ItemEdit title="Edit Spell" onClick={() => handleEdit(spell.id)}/>
                                                    <ItemDelete title="Delete Spell" onClick={() => handleDelete(spell.id)} />
                                                </ItemOptions>
                                            </ItemInfo>
                                        ))}
                                    </ItemGrid>
                                </>
                            ) : selectedCategory === "equipments" ?
                                (
                                    <>
                                        <Heading>
                                            <MainHeading>My Equipments</MainHeading>
                                            <AddButton onClick={() => navigate("/homebrew/create-equipment")}>Create Equipment</AddButton>
                                        </Heading>
                                        <ItemGrid>
                                            {equipmentList.map((equipment, index) => (
                                                <ItemInfo key={index}>
                                                    <ItemLink
                                                        to={`/homebrew/equipment?id=${equipment.id}`}
                                                    >
                                                        <ItemName>{equipment.equipment.name}</ItemName>
                                                    </ItemLink>
                                                    <ItemOptions>
                                                        <ItemEdit title="Edit Equipment" onClick={() => handleEdit(equipment.id)}/>
                                                        <ItemDelete title="Delete Equipment" onClick={() => handleDelete(equipment.id)} />
                                                    </ItemOptions>
                                                </ItemInfo>
                                            ))}
                                        </ItemGrid>
                                    </>
                                ) : selectedCategory === "magic-items" ?
                                    (
                                        <>
                                            <Heading>
                                                <MainHeading>My Magic Items</MainHeading>
                                                <AddButton onClick={() => navigate("/homebrew/create-magic-item")}>Create Magic Item</AddButton>
                                            </Heading>
                                            <ItemGrid>
                                                {magicItemList.map((magicItem, index) => (
                                                    <ItemInfo key={index}>
                                                        <ItemLink
                                                            to={`/homebrew/magic-item?id=${magicItem.id}`}
                                                        >
                                                            <ItemName>{magicItem.magicItem.name}</ItemName>
                                                        </ItemLink>
                                                        <ItemOptions>
                                                            <ItemEdit title="Edit Magic Item" onClick={() => handleEdit(magicItem.id)}/>
                                                            <ItemDelete title="Delete Magic Item" onClick={() => handleDelete(magicItem.id)} />
                                                        </ItemOptions>
                                                    </ItemInfo>
                                                ))}
                                            </ItemGrid>
                                        </>
                                    ) : (<></>)}
                    </ItemContainer>
                </Content>
            </Container>
            <Footer/>
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

const ItemOptions = styled.div`
    border-left: 2px solid black;
    padding-left: 10px;
`;


const ItemInfo = styled.div`
    padding: 16px;
    background-color: #ccc;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    display: flex;
    justify-content: space-between;

    &:hover {
    background-color: #8f8f8f;
    }
`;

const ItemEdit = styled(BiEditAlt)`
    cursor: pointer;
    color: #000000;
    transition: color 0.2s ease-in-out;

    &:hover {
    color: #bb0000;
    }
`;

const ItemDelete = styled(BiTrashAlt)`
    cursor: pointer;
    color: #000000;
    transition: color 0.2s ease-in-out;

    &:hover {
    color: #bb0000;
    }
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
margin-top: 5px;
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 16px;
`;

const ItemLink = styled(Link)`
    text-decoration: none;
`;

const ItemName = styled.p`
color: #333;
`;

const Heading = styled.div`
    display: flex;
`;

const AddButton = styled.button`
    margin-left: 20%;
    margin-top: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background: #45cef7;
    height: 50px;
    width: 20%;
    border: 1px solid #d8dde3;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
    background-color: #39a4c5;
    }
`;
