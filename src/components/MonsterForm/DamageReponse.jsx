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
    <div>
      <ul>
        {damages.map((damage, index) => (
          <li key={index}>
            <strong>{damage}; </strong>
            <button onClick={() => handleDeleteDamage(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={newDamage}
          onChange={(e) => setNewDamage(e.target.value)}
        />
        <button onClick={handleAddDamage}>Add</button>
      </div>
    </div>
  );
}