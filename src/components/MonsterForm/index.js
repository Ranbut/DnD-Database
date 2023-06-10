import styled from "styled-components"
import React, { useState } from 'react';

export default function MonsterForm() {
    const [monsterData, setMonsterData] = useState({
        index: "",
        name: "",
        size: "",
        type: "",
        alignment: "",
        armor_class: [
            {
                type: "",
                value: 0
            }
        ],
        hit_points: 0,
        hit_dice: "",
        hit_points_roll: "",
        speed: {
            walk: "",
            fly: "",
            swim: ""
        },
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        proficiencies: [
            {
                value: 0,
                proficiency: {
                    index: "",
                    name: "",
                    url: ""
                }
            }
        ],
        damage_vulnerabilities: [],
        damage_resistances: [],
        damage_immunities: [],
        condition_immunities: [],
        senses: {
            blindsight: "",
            darkvision: "",
            passive_perception: 0
        },
        languages: "",
        challenge_rating: 0,
        xp: 0,
        special_abilities: [
            {
                name: "",
                desc: "",
                usage: {
                    type: "",
                    times: 0,
                    rest_types: []
                }
            }
        ],
        actions: [],
        legendary_actions: [],
        image: "",
        url: ""
    });

    const handleAddLegendaryAction = () => {
        const newAction = {
            name: "",
            desc: "",
            dc: {
                dc_type: {
                    index: "",
                    name: "",
                    url: ""
                },
                dc_value: 0,
                success_type: ""
            },
            damage: [
                {
                    damage_type: {
                        index: "",
                        name: "",
                        url: ""
                    },
                    damage_dice: ""
                }
            ]
        };
        setMonsterData(prevData => ({
            ...prevData,
            legendary_actions: [...prevData.legendary_actions, newAction]
        }));
    };

    const handleAddAction = () => {
        const newAction = {
            name: "",
            desc: ""
        };
        setMonsterData(prevData => ({
            ...prevData,
            actions: [...prevData.actions, newAction]
        }));
    };

    const handleActionChange = (event, index, field) => {
        const { value } = event.target;
        setMonsterData(prevData => ({
            ...prevData,
            actions: prevData.actions.map((action, i) => {
                if (i === index) {
                    return { ...action, [field]: value };
                }
                return action;
            })
        }));
    };

    const handleRemoveAction = (index) => {
        setMonsterData(prevData => ({
            ...prevData,
            actions: prevData.actions.filter((_, i) => i !== index)
        }));
    };

    const handleLegendaryActionChange = (event, index, field) => {
        const { value } = event.target;
        setMonsterData(prevData => ({
            ...prevData,
            legendary_actions: prevData.legendary_actions.map((action, i) => {
                if (i === index) {
                    return { ...action, [field]: value };
                }
                return action;
            })
        }));
    };

    const handleRemoveLegendaryAction = (index) => {
        setMonsterData(prevData => ({
            ...prevData,
            legendary_actions: prevData.legendary_actions.filter((_, i) => i !== index)
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMonsterData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(monsterData);
    };

    return (
        <MainContainer>
            <MainFormContainer onSubmit={handleSubmit}>
                <BlockLabel>Basic Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Monster Name:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="name"
                                value={monsterData.name}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel> 
                            Monster Type:
                        </ItemLabel>
                        <ItemInput>
                            <select
                                name="type"
                                value={monsterData.type}
                                onChange={handleInputChange}
                            >
                                <option value="">—</option>
                                <option value="aberration">Aberration</option>
                                <option value="beast">Beast</option>
                                <option value="celestial">Celestial</option>
                                <option value="construct">Construct</option>
                                <option value="dragon">Dragon</option>
                                <option value="elemental">Elemental</option>
                                <option value="fey">Fey</option>
                                <option value="fiend">Fiend</option>
                                <option value="giant">Giant</option>
                                <option value="humanoid">Humanoid</option>
                                <option value="monstrosity">Monstrosity</option>
                                <option value="ooze">Ooze</option>
                                <option value="plant">Plant</option>
                                <option value="undead">Undead</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Alignment:
                        </ItemLabel>
                        <ItemInput>
                            <select name="alignment"
                                value={monsterData.alignment}
                                onChange={handleInputChange}
                            >
                                <option value="">—</option>
                                <option value="Any Alignment">Any Alignment</option>
                                <option value="Any Chaotic Alignment">Any Chaotic Alignment</option>
                                <option value="Any Evil Alignment">Any Evil Alignment</option>
                                <option value="Any Good Alignment">Any Good Alignment</option>
                                <option value="Any Lawful Alignment">Any Lawful Alignment</option>
                                <option value="Any Non-Good Alignment">Any Non-Good Alignment</option>
                                <option value="Any Non-Lawful Alignment">Any Non-Lawful Alignment</option>
                                <option value="Chaotic Evil">Chaotic Evil</option>
                                <option value="Chaotic Good">Chaotic Good</option>
                                <option value="Chaotic Neutral">Chaotic Neutral</option>
                                <option value="Lawful Evil">Lawful Evil</option>
                                <option value="Lawful Good">Lawful Good</option>
                                <option value="Lawful Neutral">Lawful Neutral</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Neutral Evil">Neutral Evil</option>
                                <option value="Neutral Good">Neutral Good</option>
                                <option value="Typically Chaotic Evil">Typically Chaotic Evil</option>
                                <option value="Typically Chaotic Good">Typically Chaotic Good</option>
                                <option value="Typically Chaotic Neutral">Typically Chaotic Neutral</option>
                                <option value="Typically Lawful Evil">Typically Lawful Evil</option>
                                <option value="Typically Lawful Good">Typically Lawful Good</option>
                                <option value="Typically Lawful Neutral">Typically Lawful Neutral</option>
                                <option value="Typically Neutral">Typically Neutral</option>
                                <option value="Typically Neutral Evil">Typically Neutral Evil</option>
                                <option value="Typically Neutral Good">Typically Neutral Good</option>
                                <option value="Unaligned">Unaligned</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Size:
                        </ItemLabel>
                        <ItemInput>
                            <select name="size"
                                value={monsterData.size}
                                onChange={handleInputChange}
                            >
                                <option value="">—</option>
                                <option value="Gargantuan">Gargantuan</option>
                                <option value="Huge">Huge</option>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                                <option value="Tiny">Tiny</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Challenge Rating:
                        </ItemLabel>
                        <ItemInput>
                            <select name="challenge_rating"
                                value={monsterData.challenge_rating}
                                onChange={handleInputChange}
                            >
                                <option value="">—</option>
                                <option value="0">0</option>
                                <option value="0.125">1/8</option>
                                <option value="0.25">1/4</option>
                                <option value="0.5">1/2</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Hit Points and Armor Class:</BlockLabel>
                <BlockContainer>
                <ItemContainer>
                        <ItemLabel>
                            Armor Class:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="armor_class[0].value"
                                value={monsterData.armor_class[0].value}
                                max="100000"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Armor Class Type:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="armor_class[0].type"
                                value={monsterData.armor_class[0].type}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Average Hit Points:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="hit_points"
                                value={monsterData.hit_points}
                                max="100000"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Hit Points Die Count:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="hit_points"
                                value={monsterData.hit_points}
                                max="100000"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Hit Points Die Value:
                        </ItemLabel>
                        <ItemInput>
                            <select name="challenge_rating"
                                value={monsterData.challenge_rating}
                                onChange={handleInputChange}
                            >
                                <option value="">—</option>
                                <option value="d4">d4</option>
                                <option value="d6">d6</option>
                                <option value="d8">d8</option>
                                <option value="d10">d10</option>
                                <option value="d12">d12</option>
                                <option value="d20">d20</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Hit Points Modifier:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="strength"
                                value={monsterData.strength}
                                max="30"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Abilities:</BlockLabel>
                <BlockContainer>
                <ItemContainer>
                        <ItemLabel>
                            Strength (STR) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="strength"
                            value={monsterData.strength}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Dexterity (DEX) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="dexterity"
                            value={monsterData.dexterity}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Constitution (CON) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="constitution"
                            value={monsterData.constitution}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Intelligence (INT) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="intelligence"
                            value={monsterData.intelligence}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Wisdom (WIS) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="wisdom"
                            value={monsterData.wisdom}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Charisma (CHA) Score:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="number"
                            name="charisma"
                            value={monsterData.charisma}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Damage Response:</BlockLabel>
                <BlockLabel>Moveset:</BlockLabel>
                <BlockContainer>
                {monsterData.actions.map((action, index) => (
                    <ItemContainer key={index}>
                        <ItemLabel>
                            Action Name:
                        </ItemLabel>
                            <ItemInput>
                                <input
                                    type="text"
                                    value={action.name}
                                    onChange={(event) => handleActionChange(event, index, "name")}
                                />
                            </ItemInput>
                        <ItemLabel>
                            Action Description:
                        </ItemLabel>
                            <ItemInput>
                                <input
                                    type="text"
                                    value={action.desc}
                                    onChange={(event) => handleActionChange(event, index, "desc")}
                                />
                            </ItemInput>
                        <RemoveButton onClick={() => handleRemoveAction(index)}>Remove</RemoveButton>
                    </ItemContainer>
                ))}
                </BlockContainer>
                <AddButton onClick={handleAddAction}>Add Action</AddButton>
                <BlockContainer>
                {monsterData.legendary_actions.map((action, index) => (
                    <ItemContainer key={index}>
                        <ItemLabel>
                            Legendary Action Name:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                value={action.name}
                                onChange={(event) => handleLegendaryActionChange(event, index, "name")}
                            />
                        </ItemInput>
                        <ItemLabel>
                            Legendary Action Description:
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                value={action.desc}
                                onChange={(event) => handleLegendaryActionChange(event, index, "desc")}
                            />
                        </ItemInput>
                        <RemoveButton onClick={() => handleRemoveLegendaryAction(index)}>Remove</RemoveButton>
                    </ItemContainer>
                ))}
                </BlockContainer>
                <AddButton onClick={handleAddLegendaryAction}>Add Legendary Action</AddButton>
            </MainFormContainer>
            <button type="submit">Create Monster</button>
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