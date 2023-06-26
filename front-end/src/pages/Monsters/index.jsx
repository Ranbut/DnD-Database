import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import styled from "styled-components";
import { getMonsters } from "../../services/DnDAPI/monstersApi";
import Logo from "../../assets/images/dnd.svg"
import Footer from '../../components/Footer';

export default function Monsters() {
  const [monstersList, setMonstersList] = useState([]);
  const [categorizedMonsters, setCategorizedMonsters] = useState({});
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    document.title = 'Monsters - D&D Database';
    async function fetchData() {
      const monsters = await getMonsters();
      setMonstersList(monsters);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const categorized = categorizeMonsters(monstersList);
    setCategorizedMonsters(categorized);
  }, [monstersList]);

  function categorizeMonsters(monsters) {
    const categorizedMonsters = {};

    monsters.forEach((monster) => {
      const firstLetter = monster.name.charAt(0).toUpperCase();
      if (!categorizedMonsters[firstLetter]) {
        categorizedMonsters[firstLetter] = [];
      }
      categorizedMonsters[firstLetter].push(monster);
    });

    return categorizedMonsters;
  }

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleAllClick = () => {
    setSelectedLetter("");
  };

  return (
    <>
      <Header />
      <Container>
        <SidebarContainer background={Logo}>
        <div>
          <SidebarList>
            <SidebarListItem
              onClick={handleAllClick}
              selected={selectedLetter === ""}
            >
              -
            </SidebarListItem>
            {Object.keys(categorizedMonsters).map((letter) => (
              <SidebarListItem
                key={letter}
                onClick={() => handleLetterClick(letter)}
                selected={selectedLetter === letter}
              >
                {letter}
              </SidebarListItem>
            ))}
          </SidebarList>
        </div>
        </SidebarContainer>
        <Content>
          <MonstersContainer>
            {selectedLetter === "" ? (
              <>
                <MainHeading>All Monsters</MainHeading>
                <MonsterGrid>
                  {monstersList.map((monster, index) => (
                    <MonsterLink
                      key={index}
                      to={`/monster?index=${monster.index}`}
                    >
                      <MonsterName>{monster.name}</MonsterName>
                    </MonsterLink>
                  ))}
                </MonsterGrid>
              </>
            ) : (
              <>
                <MainHeading>{selectedLetter}</MainHeading>
                <MonsterGrid>
                  {categorizedMonsters[selectedLetter].map((monster, index) => (
                    <MonsterLink
                      key={index}
                      to={`/monster?index=${monster.index}`}
                    >
                      <MonsterName>{monster.name}</MonsterName>
                    </MonsterLink>
                  ))}
                </MonsterGrid>
              </>
            )}
          </MonstersContainer>
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


const MonstersContainer = styled.div`
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

const MonsterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const MonsterLink = styled(Link)`
  padding: 16px;
  background-color: #ccc;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8f8f8f;
  }
`;

const MonsterName = styled.p`
  color: #333;
`;
