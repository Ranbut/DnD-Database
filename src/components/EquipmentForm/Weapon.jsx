import { ItemContainer, ItemLabel, ItemSelect, ItemCheckBox, ItemInputNumber, Required } from './style'
import React, { useEffect, useState } from 'react';

export function Weapon({ weapon, id, onWeaponChange }) {
    const [weaponCategory, setWeaponCategory] = useState('Simple');
    const [weaponRange, setWeaponRange] = useState('Melee');
    const [weaponThrowable, setWeaponThrowable] = useState(false);
    const [weaponRangeNormalValue, setWeaponRangeNormalValue] = useState(10);
    const [weaponRangeLongValue, setWeaponRangeLongValue] = useState(25);
    const [damageCountDice, setDamageCountDice] = useState(1);
    const [damageDice, setDamageDice] = useState('d4');
    const [damageType, setDamageType] = useState('Bludgeoning');

    console.log(weapon);

    function changeWeaponObject() {
        const weaponObject = {
            damage: {
                damage_dice: damageCountDice.toString() + damageDice,
                damage_type: {
                    name: damageType
                }
            },
            weapon_category: weaponCategory,
            weapon_range: weaponRange
        }

        if (weaponRange === "Ranged") {
            weaponObject.range = {
                normal: weaponRangeNormalValue,
                long: weaponRangeLongValue
            };
        }
        onWeaponChange(weaponObject);
    };

    useEffect(() => {
        if (id) {
            setWeaponCategory(weapon.weapon_category);
            setWeaponRange(weapon.weapon_range);
            if (weapon.weapon_range === "Ranged") {
                setWeaponRangeNormalValue(weapon.range.normal);
                setWeaponRangeLongValue(weapon.range.long);
            }
            setDamageCountDice(weapon.damage.damage_dice.match(/^\d+/)[0]);
            setDamageDice(weapon.damage.damage_dice.match(/d\d+/)[0]);
            setDamageType(weapon.damage.damage_type.name);
        }
        changeWeaponObject();
    }, []);

    return (
        <>
            <ItemContainer>
                <ItemLabel>Weapon Category <Required>*</Required></ItemLabel>
                <ItemSelect id="field-weapon-category" name="weapon-category" value={weaponCategory}
                    onChange={(e) => {
                        setWeaponCategory(e.target.value);
                        changeWeaponObject();
                    }}>
                    <option value="Simple" id="field-weapon-category-type-0">Simple</option>
                    <option value="Martial" id="field-weapon-category-type-1">Martial</option>
                </ItemSelect>
                <ItemLabel>Weapon Range <Required>*</Required></ItemLabel>
                <ItemSelect id="field-weapon-range" name="weapon-range" value={weaponRange}
                    onChange={(e) => {
                        setWeaponRange(e.target.value);
                        changeWeaponObject();
                    }}>
                    <option value="Melee" id="field-weapon-range-type-0">Melee</option>
                    <option value="Ranged" id="field-weapon-range-type-1">Ranged</option>
                </ItemSelect>
                <ItemLabel>Throwable Weapon? <Required>*</Required></ItemLabel>
                <ItemCheckBox type="checkbox" id="field-monster-speed-climb" checked={weaponThrowable}
                    onChange={() => {
                        setWeaponThrowable((prevState) => !prevState);
                        changeWeaponObject();
                    }} />
                {weaponRange === "Ranged" || weaponThrowable ? (
                    <>
                        <ItemLabel>Normal Range <Required>*</Required></ItemLabel>
                        <ItemInputNumber type="number" max="1000000" min="0" id="field-weapon-range-normal-value" value={weaponRangeNormalValue}
                            onChange={(e) => {
                                setWeaponRangeNormalValue(Number(e.target.value));
                                changeWeaponObject();
                            }} />
                        <ItemLabel>Long Range <Required>*</Required></ItemLabel>
                        <ItemInputNumber type="number" max="1000000" min="0" id="field-weapon-range-long-value" value={weaponRangeLongValue}
                            onChange={(e) => {
                                setWeaponRangeLongValue(Number(e.target.value));
                                changeWeaponObject();
                            }} />
                    </>
                ) : (<></>)}
            </ItemContainer>
            <ItemContainer>
                <ItemLabel>Weapon Damage <Required>*</Required></ItemLabel>
                <ItemInputNumber type="number" max="1000000" min="0" id="field-equipment-cost-value" value={damageCountDice}
                    onChange={(e) => {
                        setDamageCountDice(Number(e.target.value));
                        changeWeaponObject();
                    }} />
                <ItemSelect id="field-weapon-damage-dice" name="weapon-damage-dice" value={damageDice}
                    onChange={(e) => {
                        setDamageDice(e.target.value);
                        changeWeaponObject();
                    }}>
                    <option value="d4" id="field-weapon-damage-dice-type-0">d4</option>
                    <option value="d6" id="field-weapon-damage-dice-type-1">d6</option>
                    <option value="d8" id="field-weapon-damage-dice-type-2">d8</option>
                    <option value="d10" id="field-weapon-damage-dice-type-3">d10</option>
                    <option value="d12" id="field-weapon-damage-dice-type-4">d12</option>
                    <option value="d20" id="field-weapon-damage-dice-type-4">d20</option>
                </ItemSelect>
                <ItemLabel>Weapon Damage Type <Required>*</Required></ItemLabel>
                <ItemSelect id="field-weapon-damage-type" name="weapon-damage-type" value={damageType}
                    onChange={(e) => {
                        setDamageType(e.target.value);
                        changeWeaponObject();
                    }}>
                    <option disabled={weaponRange === "Ranged"} value="Bludgeoning" id="field-weapon-damage-type-1">Bludgeoning</option>
                    <option value="Piercing" id="field-weapon-damage-type-2">Piercing</option>
                    <option disabled={weaponRange === "Ranged"} value="Slashing" id="field-weapon-damage-type-3">Slashing</option>
                </ItemSelect>
            </ItemContainer>
        </>
    );
}