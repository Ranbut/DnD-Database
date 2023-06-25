import { ItemContainer, ItemLabel, ItemInputNumber, ItemCheckBox } from "./style"
import { useState } from "react";

export function Speed({ onSpeedChange }) {
    const [burrow, setBurrow] = useState(false);
    const [burrowValue, setBurrowValue] = useState(1);
    const [climb, setClimb] = useState(false);
    const [climbValue, setClimbValue] = useState(1);
    const [fly, setFly] = useState(false);
    const [flyValue, setFlyValue] = useState(1);
    const [swim, setSwim] = useState(false);
    const [swimValue, setSwimValue] = useState(1);
    const [walk, setWalk] = useState(true);
    const [walkValue, setWalkValue] = useState(10);

    function changeSpeedObject() {
        const speedObject = {};

        if (burrow) {
            speedObject.burrow = `${burrowValue} ft.`;
        }

        if (climb) {
            speedObject.climb = `${climbValue} ft.`;
        }

        if (fly) {
            speedObject.fly = `${flyValue} ft.`;
        }

        if (swim) {
            speedObject.swim = `${swimValue} ft.`;
        }

        if (walk) {
            speedObject.walk = `${walkValue} ft.`;
        }

        onSpeedChange(speedObject);
    };

    return (
        <ItemContainer>
            <ItemLabel>Burrow? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-speed-burrow" checked={burrow}
                onChange={() => {
                    setBurrow((prevState) => !prevState);
                    changeSpeedObject();
                }} />
            {burrow ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-speed-burrow-value" value={burrowValue}
                    onChange={(e) => {
                        setBurrowValue(Number(e.target.value));
                        changeSpeedObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Climb? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-speed-climb" checked={climb}
                onChange={() => {
                    setClimb((prevState) => !prevState);
                    changeSpeedObject();
                }} />
            {climb ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-speed-climb-value" value={climbValue}
                    onChange={(e) => {
                        setClimbValue(Number(e.target.value));
                        changeSpeedObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Fly? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-speed-fly" checked={fly}
                onChange={() => {
                    setFly((prevState) => !prevState);
                    changeSpeedObject();
                }} />
            {fly ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-speed-fly-value" value={flyValue} onChange={(e) => {
                    setFlyValue(Number(e.target.value));
                    changeSpeedObject();
                }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Swim? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-speed-swim" checked={swim}
                onChange={() => {
                    setSwim((prevState) => !prevState);
                    changeSpeedObject();
                }} />
            {swim ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-speed-swim-value" value={swimValue}
                    onChange={(e) => {
                        setSwimValue(Number(e.target.value));
                        changeSpeedObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
            <ItemLabel>Walk? (ft.)</ItemLabel>
            <ItemCheckBox type="checkbox" id="field-monster-speed-walk" checked={walk}
                onChange={() => {
                    setWalk((prevState) => !prevState);
                    changeSpeedObject();
                }} />
            {walk ? (
                <ItemInputNumber type="number" max="1000" min="1" id="field-monster-speed-walk-value" value={walkValue}
                    onChange={(e) => {
                        setWalkValue(Number(e.target.value));
                        changeSpeedObject();
                    }}>
                </ItemInputNumber>) : (<></>)}
        </ItemContainer>
    );
}