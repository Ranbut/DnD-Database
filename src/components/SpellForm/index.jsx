import styled from "styled-components"
import React, { useState } from 'react';
import { createSpell } from "../../services/spellsApi";

export default function SpellForm({ token }) {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);
    const [school, setSchool] = useState('');
    const [castingTime, setCastingTime] = useState(0);
    const [castingTimeType, setCastingTimeType] = useState('');
    const [castingTimeDescription, setCastingTimeDescription] = useState('');
    const [componentVerbal, setComponentVerbal] = useState(false);
    const [componentSomatic, setComponentSomatic] = useState(false);
    const [componentMaterial, setComponentMaterial] = useState(false);
    const [componentMaterialDesc, setComponentMaterialDesc] = useState('');
    const [rangeType, setRangeType] = useState('');
    const [rangeDistance, setRangeDistance] = useState(0);
    const [durationType, setDurationType] = useState('');
    const [duration, setDuration] = useState(0);
    const [ritual, setRitual] = useState(false);
    const [description, setDescription] = useState('');
    const [highLevel, setHighLevel] = useState('');
    const [haveDamage, setHaveDamage] = useState(false);
    const [damageType, setDamageType] = useState('');
    const [dcTypeName, setDcTypeName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        function getComponents(componentVerbal, componentSomatic, componentMaterial) {
            const components = [];
            
            if (componentVerbal) {
              components.push("V");
            }
            
            if (componentSomatic) {
              components.push("S");
            }
            
            if (componentMaterial) {
              components.push("M");
            }
            
            return components;
          }

        const spellData = {
            index: name.toLowerCase(),
            name: name,
            classes: [],
            desc: [description],
            range: rangeType + (rangeType === "Self" || rangeType === "Touch" ? "" : " " + rangeDistance + " feet"),
            components: getComponents(componentVerbal, componentSomatic, componentMaterial),
            material: componentMaterialDesc,
            ritual: ritual,
            duration: durationType + " " + duration.toString(),
            casting_time: castingTimeType + " " + castingTime.toString(),
            level: level.toString(),
            higher_level: [highLevel],
            dc:{
                dc_type:{
                    name: dcTypeName
                }
            },
            damage_type: {
                name: damageType
            },
            school: {
              name: school,
            }
          }
          console.log(spellData);
          await createSpell(spellData, token);
        try {
            alert('Spell created successfully!');
          } catch (error) {
            alert('Unable to create spell!');
          }
    };
    
    return (
        <MainContainer>
            <SpellHeading>{name}</SpellHeading>
            <Label>Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Spell Name <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-spell-name" value={name} onChange={(e) => setName(e.target.value)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Spell Level <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-spell-level" name="spell-level" value={level} onChange={(e) => setLevel(Number(e.target.value))}>
                        <option value="0" id="field-spell-level-0">Cantrip</option>
                        <option value="1" id="field-spell-level-1">1st</option>
                        <option value="2" id="field-spell-level-2">2nd</option>
                        <option value="3" id="field-spell-level-3">3rd</option>
                        <option value="4" id="field-spell-level-4">4th</option>
                        <option value="5" id="field-spell-level-5">5th</option>
                        <option value="6" id="field-spell-level-6">6th</option>
                        <option value="7" id="field-spell-level-7">7th</option>
                        <option value="8" id="field-spell-level-8">8th</option>
                        <option value="9" id="field-spell-level-9">9th</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Spell School <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-spell-level" name="spell-level" value={school} onChange={(e) => setSchool(e.target.value)}>
                        <option value="Abjuration" id="field-spell-school-0">Abjuration</option>
                        <option value="Conjuration" id="field-spell-school-1">Conjuration</option>
                        <option value="Divination" id="field-spell-school-2">Divination</option>
                        <option value="Enchantment" id="field-spell-school-3">Enchantment</option>
                        <option value="Evocation" id="field-spell-school-4">Evocation</option>
                        <option value="Illusion" id="field-spell-school-5">Illusion</option>
                        <option value="Necromancy" id="field-spell-school-6">Necromancy</option>
                        <option value="Transmutation" id="field-spell-school-7">Transmutation</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Casting Time <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" min="1" max="99" id="field-spell-casting-time" value={castingTime} onChange={(e) => setCastingTime(e.target.value)}/>
                    <ItemSelect id="field-spell-casting-time-type" name="spell-level" value={castingTimeType} onChange={(e) => setCastingTimeType(e.target.value)}>
                        <option value="Action" id="field-spell-casting-time-type-0">Action</option>
                        <option value="Bonus Action" id="field-spell-casting-time-type-1">Bonus Action</option>
                        <option value="Hour" id="field-spell-casting-time-type-2">Hour</option>
                        <option value="Minute" id="field-spell-casting-time-type-3">Minute</option>
                        <option value="No Action" id="field-spell-casting-time-type-4">No Action</option>
                        <option value="Reaction" id="field-spell-casting-time-type-5">Reaction</option>
                        <option value="Special" id="field-spell-casting-time-type-6">Special</option>
                    </ItemSelect>
                    <ItemLabel>Reaction Casting Time Description <Required>*</Required></ItemLabel>
                    <ItemInputText disabled={castingTimeType === "Reaction"} type="text" id="field-spell-casting-time-description" value={castingTimeDescription} onChange={(e) => setCastingTimeDescription(e.target.value)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Verbal (V)</ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-spell-concentration-verbal" checked={componentVerbal} onChange={() => setComponentVerbal((prevState) => !prevState)}/>
                    <ItemLabel>Somatic (S)</ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-spell-ritual-somatic" checked={componentSomatic} onChange={() => setComponentSomatic((prevState) => !prevState)}/>
                    <ItemLabel>Material (S)</ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-spell-component-material" checked={componentMaterial} onChange={() => setComponentMaterial((prevState) => !prevState)}/>
                    {componentMaterial ? (<>
                    <ItemLabel>Material Description <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-spell-component-material-description" value={componentMaterialDesc} onChange={(e) => setComponentMaterialDesc(e.target.value)}/>
                    </>) : (<></>)}
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Spell Range Type <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-spell-range-type" name="spell-range" value={rangeType} onChange={(e) => setRangeType(e.target.value)}>
                        <option value="Self" id="field-spell-range-type-0">Self</option>
                        <option value="Touch" id="field-spell-range-type-1">Touch</option>
                        <option value="Ranged" id="field-spell-range-type-2">Ranged</option>
                        <option value="Sight" id="field-spell-range-type-3">Sight</option>
                        <option value="Unlimited" id="field-spell-range-type-4">Unlimited</option>
                    </ItemSelect>
                    <ItemLabel>Range Distance (FT.) <Required>*</Required></ItemLabel>
                    <ItemInputNumber disabled={rangeType === "Self" || rangeType === "Touch"} type="number" min="1" max="1000" id="field-spell-range-distance" value={rangeDistance} onChange={(e) => setRangeDistance(e.target.value)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Duration Type <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-spell-duration-type" name="spell-duration" value={durationType} onChange={(e) => setDurationType(e.target.value)}>
                        <option value="Concentration" id="field-spell-duration-type-0">Concentration</option>
                        <option value="Instantaneous" id="field-spell-duration-type-1">Instantaneous</option>
                        <option value="Special" id="field-spell-duration-type-2">Special</option>
                        <option value="Time" id="field-spell-duration-type-3">Time</option>
                        <option value="Until Dispelled" id="field-spell-duration-type-4">Until Dispelled</option>
                        <option value="Until Dispelled or Tiggered" id="field-spell-duration-type-4">Until Dispelled or Tiggered</option>
                    </ItemSelect>
                    <ItemLabel>Duration <Required>*</Required></ItemLabel>
                    <ItemInputNumber disabled={durationType === "Instantaneous" || 
                    durationType === "Until Dispelled" ||
                    durationType === "Until Dispelled or Tiggered"
                    } type="number" min="1" max="1000" id="field-spell-duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Ritual Spell?</ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-spell-ritual" checked={ritual} onChange={() => setRitual((prevState) => !prevState)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Does Damage?</ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-spell-damage" checked={haveDamage} onChange={() => setHaveDamage((prevState) => !prevState)}/>
                    {haveDamage ? (
                    <>
                        <ItemLabel>Type Damage <Required>*</Required></ItemLabel>
                        <ItemSelect id="field-spell-damage-type" name="spell-duration" value={damageType} onChange={(e) => setDamageType(e.target.value)}>
                        <option value="Acid" id="field-spell-damage-type-0">Acid</option>
                        <option value="Bludgeoning" id="field-spell-damage-type-1">Bludgeoning</option>
                        <option value="Cold" id="field-spell-damage-type-2">Cold</option>
                        <option value="Fire" id="field-spell-damage-type-3">Fire</option>
                        <option value="Force" id="field-spell-damage-type-4">Force</option>
                        <option value="Lightning" id="field-spell-damage-type-5">Lightning</option>
                        <option value="Necrotic" id="field-spell-damage-type-6">Necrotic</option>
                        <option value="Piercing" id="field-spell-damage-type-7">Piercing</option>
                        <option value="Poison" id="field-spell-damage-type-8">Poison</option>
                        <option value="Psychic" id="field-spell-damage-type-9">Psychic</option>
                        <option value="Radiant" id="field-spell-damage-type-10">Radiant</option>
                        <option value="Slashing" id="field-spell-damage-type-11">Slashing</option>
                        <option value="Thunder" id="field-spell-damage-type-12">Thunder</option>
                        </ItemSelect>
                        <ItemLabel>Dificult Class (DC) <Required>*</Required></ItemLabel>
                        <ItemSelect id="field-spell-damage-dc" name="spell-duration" value={dcTypeName} onChange={(e) => setDcTypeName(e.target.value)}>
                        <option value="CHA" id="field-spell-damage-dc-type-0">Charisma</option>
                        <option value="COS" id="field-spell-damage-dc-type-1">Constitution</option>
                        <option value="DEX" id="field-spell-dc-damage-type-2">Dexterity</option>
                        <option value="INT" id="field-spell-damage-dc-type-3">Intelligence</option>
                        <option value="STR" id="field-spell-damage-dc-type-4">Strength</option>
                        <option value="WIN" id="field-spell-damage-dc-type-5">Wisdom</option>
                        </ItemSelect>
                    </>
                    ) : (<></>)}
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Description <Required>*</Required></ItemLabel>
                    <ItemTextArea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>High Level Description</ItemLabel>
                    <ItemTextArea rows="4" cols="50" value={highLevel} onChange={(e) => setHighLevel(e.target.value)}/>
                </ItemContainer>
            </Container>
            <CreateButton onClick={handleSubmit}>Save Spell</CreateButton>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding: 3% 3%;
    font-family: Roboto, Helvetica,sans-serif;
`;

const SpellHeading = styled.div`
    font-size: 36px;
    border-color: #704cd9;
    border-bottom: 3px solid #704cd9;
    border-bottom-color: #704cd9;
    padding-bottom: 8px;
    padding-top: 16px;
`;

const Label = styled.div`
    margin-top: 20px;
    font-size: 30px;
    font-weight: normal;
    color: #242527;
    line-height: 1.3;
    font-weight: bold;
`;

const Container = styled.div`

`;

const ItemContainer = styled.div`
    margin-top: 20px;
    flex-basis: 630px;
`;

const ItemLabel = styled.div`
    margin-top: 10px;
    color: #242527;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
`;

const ItemInputText = styled.input`
    display: block;
    height: 50px;
    width: 60%;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

const ItemInputNumber = styled.input`
    display: block;
    height: 50px;
    width: 10%;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

const ItemCheckBox = styled.input.attrs({ type: "checkbox" })`
    display: block;
`;

const ItemSelect = styled.select`
    display: block;
    height: 50px;
    width: 20%;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

const ItemTextArea = styled.textarea`
    display: block;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

const CreateButton = styled.button`
`;

const Required = styled.span`
    color: red;
`;