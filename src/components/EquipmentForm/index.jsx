import {
    MainContainer, Label, Container, Required, EquipmentHeading,
    ItemContainer, ItemTextArea, ItemLabel, ItemSelect, ItemInputNumber,
    ItemInputText, CreateButton
} from './style'
import React, { useState } from 'react';
import Properties from "./Properties";
import { Weapon } from './Weapon';
import { Armor } from './Armor';
import { createEquipment } from '../../services/equipmentApi';

export default function EquipmentForm({ token }) {
    const [name, setName] = useState('My New Equipment');
    const [weight, setWeight] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [costValueUnit, setcostValueUnit] = useState('cp');
    const [description, setDescription] = useState('');
    const [equipmentCategory, setEquipmentCategory] = useState('Item');
    const [properties, setProperties] = useState([]);
    const [weaponObject, setWeaponObject] = useState({});
    const [armorObject, setArmorObject] = useState({});
    
    const handleArmorObjectChange = (armor) => {
        setArmorObject(armor);
    };

    const handleWeaponObjectChange = (weapon) => {
        setWeaponObject(weapon);
    };

    const handlePropertiesChange = (newProperty) => {
        setProperties([...properties, newProperty]);
    };

    const handlePropertiesDelete = (newProperty) => {
        setProperties(newProperty);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let equipmentData = {
            index: name.toLowerCase(),
            name: name,
            cost: { quantity: costValue, unit: costValueUnit },
            weight: weight,
            equipment_category: { name: equipmentCategory },
            special: [],
            contents: [],
            properties: properties,
            desc: [description],
        }

        if (equipmentCategory === "Weapon") equipmentData = { ...equipmentData, ...weaponObject };
        if (equipmentCategory === "Armor") equipmentData = { ...equipmentData, ...armorObject };

        await createEquipment(equipmentData, token);
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
                    <ItemLabel>Properties</ItemLabel>
                    <Properties properties={properties} onPropertiesChange={handlePropertiesChange} onPropertiesDelete={handlePropertiesDelete} />
                </ItemContainer>
            </Container>
            {equipmentCategory === "Weapon" ? 
            (<Weapon onWeaponChange={handleWeaponObjectChange}></Weapon>)
            : equipmentCategory === "Armor" ?  
            (<Armor onArmorChange={handleArmorObjectChange}></Armor>) : (<></>)}
            <Container>
            </Container>
            <CreateButton onClick={handleSubmit}>Save Equipment</CreateButton>
        </MainContainer>
    );
};