import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import styled from "styled-components";
import { getSpells } from "../../services/DnDAPI/spellsApi";
import Logo from "../../assets/images/dnd.svg"
import Footer from '../../components/Footer';

export default function Spells() {
  const [spellsList, setSpellsList] = useState([]);
  const [categorizedSpells, setCategorizedSpells] = useState({});
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    document.title = 'Spells - D&D Database';
    async function fetchData() {
      const spells = await getSpells();
      setSpellsList(spells);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const categorized = categorizeSpells(spellsList);
    setCategorizedSpells(categorized);
  }, [spellsList]);

  function categorizeSpells(spells) {
    const categorizedSpells = {};

    spells.forEach((spell) => {
      const firstLetter = spell.name.charAt(0).toUpperCase();
      if (!categorizedSpells[firstLetter]) {
        categorizedSpells[firstLetter] = [];
      }
      categorizedSpells[firstLetter].push(spell);
    });

    return categorizedSpells;
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
            {Object.keys(categorizedSpells).map((letter) => (
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
          <SpellsContainer>
            {selectedLetter === "" ? (
              <>
                <MainHeading>All Spells</MainHeading>
                <SpellGrid>
                  {spellsList.map((spell, index) => (
                    <SpellLink
                      key={index}
                      to={`/spell?index=${spell.index}`}
                    >
                      <SpellName>{spell.name}</SpellName>
                    </SpellLink>
                  ))}
                </SpellGrid>
              </>
            ) : (
              <>
                <MainHeading>{selectedLetter}</MainHeading>
                <SpellGrid>
                  {categorizedSpells[selectedLetter].map((spell, index) => (
                    <SpellLink
                      key={index}
                      to={`/spell?index=${spell.index}`}
                    >
                      <SpellName>{spell.name}</SpellName>
                    </SpellLink>
                  ))}
                </SpellGrid>
              </>
            )}
          </SpellsContainer>
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


const SpellsContainer = styled.div`
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

const SpellGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const SpellLink = styled(Link)`
  padding: 16px;
  background-color: #ccc;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8f8f8f;
  }
`;

const SpellName = styled.p`
  color: #333;
`;
