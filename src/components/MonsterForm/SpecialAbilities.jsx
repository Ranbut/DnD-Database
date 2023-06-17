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
      onSpecialAbilitiesChange(...specialAbilities, newSpecialAbility);
      setNewSpecialAbility({ name: "", desc: "" });
    }
  };

  const handleDeleteSpecialAbility = (index) => {
    const updatedSpecialAbilities = [...specialAbilities];
    updatedSpecialAbilities.splice(index, 1);
    onSpecialAbilitiesDelete(updatedSpecialAbilities);
  };

  return (
    <div>
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
        <input
          type="text"
          placeholder="Name"
          value={newSpecialAbility.name}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="Description"
          value={newSpecialAbility.desc}
          onChange={handleDescChange}
        ></textarea>
        <button onClick={handleAddSpecialAbility}>Add</button>
      </div>
    </div>
  );
}