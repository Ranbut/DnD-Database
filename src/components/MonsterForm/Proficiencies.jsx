import { ItemContainer, ItemLabel, ItemInputNumber, ItemCheckBox } from "./style";
import { useState } from "react";

export function Proficiencies() {
  // Save throws
  const [strength, setStrength] = useState(false);
  const [strengthValue, setStrengthValue] = useState(1);
  const [dexterity, setDexterity] = useState(false);
  const [dexterityValue, setDexterityValue] = useState(1);
  const [constitution, setConstitution] = useState(false);
  const [constitutionValue, setConstitutionValue] = useState(1);
  const [intelligence, setIntelligence] = useState(false);
  const [intelligenceValue, setIntelligenceValue] = useState(1);
  const [wisdom, setWisdom] = useState(false);
  const [wisdomValue, setWisdomValue] = useState(1);
  const [charisma, setCharisma] = useState(false);
  const [charismaValue, setCharismaValue] = useState(1);
  
  // Skills
  const [acrobatics, setAcrobatics] = useState(false);
  const [acrobaticsValue, setAcrobaticsValue] = useState(1);
  const [animalHandling, setAnimalHandling] = useState(false);
  const [animalHandlingValue, setAnimalHandlingValue] = useState(1);
  const [arcana, setArcana] = useState(false);
  const [arcanaValue, setArcanaValue] = useState(1);
  const [athletics, setAthletics] = useState(false);
  const [athleticsValue, setAthleticsValue] = useState(1);
  const [deception, setDeception] = useState(false);
  const [deceptionValue, setDeceptionValue] = useState(1);
  const [history, setHistory] = useState(false);
  const [historyValue, setHistoryValue] = useState(1);
  const [insight, setInsight] = useState(false);
  const [insightValue, setInsightValue] = useState(1);
  const [intimidation, setIntimidation] = useState(false);
  const [intimidationValue, setIntimidationValue] = useState(1);
  const [investigation, setInvestigation] = useState(false);
  const [investigationValue, setInvestigationValue] = useState(1);
  const [medicine, setMedicine] = useState(false);
  const [medicineValue, setMedicineValue] = useState(1);
  const [nature, setNature] = useState(false);
  const [natureValue, setNatureValue] = useState(1);
  const [perception, setPerception] = useState(false);
  const [perceptionValue, setPerceptionValue] = useState(1);
  const [performance, setPerformance] = useState(false);
  const [performanceValue, setPerformanceValue] = useState(1);
  const [persuasion, setPersuasion] = useState(false);
  const [persuasionValue, setPersuasionValue] = useState(1);
  const [religion, setReligion] = useState(false);
  const [religionValue, setReligionValue] = useState(1);
  const [sleightOfHand, setSleightOfHand] = useState(false);
  const [sleightOfHandValue, setSleightOfHandValue] = useState(1);
  const [stealth, setStealth] = useState(false);
  const [stealthValue, setStealthValue] = useState(1);
  const [survival, setSurvival] = useState(false);
  const [survivalValue, setSurvivalValue] = useState(1);

  return (
    <ItemContainer>
      {/* Strength */}
      <ItemLabel>Strength?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-strength"
        checked={strength}
        onChange={() => {
          setStrength((prevState) => !prevState);
        }}
      />
      {strength ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-strength-value"
          value={strengthValue}
          onChange={(e) => {
            setStrengthValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Dexterity */}
      <ItemLabel>Dexterity?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-dexterity"
        checked={dexterity}
        onChange={() => {
          setDexterity((prevState) => !prevState);
        }}
      />
      {dexterity ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-dexterity-value"
          value={dexterityValue}
          onChange={(e) => {
            setDexterityValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Constitution */}
      <ItemLabel>Constitution?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-constitution"
        checked={constitution}
        onChange={() => {
          setConstitution((prevState) => !prevState);
        }}
      />
      {constitution ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-constitution-value"
          value={constitutionValue}
          onChange={(e) => {
            setConstitutionValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Intelligence */}
      <ItemLabel>Intelligence?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-intelligence"
        checked={intelligence}
        onChange={() => {
          setIntelligence((prevState) => !prevState);
        }}
      />
      {intelligence ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-intelligence-value"
          value={intelligenceValue}
          onChange={(e) => {
            setIntelligenceValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Wisdom */}
      <ItemLabel>Wisdom?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-wisdom"
        checked={wisdom}
        onChange={() => {
          setWisdom((prevState) => !prevState);
          changeSpeedObject();
        }}
      />
      {wisdom ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-wisdom-value"
          value={wisdomValue}
          onChange={(e) => {
            setWisdomValue(Number(e.target.value));
            changeSpeedObject();
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Charisma */}
      <ItemLabel>Charisma?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-charisma"
        checked={charisma}
        onChange={() => {
          setCharisma((prevState) => !prevState);
          changeSpeedObject();
        }}
      />
      {charisma ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-charisma-value"
          value={charismaValue}
          onChange={(e) => {
            setCharismaValue(Number(e.target.value));
            changeSpeedObject();
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Acrobatics */}
      <ItemLabel>Acrobatics?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-acrobatics"
        checked={acrobatics}
        onChange={() => {
          setAcrobatics((prevState) => !prevState);
        }}
      />
      {acrobatics ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-acrobatics-value"
          value={acrobaticsValue}
          onChange={(e) => {
            setAcrobaticsValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Animal Handling */}
      <ItemLabel>Animal Handling?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-animal-handling"
        checked={animalHandling}
        onChange={() => {
          setAnimalHandling((prevState) => !prevState);
        }}
      />
      {animalHandling ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-animal-handling-value"
          value={animalHandlingValue}
          onChange={(e) => {
            setAnimalHandlingValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Arcana */}
      <ItemLabel>Arcana?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-arcana"
        checked={arcana}
        onChange={() => {
          setArcana((prevState) => !prevState);
        }}
      />
      {arcana ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-arcana-value"
          value={arcanaValue}
          onChange={(e) => {
            setArcanaValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Athletics */}
      <ItemLabel>Athletics?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-athletics"
        checked={athletics}
        onChange={() => {
          setAthletics((prevState) => !prevState);
        }}
      />
      {athletics ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-athletics-value"
          value={athleticsValue}
          onChange={(e) => {
            setAthleticsValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Deception */}
      <ItemLabel>Deception?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-deception"
        checked={deception}
        onChange={() => {
          setDeception((prevState) => !prevState);
        }}
      />
      {deception ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-deception-value"
          value={deceptionValue}
          onChange={(e) => {
            setDeceptionValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* History */}
      <ItemLabel>History?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-history"
        checked={history}
        onChange={() => {
          setHistory((prevState) => !prevState);
        }}
      />
      {history ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-history-value"
          value={historyValue}
          onChange={(e) => {
          setHistoryValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Insight */}
      <ItemLabel>Insight?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-insight"
        checked={insight}
        onChange={() => {
          setInsight((prevState) => !prevState);
        }}
      />
      {insight ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-insight-value"
          value={insightValue}
          onChange={(e) => {
          setInsightValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Intimidation */}
      <ItemLabel>Intimidation?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-intimidation"
        checked={intimidation}
        onChange={() => {
          setIntimidation((prevState) => !prevState);
        }}
      />
      {intimidation ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-intimidation-value"
          value={intimidationValue}
          onChange={(e) => {
          setIntimidationValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Investigation */}
      <ItemLabel>Investigation?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-investigation"
        checked={investigation}
        onChange={() => {
          setInvestigation((prevState) => !prevState);
        }}
      />
      {investigation ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-investigation-value"
          value={investigationValue}
          onChange={(e) => {
          setInvestigationValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Medicine */}
      <ItemLabel>Medicine?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-medicine"
        checked={medicine}
        onChange={() => {
          setMedicine((prevState) => !prevState);
        }}
      />
      {medicine ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-medicine-value"
          value={medicineValue}
          onChange={(e) => {
          setMedicineValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Nature */}
      <ItemLabel>Nature?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-nature"
        checked={nature}
        onChange={() => {
          setNature((prevState) => !prevState);
        }}
      />
      {nature ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-nature-value"
          value={natureValue}
          onChange={(e) => {
          setNatureValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Perception */}
      <ItemLabel>Perception?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-perception"
        checked={perception}
        onChange={() => {
          setPerception((prevState) => !prevState);
        }}
      />
      {perception ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-perception-value"
          value={perceptionValue}
          onChange={(e) => {
          setPerceptionValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Performance */}
      <ItemLabel>Performance?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-performance"
        checked={performance}
        onChange={() => {
          setPerformance((prevState) => !prevState);
        }}
      />
      {performance ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-performance-value"
          value={performanceValue}
          onChange={(e) => {
          setPerformanceValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Persuasion */}
      <ItemLabel>Persuasion?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-persuasion"
        checked={persuasion}
        onChange={() => {
          setPersuasion((prevState) => !prevState);
        }}
      />
      {persuasion ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-persuasion-value"
          value={persuasionValue}
          onChange={(e) => {
          setPersuasionValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Religion */}
      <ItemLabel>Religion?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-religion"
        checked={religion}
        onChange={() => {
          setReligion((prevState) => !prevState);
        }}
      />
      {religion ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-religion-value"
          value={religionValue}
          onChange={(e) => {
          setReligionValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Sleight of Hand */}
      <ItemLabel>Sleight of Hand?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-sleight-of-hand"
        checked={sleightOfHand}
        onChange={() => {
          setSleightOfHand((prevState) => !prevState);
        }}
      />
      {sleightOfHand ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-sleight-of-hand-value"
          value={sleightOfHandValue}
          onChange={(e) => {
          setSleightOfHandValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Stealth */}
      <ItemLabel>Stealth?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-stealth"
        checked={stealth}
        onChange={() => {
          setStealth((prevState) => !prevState);
        }}
      />
      {stealth ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-stealth-value"
          value={stealthValue}
          onChange={(e) => {
          setStealthValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}

      {/* Survival */}
      <ItemLabel>Survival?</ItemLabel>
      <ItemCheckBox
        type="checkbox"
        id="field-monster-proficiency-survival"
        checked={survival}
        onChange={() => {
          setSurvival((prevState) => !prevState);
        }}
      />
      {survival ? (
        <ItemInputNumber
          type="number"
          max="1000"
          min="1"
          id="field-monster-proficiency-survival-value"
          value={survivalValue}
          onChange={(e) => {
          setSurvivalValue(Number(e.target.value));
          }}
        ></ItemInputNumber>
      ) : (
        <></>
      )}
    </ItemContainer>
  );
}
