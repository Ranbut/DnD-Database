import styled from "styled-components"
import React, { useState } from 'react';
import Properties from "./Properties";

export default function EquipmentForm({ token }) {
    const [name, setName] = useState('My New Equipment');
    const [weight, setWeight] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [costValueUnit, setcostValueUnit] = useState('cp');
    const [description, setDescription] = useState('');
    const [equipmentCategory, setEquipmentCategory] = useState('Item');
    const [properties, setProperties] = useState([]);
    const [weaponCategory, setWeaponCategory] = useState('Simple');
    const [weaponRange, setWeaponRange] = useState('Melee');
    const [weaponThrowable, setWeaponThrowable] = useState(false);
    const [weaponRangeNormalValue, setWeaponRangeNormalValue] = useState(10);
    const [weaponRangeLongValue, setWeaponRangeLongValue] = useState(25);
    const [damageCountDice, setDamageCountDice] = useState(1);
    const [damageDice, setDamageDice] = useState('d4');
    const [damageType, setDamageType] = useState('Bludgeoning');

    const handlePropertiesChange = (newProperty) => {
        setProperties([...properties, newProperty]);
    };

    const handlePropertiesDelete = (newProperty) => {
        setProperties(newProperty);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(weaponThrowable) properties.push("Thrown");

        const equipmentData = {
            index: name.toLowerCase(),
            name: name,
            cost: { quantity: costValue, unit: costValueUnit },
            weight: weight,
            weapon_category: weaponCategory,
            weapon_range: weaponRange,
            equipment_category: { name: equipmentCategory },
            special: [],
            contents: [],
            properties: properties,
            desc: [description],
            damage: {
                damage_dice: damageCountDice.toString() + damageDice,
                damage_type: {
                    name: damageType
                }
            }
        }
        console.log(equipmentData);
        try {
            alert('Equipment created successfully!');
        } catch (error) {
            alert('Unable to create equipment!');
        }
    };

    return (
        <MainContainer>
            <EquipmentHeading>{name}</EquipmentHeading>
            <Label>Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Equipment Name <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-equipment-name" value={name} onChange={(e) => setName(e.target.value)} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Equipment Cost <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="1000000" min="0" id="field-equipment-cost-value" value={costValue} onChange={(e) => setCostValue(Number(e.target.value))} />
                    <ItemSelect id="field-equipment-cost-unit" name="equipment-cost-unit" value={costValueUnit} onChange={(e) => setcostValueUnit(e.target.value)}>
                        <option value="cp" id="field-equipment-cost-unit-type-0">cp</option>
                        <option value="sp" id="field-equipment-cost-unit-type-2">sp</option>
                        <option value="ep" id="field-equipment-cost-unit-type-3">ep</option>
                        <option value="gp" id="field-equipment-cost-unit-type-4">gp</option>
                        <option value="pp" id="field-equipment-cost-unit-type-5">pp</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Equipment Weight <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="1000000" min="0" id="field-equipment-cost-value" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Equipment Category <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-equipment-category" name="equipment-category" value={equipmentCategory} onChange={(e) => setEquipmentCategory(e.target.value)}>
                        <option value="Item" id="field-equipment-category-type-0">Item</option>
                        <option value="Armor" id="field-equipment-category-type-1">Armor</option>
                        <option value="Weapon" id="field-equipment-category-type-0">Weapon</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Equipment Description</ItemLabel>
                    <ItemTextArea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></ItemTextArea>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Weapon Category <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-weapon-category" name="weapon-category" value={weaponCategory} onChange={(e) => setWeaponCategory(e.target.value)}>
                        <option value="Simple" id="field-weapon-category-type-0">Simple</option>
                        <option value="Martial" id="field-weapon-category-type-1">Martial</option>
                    </ItemSelect>
                    <ItemLabel>Weapon Range <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-weapon-range" name="weapon-range" value={weaponRange} onChange={(e) => setWeaponRange(e.target.value)}>
                        <option value="Melee" id="field-weapon-range-type-0">Melee</option>
                        <option value="Ranged" id="field-weapon-range-type-1">Ranged</option>
                    </ItemSelect>
                    <ItemLabel>Throwable Weapon? <Required>*</Required></ItemLabel>
                    <ItemCheckBox type="checkbox" id="field-monster-speed-climb" checked={weaponThrowable}
                onChange={() => {
                    setWeaponThrowable((prevState) => !prevState);
                }} />
                    {weaponRange === "Ranged" || weaponThrowable ? (
                        <>
                            <ItemLabel>Normal Range <Required>*</Required></ItemLabel>
                            <ItemInputNumber type="number" max="1000000" min="0" id="field-weapon-range-normal-value" value={weaponRangeNormalValue} onChange={(e) => setWeaponRangeNormalValue(Number(e.target.value))} />
                            <ItemLabel>Long Range <Required>*</Required></ItemLabel>
                            <ItemInputNumber type="number" max="1000000" min="0" id="field-weapon-range-long-value" value={weaponRangeLongValue} onChange={(e) => setWeaponRangeLongValue(Number(e.target.value))} />
                        </>
                    ) : (<></>)}
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Weapon Damage <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="1000000" min="0" id="field-equipment-cost-value" value={damageCountDice} onChange={(e) => setDamageCountDice(Number(e.target.value))} />
                    <ItemSelect id="field-weapon-damage-dice" name="weapon-damage-dice" value={damageDice} onChange={(e) => setDamageDice(e.target.value)}>
                        <option value="d4" id="field-weapon-damage-dice-type-0">d4</option>
                        <option value="d6" id="field-weapon-damage-dice-type-1">d6</option>
                        <option value="d8" id="field-weapon-damage-dice-type-2">d8</option>
                        <option value="d10" id="field-weapon-damage-dice-type-3">d10</option>
                        <option value="d12" id="field-weapon-damage-dice-type-4">d12</option>
                        <option value="d20" id="field-weapon-damage-dice-type-4">d20</option>
                    </ItemSelect>
                    <ItemLabel>Weapon Damage Type <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-weapon-damage-type" name="weapon-damage-type" value={damageType} onChange={(e) => setDamageType(e.target.value)}>
                        <option disabled={weaponRange === "Ranged"} value="Bludgeoning" id="field-weapon-damage-type-1">Bludgeoning</option>
                        <option value="Piercing" id="field-weapon-damage-type-2">Piercing</option>
                        <option disabled={weaponRange === "Ranged"} value="Slashing" id="field-weapon-damage-type-3">Slashing</option>
                    </ItemSelect>
                    <ItemLabel>Properties</ItemLabel>
                    <Properties properties={properties} onPropertiesChange={handlePropertiesChange} onPropertiesDelete={handlePropertiesDelete} />
                </ItemContainer>
            </Container>
            <CreateButton onClick={handleSubmit}>Save Equipment</CreateButton>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding: 3% 3%;
    font-family: Roboto, Helvetica,sans-serif;
`;

const EquipmentHeading = styled.div`
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
    resize: none;
`;

const CreateButton = styled.button`
`;

const Required = styled.span`
    color: red;
`;