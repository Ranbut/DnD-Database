import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/index.jsx";
import styled from "styled-components";
import { getSpells } from "../../services/DnDAPI/spellsApi.jsx";

export default function Spells() {
    const [spellsList, setSpellsList] = useState([]);
    const [categorizedSpells, setCategorizedSpells] = useState({});

    useEffect(() => {
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
        const categorizedMonsters = {};

        spells.forEach((spell) => {
            const firstLetter = spell.name.charAt(0).toUpperCase();
            if (!categorizedMonsters[firstLetter]) {
                categorizedMonsters[firstLetter] = [];
            }
            categorizedMonsters[firstLetter].push(spell);
        });

        return categorizedMonsters;
    }

    return (
        <>
          <Header />
          <Container>
            {Object.entries(categorizedSpells).map(([letter, spells]) => (
              <CategoryContainer key={letter}>
                <MainHeading>{letter}</MainHeading>
                <SpellGrid>
                  {spells.map((spell, index) => (
                    <SpellLink key={index} to={`/spell?index=${spell.index}`}>
                      <SpellName>{spell.name}</SpellName>
                    </SpellLink>
                  ))}
                </SpellGrid>
              </CategoryContainer>
            ))}
          </Container>
        </>
      );
      
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryContainer = styled.div`
  margin-left: 16px;
`;

const MainHeading = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
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
`;

const SpellName = styled.p`
  color: #333;
`;