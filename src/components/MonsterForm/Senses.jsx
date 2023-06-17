import { ItemContainer, ItemLabel, ItemInputNumber, ItemCheckBox } from "./style"
import { useState } from "react";

export function Senses({ passivePerception, onSensesChange }) {
    const [blindsight, setBlindsight] = useState(false);
    const [blindsightValue, setBlindsightValue] = useState(1);
    const [darkvision, setDarkvision] = useState(false);
    const [darkvisionValue, setDarkvisionValue] = useState(1);
    const [tremorsene, setTremorsene] = useState(false);
    const [tremorseneValue, setTremorseneValue] = useState(1);
    const [truesight, setTruesight] = useState(false);
    const [truesightValue, setTruesightValue] = useState(1);

    function changeSensesObject() {
        const sensesObject = {};

        sensesObject.passive_perception = passivePerception;

        if (blindsight) {
            sensesObject.blindsight = `${blindsightValue} ft.`;
        }

        if (darkvision) {
            sensesObject.darkvision = `${darkvisionValue} ft.`;
        }

        if (tremorsene) {
            sensesObject.tremorsense = `${tremorseneValue} ft.`;
        }

        if (truesight) {
            sensesObject.truesight = `${truesightValue} ft.`;
        }

        onSensesChange(sensesObject);
    };

    return (
        <ItemContainer>
            <ItemLabel>Blindsight? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-senses-blindsight" checked={blindsight}
                onChange={() => {
                    setBlindsight((prevState) => !prevState);
                    changeSensesObject();
                }} />
            {blindsight ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-senses-blindsight-value" value={blindsightValue}
                    onChange={(e) => {
                        setBlindsightValue(Number(e.target.value));
                        changeSensesObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Darkvision? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-senses-darkvision" checked={darkvision}
                onChange={() => {
                    setDarkvision((prevState) => !prevState);
                    changeSensesObject();
                }} />
            {darkvision ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-senses-darkvision-value" value={darkvisionValue}
                    onChange={(e) => {
                        setDarkvisionValue(Number(e.target.value));
                        changeSensesObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Tremorsene? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-senses-tremorsene" checked={tremorsene}
                onChange={() => {
                    setTremorsene((prevState) => !prevState);
                    changeSensesObject();
                }} />
            {tremorsene ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-senses-tremorsene-value" value={tremorseneValue} onChange={(e) => {
                    setTremorseneValue(Number(e.target.value));
                    changeSensesObject();
                }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Truesight? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-senses-truesight" checked={truesight}
                onChange={() => {
                    setTruesight((prevState) => !prevState);
                    changeSensesObject();
                }} />
            {truesight ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-senses-truesight-value" value={truesightValue}
                    onChange={(e) => {
                        setTruesightValue(Number(e.target.value));
                        changeSensesObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
        </ItemContainer>
    );
}