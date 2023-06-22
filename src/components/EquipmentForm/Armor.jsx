import { ItemContainer, ItemLabel, ItemCheckBox, ItemInputNumber, Required } from './style'
import React, { useEffect, useState } from 'react';

export function Armor({ armor, id, onArmorChange }) {
    const [dexBonus, setDexBonus] = useState(false);
    const [armorClassValue, setArmorClassValue] = useState(1);
    const [strengthMinimum, setStrengthMinimum] = useState(0);
    const [stealthDisadvantage, setStealthDisadvantage] = useState(false);

    function changeArmorObject() {
        const armorObject = {
            str_minimum: strengthMinimum,
            stealth_disadvantage: stealthDisadvantage,
            armor_class: {
                base: armorClassValue,
                dex_bonus: dexBonus
            }
        }
        onArmorChange(armorObject);
    };

    useEffect(() => {
        if(id){
            setDexBonus(armor.armor_class.dex_bonus);
            setArmorClassValue(armor.armor_class.base);
            setStrengthMinimum(armor.str_minimum);
            setStealthDisadvantage(armor.stealth_disadvantage);
        }
        changeArmorObject();
    }, []);

    return (
        <>
            <ItemContainer>
                <ItemLabel>Armor Class Value <Required>*</Required></ItemLabel>
                <ItemInputNumber type="number" max="30" min="1" id="field-armor-class-value" value={armorClassValue}
                    onChange={(e) => {
                        setArmorClassValue(e.target.value);
                        changeArmorObject();
                    }} />
                <ItemLabel>Minimum Strength Value</ItemLabel>
                <ItemInputNumber type="number" max="30" min="0" id="field-minimum-strength-value" value={strengthMinimum}
                    onChange={(e) => {
                        setStrengthMinimum(e.target.value);
                        changeArmorObject();
                    }} />
                <ItemLabel>Dexterity Bonus? <Required>*</Required></ItemLabel>
                <ItemCheckBox type="checkbox" id="field-armor-dexterity-bonus" checked={dexBonus}
                    onChange={() => {
                        setDexBonus((prevState) => !prevState);
                        changeArmorObject();
                    }} />
                <ItemLabel>Stealth Disadvantage? <Required>*</Required></ItemLabel>
                <ItemCheckBox type="checkbox" id="field-armor-stealth-disadvantage" checked={stealthDisadvantage}
                    onChange={() => {
                        setStealthDisadvantage((prevState) => !prevState);
                        changeArmorObject();
                    }} />
            </ItemContainer>
        </>
    );
}