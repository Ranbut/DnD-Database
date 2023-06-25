import styled from "styled-components"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMonsters } from '../../services/DnDAPI/monstersApi';
import { getSpells } from '../../services/DnDAPI/spellsApi';
import { getEquipments, getMagicItems } from '../../services/DnDAPI/equipmentApi';
import { useEffect } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (searchQuery !== '') {
        const monsters = await getMonsters();
        for (let i = 0; i < monsters.length; i++) {
          const monster = monsters[i];
          monster.url = monster.url.replace("/api/monsters/", "/monster?index=");
        }
        const spells = await getSpells();
        for (let i = 0; i < spells.length; i++) {
          const spell = spells[i];
          spell.url = spell.url.replace("/api/spells/", "/spell?index=");
        }
        const { results: equipments } = await getEquipments();
        for (let i = 0; i < equipments.length; i++) {
          const equipment = equipments[i];
          equipment.url = equipment.url.replace("/api/equipment/", "/equipment?index=");
        }
        const { results: magicItems } = await getMagicItems();
        for (let i = 0; i < magicItems.length; i++) {
          const magicItem = magicItems[i];
          magicItem.url = magicItem.url.replace("/api/magic-items/", "/magic-item?index=");
        }
        const searchList = [...monsters, ...spells, ...equipments, ...magicItems];
        const filteredData = searchList
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 5);
        setFilteredArray(filteredData);
      } else {
        setFilteredArray([]);
      }
    }
    fetchData();
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {filteredArray.length > 0 && (
        <StyledSearchContainer>
          {filteredArray.map((item, index) => (
            <StyledLink onClick={() => setSearchQuery('')} key={index} to={item.url}>
              <div key={index}>{item.name}</div>
            </StyledLink>
          ))}
        </StyledSearchContainer>
      )}
    </div>
  );
}

const StyledSearchContainer = styled.div`
position: absolute;
top: 8%;
left: 41.8%;
background: white;
padding: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
width: 15%;
z-index: 9999;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`

const SearchInput = styled.input`
  width: 100%;
  color: #fff;
  background: 0;
  font-size: 18px;
  border-radius: 2px;
  border: 2px solid transparent;
  background-color: transparent;
  border-radius: 0.25rem;
  @media (max-width: 580px) {
    display: none;
  }
`;
