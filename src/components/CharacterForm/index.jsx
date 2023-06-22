import styled from "styled-components"
import React, { useState } from 'react';
import { createCharacter } from "../../services/charactersApi";

export default function CharacterForm({ token }) {
    const [characterData, setCharacterData] = useState({
        name: "",
        portrait: '',
        level: 1,
        race: "HUMAN",
        class: "FIGHTER",
        aligment: "NEUTRAL",
        background: '',
        strenght: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        languages: "Common",
        personality_traits: '',
        ideals: '',
        bonds: '',
        flaws: '',
        hair: '',
        skin: '',
        eyes: '',
        height: '',
        weight: 80,
        age: 20,
        organizations: '',
        allies: '',
        enemies: '',
        backstory: '',
        other_notes: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCharacterData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createCharacter(characterData, token);
            alert('Character created successfully!');
          } catch (error) {
            alert('Unable to create character!');
          }
    };

    return (
        <MainContainer>
            <MainFormContainer onSubmit={handleSubmit}>
                <BlockLabel>Basic Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Name <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="name"
                                value={characterData.name}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Level <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="level"
                                name="level"
                                max="30"
                                min="1"
                                value={characterData.level}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Race <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select
                                name="race"
                                value={characterData.race}
                                onChange={handleInputChange}
                            >
                                <option value="DRAGONBORN">Dragonborn</option>
                                <option value="DWARF">Dwarf</option>
                                <option value="ELF">Elf</option>
                                <option value="GNOME">Gnome</option>
                                <option value="HALF_ELF">Half elf</option>
                                <option value="HALFLING">Halfling</option>
                                <option value="HALF_ORC">Half orc</option>
                                <option value="HUMAN">Human</option>
                                <option value="TIEFLING">Tiefling</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Alignment <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="aligment"
                                value={characterData.aligment}
                                onChange={handleInputChange}
                            >
                                <option value="CHAOTIC_EVIL">Chaotic Evil</option>
                                <option value="CHAOTIC_GOOD">Chaotic Good</option>
                                <option value="CHAOTIC_NEUTRAL">Chaotic Neutral</option>
                                <option value="LAWFUL_EVIL">Lawful Evil</option>
                                <option value="LAWFUL_GOOD">Lawful Good</option>
                                <option value="LAWFUL_NEUTRAL">Lawful Neutral</option>
                                <option value="NEUTRAL">Neutral</option>
                                <option value="NEUTRAL_EVIL">Neutral Evil</option>
                                <option value="NEUTRAL_GOOD">Neutral Good</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Class <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="class"
                                value={characterData.class}
                                onChange={handleInputChange}
                            >
                                <option value="BARBARIAN">Barbarian</option>
                                <option value="BARD">Bard</option>
                                <option value="CLERIC">Cleric</option>
                                <option value="DRUID">Druid</option>
                                <option value="FIGHTER">Fighter</option>
                                <option value="MONK">Monk</option>
                                <option value="PALADIN">Paladin</option>
                                <option value="RANGER">Ranger</option>
                                <option value="ROGUE">Rogue</option>
                                <option value="SORCERER">Sorcerer</option>
                                <option value="WARLOCK">Warlock</option>
                                <option value="WIZARD">Wizard</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Background
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="background"
                                value={characterData.background}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Abilities:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Strenght Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="strenght"
                                value={characterData.strenght}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Dexterity Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="dexterity"
                                value={characterData.dexterity}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Constitution Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="constitution"
                                value={characterData.constitution}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Intelligence Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="intelligence"
                                value={characterData.intelligence}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Wisdom Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="wisdom"
                                value={characterData.wisdom}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Charisma Score <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="charisma"
                                value={characterData.charisma}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Personality Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Traits
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="personality_traits"
                                value={characterData.personality_traits}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Ideals
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="ideals"
                                value={characterData.ideals}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Bonds
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="bonds"
                                value={characterData.bonds}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Flaws
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="flaws"
                                value={characterData.flaws}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Appearance Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Hair
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="hair"
                                value={characterData.hair}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Ideals
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="skin"
                                value={characterData.skin}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Eyes
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="eyes"
                                value={characterData.eyes}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Height
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="height"
                                value={characterData.height}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Weight
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="weight"
                                min="0"
                                value={characterData.weight}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Age
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="age"
                                max="1200"
                                min="8"
                                value={characterData.age}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Additional Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Organizations
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="organizations"
                                value={characterData.organizations}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Allies
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="allies"
                                value={characterData.allies}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Enemies
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="enemies"
                                value={characterData.enemies}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Backstory
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="backstory"
                                value={characterData.backstory}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Other Notes
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="other_notes"
                                value={characterData.other_notes}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <button type="submit">Create Character</button>
            </MainFormContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    font-family: Roboto, Helvetica,sans-serif;
`;

const MainFormContainer = styled.form`
    font-size: 15px;
    margin-top: 20px;
    margin-left: 20px;
`;

const BlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BlockLabel = styled.div`
    font-size: 25px;
    margin-top: 10px;
    border-bottom: 1px solid #822000;
    border-bottom-color: rgb(216, 53, 0);
`;

const ItemContainer = styled.div`
    flex-basis: 25%;
`;

const ItemLabel = styled.div`
    color: #242527;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    position: relative;
`;

const ItemInput = styled.div`
    height: 50px;
    width: 100%;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

const AddButton = styled.button`

`;

const RemoveButton = styled.button`

`;

const Optional = styled.span`
    color: red;
`;