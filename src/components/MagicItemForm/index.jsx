import {
    MainContainer, Label, Container, Required, MagicItemHeading,
    ItemContainer, ItemTextArea, ItemLabel, ItemSelect,
    ItemInputText, CreateButton
} from './style'
import React, { useState } from 'react';
import { createMagicItem } from '../../services/magicItemApi';

export default function MagicItemForm({ token }) {
    const [name, setName] = useState('My New Magic Item');
    const [description, setDescription] = useState('');
    const [equipmentCategory, setEquipmentCategory] = useState('Item');
    const [rarity, setRarity] = useState('Item');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const magicItemData = {
            index: name.toLowerCase(),
            name: name,
            equipment_category: { name: equipmentCategory },
            desc: [description],
            rarity: { name: rarity },
            variants: [],
            variant: false
        }

        await createMagicItem(magicItemData, token);
        try {
            alert('Magic Item created successfully!');
        } catch (error) {
            alert('Unable to create Magic Item!');
        }
    };

    return (
        <MainContainer>
            <MagicItemHeading>{name}</MagicItemHeading>
            <Label>Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Magic Item Name <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-magic-item-name" value={name} onChange={(e) => setName(e.target.value)} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Magic Item Category <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-magic-item-category" name="magic-item-category" value={equipmentCategory} onChange={(e) => setEquipmentCategory(e.target.value)}>
                        <option value="Item" id="field-magic-item-category-type-0">Item</option>
                        <option value="Armor" id="field-magic-item-category-type-1">Armor</option>
                        <option value="Weapon" id="field-magic-item-category-type-0">Weapon</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Magic Item Rarity <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-magic-item-rarity" name="magic-item-category" value={rarity} onChange={(e) => setRarity(e.target.value)}>
                        <option value="Artifact" id="field-magic-item-rarity-type-0">Artifact</option>
                        <option value="Common" id="field-magic-item-rarity-type-1">Common</option>
                        <option value="Legendary" id="field-magic-item-rarity-type-0">Legendary</option>
                        <option value="Rare" id="field-magic-item-rarity-type-0">Rare</option>
                        <option value="Uncommon" id="field-magic-item-rarity-type-0">Uncommon</option>
                        <option value="Unknown Rarity" id="field-magic-item-rarity-type-0">Unknown Rarity</option>
                        <option value="Varies" id="field-magic-item-rarity-type-0">Varies</option>
                        <option value="Very Rare" id="field-magic-item-rarity-type-0">Very Rare</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Magic Item Description <Required>*</Required></ItemLabel>
                    <ItemTextArea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></ItemTextArea>
                </ItemContainer>
            </Container>
            <CreateButton onClick={handleSubmit}>Save Magic Item</CreateButton>
        </MainContainer>
    );
};