import { ItemContainer, ItemInputText, AddButton } from "./style"

import React, { useState } from "react";

export default function DamageReponse({ damages, onDamagesChange, onDamagesDelete }) {
  const [newDamage, setNewDamage] = useState("");

  const handleAddDamage = () => {
    if (newDamage !== "") {
      onDamagesChange(newDamage);
      setNewDamage("");
    }
  };

  const handleDeleteDamage = (index) => {
    const updatedDamages = [...damages];
    updatedDamages.splice(index, 1);
    onDamagesDelete(updatedDamages);
  };

  return (
    <ItemContainer>
      <ul>
        {damages.map((damage, index) => (
          <li key={index}>
            <strong>{damage}; </strong>
            <button onClick={() => handleDeleteDamage(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <ItemInputText
          type="text"
          placeholder="Name"
          value={newDamage}
          onChange={(e) => setNewDamage(e.target.value)}
        />
        <AddButton onClick={handleAddDamage}>Add</AddButton>
      </div>
    </ItemContainer>
  );
}