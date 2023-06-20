import {
    MainContainer, MonsterImage, MonsterHeading, Label, Container, ItemContainer,
    ItemLabel, ItemInputText, ItemInputNumber, ItemSelect,
    CreateButton, Required
} from "./style"
import { createMonster } from "../../services/monstersApi";
import { useState } from "react";
import Actions from "./Actions";
import DamageReponse from "./DamageReponse";
import SpecialAbilities from "./SpecialAbilities";
import { Senses } from "./Senses";
import { Speed } from "./Speed";

export default function MonsterForm({ token }) {
    const [name, setName] = useState('My New Monster');
    const [image, setImage] = useState('');
    const [alignment, setAlignment] = useState('Chaotic Evil');
    const [type, setType] = useState('Aberration');
    const [size, setSize] = useState('Gargantuan');
    const [challengeRating, setChallengeRating] = useState(0);
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [wisdom, setWisdom] = useState(10);
    const [charisma, setCharisma] = useState(10);
    const [avarageHitPoints, setAvarageHitPoints] = useState(10);
    const [hitPointsDiceCount, setHitPointsDiceCount] = useState(1);
    const [hitPoinstDiceValue, setHitPoinstDiceValue] = useState('d4');
    const [hitPointsModifier, setHitPointsModifier] = useState(10);
    const [armorClass, setArmorClass] = useState(10);
    const [armorClassType, setArmorClassType] = useState('(natural armor)');
    const [passivePerception, setPassivePerception] = useState(10);
    const [actions, setActions] = useState([]);
    const [legendaryActions, setLegendaryActions] = useState([]);
    const [damageVulnerabilities, setDamageVulnerabilities] = useState([]);
    const [damageResistances, setDamageResistances] = useState([]);
    const [damageImmunities, setDamageImmunities] = useState([]);
    const [conditionImmunities, setConditionImmunities] = useState([]);
    const [specialAbilities, setSpecialAbilities] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [senses, setSenses] = useState(null);
    const [speed, setSpeed] = useState({ walk: "10 ft." });
    const [proficiencies, setProficiencies] = useState([]);

    const handleProficienciesChange = (newProficiencies) => {
        setProficiencies(newProficiencies);
    };

    const handleSensesChange = (newSenses) => {
        setSpeed(newSenses);
    };

    const handleSpeedChange = (newSpeed) => {
        setSenses(newSpeed);
    };

    const handleLanguagesChange = (newLanguage) => {
        setLanguages([...languages, newLanguage]);
    };

    const handleLanguagesDelete = (newLanguage) => {
        setLanguages(newLanguage);
    };

    const handleSpecialAbilitiesChange = (newSpecialAbilities) => {
        setSpecialAbilities([...specialAbilities, newSpecialAbilities]);
    };

    const handleSpecialAbilitiesDelete = (newSpecialAbilities) => {
        setSpecialAbilities(newSpecialAbilities);
    };

    const handleActionsChange = (newAction) => {
        setActions([...actions, newAction]);
    };

    const handleActionsDelete = (newAction) => {
        setActions(newAction);
    };

    const handleLegendaryActionsChange = (newAction) => {
        setLegendaryActions([...legendaryActions, newAction]);
    };

    const handleLegendaryActionsDelete = (newAction) => {
        setLegendaryActions(newAction);
    };

    const handleDamageVulnerabilitiesChange = (newDamage) => {
        setDamageVulnerabilities([...damageVulnerabilities, newDamage]);
    };

    const handleDamageVulnerabilitiesDelete = (newDamage) => {
        setDamageVulnerabilities(newDamage);
    };

    const handleDamageResistancesChange = (newDamage) => {
        setDamageResistances([...damageResistances, newDamage]);
    };

    const handleDamageResistancesDelete = (newDamage) => {
        setDamageResistances(newDamage);
    };

    const handleDamageImmunitiesChange = (newDamage) => {
        setDamageImmunities([...damageImmunities, newDamage]);
    };

    const handleDamageImmunitiesDelete = (newDamage) => {
        setDamageImmunities(newDamage);
    };

    const handleConditionImmunitiesChange = (newDamage) => {
        setConditionImmunities([...conditionImmunities, newDamage]);
    };

    const handleConditionImmunitiesDelete = (newDamage) => {
        setConditionImmunities(newDamage);
    };

    const getXP = () => {
        switch (challengeRating) {
            case 0:
                return 10;
                break;
            case 0.125:
                return 25;
                break;
            case 0.25:
                return 50;
                break;
            case 0.5:
                return 100;
                break;
            case 1:
                return 200;
                break;
            case 2:
                return 450;
                break;
            case 3:
                return 700;
                break;
            case 4:
                return 1100;
                break;
            case 5:
                return 1800;
                break;
            case 6:
                return 2300;
                break;
            case 7:
                return 2900;
                break;
            case 8:
                return 3900;
                break;
            case 9:
                return 5000;
                break;
            case 10:
                return 5900;
                break;
            case 11:
                return 7200;
                break;
            case 12:
                return 8400;
                break;
            case 13:
                return 10000;
                break;
            case 14:
                return 11500;
                break;
            case 15:
                return 13000;
                break;
            case 16:
                return 15000;
                break;
            case 17:
                return 18000;
                break;
            case 18:
                return 20000;
                break;
            case 19:
                return 22000;
                break;
            case 20:
                return 22000;
                break;
            case 21:
                return 33000;
                break;
            case 22:
                return 41000;
                break;
            case 23:
                return 50000;
                break;
            case 24:
                return 62000;
                break;
            case 25:
                return 75000;
                break;
            case 26:
                return 90000;
                break;
            case 27:
                return 105000;
                break;
            case 28:
                return 120000;
                break;
            case 29:
                return 135000;
                break;
            case 30:
                return 155000;
                break;
            default:
                return 10;
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const monsterData = {
            index: name.toLowerCase(),
            name: name,
            alignment: alignment,
            challenge_rating: challengeRating,
            armor_class: [{ type: armorClassType, value: armorClass }],
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            hit_dice: hitPointsDiceCount.toString() + hitPoinstDiceValue,
            hit_points: avarageHitPoints,
            hit_points_roll: hitPointsDiceCount.toString() + hitPoinstDiceValue + "+" + hitPointsModifier.toString(),
            actions: actions,
            legendary_actions: legendaryActions,
            damage_vulnerabilities: damageVulnerabilities,
            proficiencies: proficiencies,
            damage_resistances: damageResistances,
            damage_immunities: damageImmunities,
            condition_immunities: conditionImmunities,
            special_abilities: specialAbilities,
            languages: languages.join(", "),
            type: type,
            size: size,
            senses: senses || { passive_perception: passivePerception },
            speed: speed,
            xp: getXP(),
        }
        await createMonster(monsterData, token);
        try {
            alert('Monster created successfully!');
        } catch (error) {
            alert('Unable to create monster!');
        }
    };

    return (
        <MainContainer>
            <MonsterHeading>{image ? (<MonsterImage src={image}></MonsterImage>) : (<></>)}{name}</MonsterHeading>
            <Label>Basic Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Monster Name <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-monster-name" value={name} onChange={(e) => setName(e.target.value)} />
                    <ItemLabel>Monster Image</ItemLabel>
                    <ItemInputText type="text" id="field-monster-name" value={image} onChange={(e) => setImage(e.target.value)} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Monster Type <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-monster-type" name="monster-type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="aberration" id="field-monster-type-0">Aberration</option>
                        <option value="beast" id="field-monster-type-1">Beast</option>
                        <option value="celestial" id="field-monster-type-2">Celestial</option>
                        <option value="construct" id="field-monster-type-3">Construct</option>
                        <option value="dragon" id="field-monster-type-4">Dragon</option>
                        <option value="elemental" id="field-monster-type-5">Elemental</option>
                        <option value="fey" id="field-monster-type-6">Fey</option>
                        <option value="fiend" id="field-monster-type-7">Fiend</option>
                        <option value="giant" id="field-monster-type-8">Giant</option>
                        <option value="humanoid" id="field-monster-type-9">Humanoid</option>
                        <option value="monstrosity" id="field-monster-type-10">Monstrosity</option>
                        <option value="ooze" id="field-monster-type-11">Ooze</option>
                        <option value="plant" id="field-monster-type-12">Plant</option>
                        <option value="undead" id="field-monster-type-13">Undead</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Size <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-monster-size" name="monster-size" value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="Gargantuan" id="field-monster-size-0">Gargantuan</option>
                        <option value="Huge" id="field-monster-size-1">Huge</option>
                        <option value="Large" id="field-monster-size-2">Large</option>
                        <option value="Medium" id="field-monster-size-3">Medium</option>
                        <option value="Small" id="field-monster-size-4">Small</option>
                        <option value="Tiny" id="field-monster-size-5">Tiny</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Challenge Rating <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-monster-challenge-rating" name="monster-challenge-rating" value={challengeRating} onChange={(e) => setChallengeRating(Number(e.target.value))}>
                        <option value="0" id="field-monster-challenge-rating-type-0">0</option>
                        <option value="0.125" id="field-monster-challenge-rating-type-1">1/8</option>
                        <option value="0.25" id="field-monster-challenge-rating-type-2">1/4</option>
                        <option value="0.5" id="field-monster-challenge-rating-type-3">1/2</option>
                        <option value="1" id="field-monster-challenge-rating-type-4">1</option>
                        <option value="2" id="field-monster-challenge-rating-type-5">2</option>
                        <option value="3" id="field-monster-challenge-rating-type-6">3</option>
                        <option value="4" id="field-monster-challenge-rating-type-7">4</option>
                        <option value="5" id="field-monster-challenge-rating-type-8">5</option>
                        <option value="6" id="field-monster-challenge-rating-type-9">6</option>
                        <option value="7" id="field-monster-challenge-rating-type-10">7</option>
                        <option value="8" id="field-monster-challenge-rating-type-11">8</option>
                        <option value="9" id="field-monster-challenge-rating-type-12">9</option>
                        <option value="10" id="field-monster-challenge-rating-type-13">10</option>
                        <option value="11" id="field-monster-challenge-rating-type-14">11</option>
                        <option value="12" id="field-monster-challenge-rating-type-15">12</option>
                        <option value="13" id="field-monster-challenge-rating-type-16">13</option>
                        <option value="14" id="field-monster-challenge-rating-type-17">14</option>
                        <option value="15" id="field-monster-challenge-rating-type-18">15</option>
                        <option value="16" id="field-monster-challenge-rating-type-19">16</option>
                        <option value="17" id="field-monster-challenge-rating-type-20">17</option>
                        <option value="18" id="field-monster-challenge-rating-type-21">18</option>
                        <option value="19" id="field-monster-challenge-rating-type-22">19</option>
                        <option value="20" id="field-monster-challenge-rating-type-23">20</option>
                        <option value="21" id="field-monster-challenge-rating-type-24">21</option>
                        <option value="22" id="field-monster-challenge-rating-type-25">22</option>
                        <option value="23" id="field-monster-challenge-rating-type-26">23</option>
                        <option value="24" id="field-monster-challenge-rating-type-27">24</option>
                        <option value="25" id="field-monster-challenge-rating-type-28">25</option>
                        <option value="26" id="field-monster-challenge-rating-type-29">26</option>
                        <option value="27" id="field-monster-challenge-rating-type-30">27</option>
                        <option value="28" id="field-monster-challenge-rating-type-31">28</option>
                        <option value="29" id="field-monster-challenge-rating-type-32">29</option>
                        <option value="30" id="field-monster-challenge-rating-type-33">30</option>
                    </ItemSelect>
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Alignment <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-monster-alignment" name="monster-alignment" value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                        <option value="chaotic evil" id="field-monster-alignment-type-0">Chaotic Evil</option>
                        <option value="chaotic good" id="field-monster-alignment-type-1">Chaotic Good</option>
                        <option value="chaotic neutral" id="field-monster-alignment-type-2">Chaotic Neutral</option>
                        <option value="lawful evil" id="field-monster-alignment-type-3">Lawful Evil</option>
                        <option value="lawful good" id="field-monster-alignment-type-4">Lawful Good</option>
                        <option value="lawful neutral" id="field-monster-alignment-type-5">Lawful Neutral</option>
                        <option value="neutral" id="field-monster-alignment-type-6">Neutral</option>
                        <option value="neutral evil" id="field-monster-alignment-type-7">Neutral Evil</option>
                        <option value="neutral good" id="field-monster-alignment-type-8">Neutral Good</option>
                    </ItemSelect>
                </ItemContainer>
            </Container>
            <Label>Ability Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Strength <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-strength" value={strength} onChange={(e) => setStrength(Number(e.target.value))} />
                    <ItemLabel>Dexterity <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-dexterity" value={dexterity} onChange={(e) => setDexterity(Number(e.target.value))} />
                    <ItemLabel>Constitution <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-constitution" value={constitution} onChange={(e) => setConstitution(Number(e.target.value))} />
                    <ItemLabel>Intelligence <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-dexterity" value={intelligence} onChange={(e) => setIntelligence(Number(e.target.value))} />
                    <ItemLabel>Wisdom <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-wisdom" value={wisdom} onChange={(e) => setWisdom(Number(e.target.value))} />
                    <ItemLabel>Charisma <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-ability-charisma" value={charisma} onChange={(e) => setCharisma(Number(e.target.value))} />
                    <ItemLabel>SpecialAbilities</ItemLabel>
                    <SpecialAbilities specialAbilities={specialAbilities} onSpecialAbilitiesChange={handleSpecialAbilitiesChange} onSpecialAbilitiesDelete={handleSpecialAbilitiesDelete} />
                </ItemContainer>
            </Container>
            <Label>Combat Information</Label>
            <Container>
                <ItemContainer>
                    <ItemLabel>Armor Class <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-armor-class" value={armorClass} onChange={(e) => setArmorClass(Number(e.target.value))} />
                    <ItemLabel>Armor Class Type <Required>*</Required></ItemLabel>
                    <ItemInputText type="text" id="field-monster-armor-class-type" value={armorClassType} onChange={(e) => setArmorClassType(e.target.value)} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Passive Perception <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="30" min="1" id="field-monster-passive-perception" value={passivePerception} onChange={(e) => setPassivePerception(Number(e.target.value))} />
                </ItemContainer>
                <ItemContainer>
                    <ItemLabel>Hit Points Die Count <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="1000" min="1" id="field-monster-hit-points-die-count" value={hitPointsDiceCount} onChange={(e) => setHitPointsDiceCount(Number(e.target.value))} />
                    <ItemLabel>Hit Points Die Value <Required>*</Required></ItemLabel>
                    <ItemSelect id="field-monster-hit-points-die-value" name="monster-hit-points-die-value" value={hitPoinstDiceValue} onChange={(e) => setHitPoinstDiceValue(e.target.value)}>
                        <option value="d4" id="field-hit-points-die-value-type-0">d4</option>
                        <option value="d6" id="field-hit-points-die-value-type-1">d6</option>
                        <option value="d8" id="field-hit-points-die-value-type-2">d8</option>
                        <option value="d10" id="field-hit-points-die-value-type-3">d10</option>
                        <option value="d12" id="field-hit-points-die-value-type-4">d12</option>
                        <option value="d20" id="field-hit-points-die-value-type-5">d20</option>
                    </ItemSelect>
                    <ItemLabel>Hit Points Modifier</ItemLabel>
                    <ItemInputNumber type="number" max="1000" min="1" id="field-monster-hit-points-modifier" value={hitPointsModifier} onChange={(e) => setHitPointsModifier(Number(e.target.value))} />
                    <ItemLabel>Average Hit Points <Required>*</Required></ItemLabel>
                    <ItemInputNumber type="number" max="1000" min="1" id="field-monster-hit-points" value={avarageHitPoints} onChange={(e) => setAvarageHitPoints(Number(e.target.value))} />
                </ItemContainer>
            </Container>
            <Label>Actions Information</Label>
            <Container>
                <ItemLabel>Actions</ItemLabel>
                <Actions actions={actions} onActionsChange={handleActionsChange} onActionsDelete={handleActionsDelete} />
                <ItemLabel>Legendary Actions</ItemLabel>
                <Actions actions={legendaryActions} onActionsChange={handleLegendaryActionsChange} onActionsDelete={handleLegendaryActionsDelete} />
            </Container>
            <Label>Damages Reponse Information</Label>
            <Container>
                <ItemLabel>Damage Vulnerabilities</ItemLabel>
                <DamageReponse damages={damageVulnerabilities} onDamagesChange={handleDamageVulnerabilitiesChange} onDamagesDelete={handleDamageVulnerabilitiesDelete} />
                <ItemLabel>Damage Resistances</ItemLabel>
                <DamageReponse damages={damageResistances} onDamagesChange={handleDamageResistancesChange} onDamagesDelete={handleDamageResistancesDelete} />
                <ItemLabel>Damage Immunities</ItemLabel>
                <DamageReponse damages={damageImmunities} onDamagesChange={handleDamageImmunitiesChange} onDamagesDelete={handleDamageImmunitiesDelete} />
                <ItemLabel>Condition Immunities</ItemLabel>
                <DamageReponse damages={conditionImmunities} onDamagesChange={handleConditionImmunitiesChange} onDamagesDelete={handleConditionImmunitiesDelete} />
            </Container>
            <Label>Languages Information</Label>
            <Container>
                <ItemLabel>Languages</ItemLabel>
                <DamageReponse damages={languages} onDamagesChange={handleLanguagesChange} onDamagesDelete={handleLanguagesDelete} />
            </Container>
            <Label>Senses Information</Label>
            <Container>
                <Senses passivePerception={passivePerception} onSensesChange={handleSensesChange} />
            </Container>
            <Label>Speed Information</Label>
            <Container>
                <Speed onSpeedChange={handleSensesChange} />
            </Container>
            <CreateButton onClick={handleSubmit}>Save Monster</CreateButton>
        </MainContainer>
    );
};