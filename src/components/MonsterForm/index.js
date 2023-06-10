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
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
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
        actions: [
            {
                name: "",
                multiattack_type: "",
                desc: "",
                actions: [
                    {
                        action_name: "",
                        count: 0,
                        type: ""
                    }
                ]
            }
        ],
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
        // Here you can do whatever you want with the generated monsterData object
        console.log(monsterData);
      };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Monster Name:
                <input
                    type="text"
                    name="name"
                    value={monsterData.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Monster Type:
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
            </label>
            <label>
                Alignment:
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
            </label>
            <label>
                Size:
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
            </label>
            <label>
                Challenge Rating:
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
            </label>
            <label>
                Average Hit Points:
                <input
                    type="number"
                    name="hit_points"
                    value={monsterData.hit_points}
                    max="100000"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Hit Points Die Count:
                <input
                    type="number"
                    name="hit_points"
                    value={monsterData.hit_points}
                    max="100000"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Hit Points Die Value:
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
            </label>
            <label>
                Hit Points Modifier:
                <input
                    type="number"
                    name="strength"
                    value={monsterData.strength}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Strength (STR) Score:
                <input
                    type="number"
                    name="strength"
                    value={monsterData.strength}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Dexterity (DEX) Score:
                <input
                    type="number"
                    name="dexterity"
                    value={monsterData.dexterity}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Constitution (CON) Score:
                <input
                    type="number"
                    name="constitution"
                    value={monsterData.constitution}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Intelligence (INT) Score:
                <input
                    type="number"
                    name="intelligence"
                    value={monsterData.intelligence}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Wisdom (WIS) Score:
                <input
                    type="number"
                    name="wisdom"
                    value={monsterData.wisdom}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Charisma (CHA) Score:
                <input
                    type="number"
                    name="charisma"
                    value={monsterData.charisma}
                    max="30"
                    min="1"
                    onChange={handleInputChange}
                />
            </label>
            {monsterData.legendary_actions.map((action, index) => (
            <div key={index}>
                <label>
                Legendary Action Name:
                <input
                    type="text"
                    value={action.name}
                    onChange={(event) => handleLegendaryActionChange(event, index, "name")}
                />
                </label>
                <label>
                Legendary Action Description:
                <input
                    type="text"
                    value={action.desc}
                    onChange={(event) => handleLegendaryActionChange(event, index, "desc")}
                />
                </label>
                <button onClick={() => handleRemoveLegendaryAction(index)}>Remove</button>
            </div>
            ))}
            <button onClick={handleAddLegendaryAction}>Add Legendary Action</button>
            <button type="submit">Create Monster</button>
        </form>
    );
};

