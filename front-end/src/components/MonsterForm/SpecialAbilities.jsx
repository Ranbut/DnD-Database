import { ItemContainer, ItemInputText, ItemTextArea, AddButton } from "./style"
import React, { useState } from "react";

export default function SpecialAbilities({ specialAbilities, onSpecialAbilitiesChange, onSpecialAbilitiesDelete }) {
  const [newSpecialAbility, setNewSpecialAbility] = useState({
    name: "",
    desc: ""
  });

  const handleNameChange = (e) => {
    setNewSpecialAbility({ ...newSpecialAbility, name: e.target.value });
  };

  const handleDescChange = (e) => {
    setNewSpecialAbility({ ...newSpecialAbility, desc: e.target.value });
  };

  const handleAddSpecialAbility = () => {
    if (newSpecialAbility.name !== "" && newSpecialAbility.desc !== "") {
      onSpecialAbilitiesChange(newSpecialAbility);
      setNewSpecialAbility({ name: "", desc: "" });
    }
  };

  const handleDeleteSpecialAbility = (index) => {
    const updatedSpecialAbilities = [...specialAbilities];
    updatedSpecialAbilities.splice(index, 1);
    onSpecialAbilitiesDelete(updatedSpecialAbilities);
  };

  return (
    <ItemContainer>
      <ul>
        {specialAbilities.map((specialAbility, index) => (
          <li key={index}>
            <strong>{specialAbility.name}: </strong>
            {specialAbility.desc}
            <button onClick={() => handleDeleteSpecialAbility(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <ItemInputText
          type="text"
          placeholder="Name"
          value={newSpecialAbility.name}
          onChange={handleNameChange}
        />
        <ItemTextArea
          placeholder="Description"
          value={newSpecialAbility.desc}
          onChange={handleDescChange}
        ></ItemTextArea>
        <AddButton onClick={handleAddSpecialAbility}>Add</AddButton>
      </div>
    </ItemContainer>
  );
}