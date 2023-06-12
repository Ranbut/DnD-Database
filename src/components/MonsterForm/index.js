import styled from "styled-components"
import React, { useState } from 'react';

export default function MonsterForm() {
    const [monsterData, setMonsterData] = useState({
        index: "",
        name: "",
        size: "",
        type: "",
        alignment: "",
        armor_class: {
                type: "",
                value: 1
            }
        ,
        hit_points: 1,
        hit_dice: "",
        hit_points_roll: "",
        speed: "",
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        proficiencies: "",
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: {
            blindsight: "",
            darkvision: "",
            passive_perception: 1
        },
        languages: "",
        challenge_rating: 0,
        xp: 0,
        special_abilities: [],
        actions: [],
        legendary_actions: [],
        image: "",
    });

    const handleAddLegendaryAction = () => {
        const newAction = {
            name: "",
            desc: ""
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

    const handleAddSpecialAbility = () => {
        const newAbility = {
          name: "",
          desc: ""
        };
        setMonsterData(prevData => ({
          ...prevData,
          special_abilities: [...prevData.special_abilities, newAbility]
        }));
      };
    
    const handleSpecialAbilityChange = (event, index, field) => {
        const { value } = event.target;
        setMonsterData(prevData => ({
          ...prevData,
          special_abilities: prevData.special_abilities.map((ability, i) => {
            if (i === index) {
              return { ...ability, [field]: value };
            }
            return ability;
          })
        }));
    };
    
    const handleRemoveSpecialAbility = (index) => {
        setMonsterData(prevData => ({
          ...prevData,
          special_abilities: prevData.special_abilities.filter((_, i) => i !== index)
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
      
        const nameParts = name.split(".");
      
        if (nameParts.length === 2) {
          const [nestedProp, nestedField] = nameParts;
          setMonsterData((prevData) => ({
            ...prevData,
            [nestedProp]: { ...prevData[nestedProp], [nestedField]: value },
          }));
        } else {
          if (name === "challenge_rating") {
            setMonsterData((prevData) => ({
              ...prevData,
              [name]: parseFloat(value),
            }));
          } else {
            setMonsterData((prevData) => ({ ...prevData, [name]: value }));
          }
        }
      };      

    const getXP = () => {
        switch (monsterData.challenge_rating){
            case 0:
                monsterData.xp = 10;
                break;
            case 0.125:
                monsterData.xp = 25;
                break;
            case 0.25:
                monsterData.xp = 50;
                break;
            case 0.5:
                monsterData.xp = 100;
                break;
            case 1:
                monsterData.xp = 200;
            break;
            case 2:
                monsterData.xp = 450;
            break;
            case 3:
                monsterData.xp = 700;
            break;
            case 4:
                monsterData.xp = 1100;
            break;
            case 5:
                monsterData.xp = 1800;
            break;
            case 6:
                monsterData.xp = 2300;
            break;
            case 7:
                monsterData.xp = 2900;
            break;
            case 8:
                monsterData.xp = 3900;
            break;
            case 9:
                monsterData.xp = 5000;
            break;
            case 10:
                monsterData.xp = 5900;
            break;
            case 11:
                monsterData.xp = 7200;
            break;
            case 12:
                monsterData.xp = 8400;
            break;
            case 13:
                monsterData.xp = 10000;
            break;
            case 14:
                monsterData.xp = 11500;
            break;
            case 15:
                monsterData.xp = 13000;
            break;
            case 16:
                monsterData.xp = 15000;
            break;
            case 17:
                monsterData.xp = 18000;
            break;
            case 18:
                monsterData.xp = 20000;
            break;
            case 19:
                monsterData.xp = 22000;
            break;
            case 20:
                monsterData.xp = 22000;
            break;
            case 21:
                monsterData.xp = 33000;
            break;
            case 22:
                monsterData.xp = 41000;
            break;
            case 23:
                monsterData.xp = 50000;
            break;
            case 24:
                monsterData.xp = 62000;
            break;
            case 25:
                monsterData.xp = 75000;
            break;
            case 26:
                monsterData.xp = 90000;
            break;
            case 27:
                monsterData.xp = 105000;
            break;
            case 28:
                monsterData.xp = 120000;
            break;
            case 29:
                monsterData.xp = 135000;
            break;
            case 30:
                monsterData.xp = 155000;
            break;
            default:
                monsterData.xp = 10;
            break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getXP();
        console.log(monsterData);
    };

    return (
        <MainContainer>
            <MainFormContainer onSubmit={handleSubmit}>
                <BlockLabel>Basic Information:</BlockLabel>
                <BlockContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Monster Name <Optional>*</Optional>
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
                            Monster Type <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select
                                name="type"
                                value={monsterData.type}
                                onChange={handleInputChange}
                            >
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
                            Alignment <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="alignment"
                                value={monsterData.alignment}
                                onChange={handleInputChange}
                            >
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
                            Size <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="size"
                                value={monsterData.size}
                                onChange={handleInputChange}
                            >
                                <option value="Tiny">Tiny</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Huge">Huge</option>
                                <option value="Gargantuan">Gargantuan</option>
                            </select>
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Challenge Rating <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="challenge_rating"
                                value={monsterData.challenge_rating}
                                onChange={handleInputChange}
                            >
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
                            Armor Class <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="armor_class.value"
                                value={monsterData.armor_class.value}
                                max="100000"
                                min="1"
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Armor Class Type <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="armor_class.type"
                                value={monsterData.armor_class.type}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Average Hit Points <Optional>*</Optional>
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
                            Hit Points Die Count <Optional>*</Optional>
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
                            Hit Points Die Value <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <select name="challenge_rating"
                                value={monsterData.challenge_rating}
                                onChange={handleInputChange}
                            >
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
                            Hit Points Modifier <Optional>*</Optional>
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
                <BlockLabel>Speed and Senses:</BlockLabel>
                <BlockContainer>
                <ItemContainer>
                        <ItemLabel>
                            Speed <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="text"
                                name="speed"
                                value={monsterData.speed}
                                onChange={handleInputChange}
                            />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                            Passive Perception <Optional>*</Optional>
                        </ItemLabel>
                        <ItemInput>
                            <input
                                type="number"
                                name="senses.passive_perception"
                                value={monsterData.senses.passive_perception}
                                max="100000"
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
                            Strength Score <Optional>*</Optional>
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
                            Dexterity Score <Optional>*</Optional>
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
                            Constitution Score <Optional>*</Optional>
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
                            Intelligence Score <Optional>*</Optional>
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
                            Wisdom Score <Optional>*</Optional>
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
                            Charisma Score <Optional>*</Optional>
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
                <BlockLabel>Damage and Condition Behavior:</BlockLabel>
                <BlockContainer>
                <ItemContainer>
                        <ItemLabel>
                        Damage Vulnerabilities
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            name="damage_vulnerabilities"
                            value={monsterData.damage_vulnerabilities}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                        Damage Resistances
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            name="damage_resistances"
                            value={monsterData.damage_resistances}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                        Damage Immunities
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            name="damage_immunities"
                            value={monsterData.damage_immunities}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemLabel>
                        Condition Immunities
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            name="condition_immunities"
                            value={monsterData.condition_immunities}
                            max="30"
                            min="1"
                            onChange={handleInputChange}
                        />
                        </ItemInput>
                    </ItemContainer>
                </BlockContainer>
                <BlockLabel>Actions:</BlockLabel>
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
                <BlockLabel>Legendary Action:</BlockLabel>
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
                <BlockLabel>Special Abilities:</BlockLabel>
                <BlockContainer>
                    {monsterData.special_abilities.map((ability, index) => (
                    <div key={index}>
                        <ItemContainer>
                        <ItemLabel>
                            Ability Name:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            value={ability.name}
                            onChange={(event) => handleSpecialAbilityChange(event, index, "name")}
                            />
                        </ItemInput>
                        </ItemContainer>
                        <ItemContainer>
                        <ItemLabel>
                            Ability Description:
                        </ItemLabel>
                        <ItemInput>
                            <input
                            type="text"
                            value={ability.desc}
                            onChange={(event) => handleSpecialAbilityChange(event, index, "desc")}
                            />
                        </ItemInput>
                        </ItemContainer>
                        <button onClick={() => handleRemoveSpecialAbility(index)}>
                        Remove Ability
                        </button>
                    </div>
                    ))}
                    <button onClick={handleAddSpecialAbility}>
                    Add Special Ability 
                    </button>
                </BlockContainer>
                <button type="submit">Create Monster</button>
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