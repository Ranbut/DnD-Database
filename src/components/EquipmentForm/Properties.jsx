import { ItemContainer, ItemInputText, AddButton } from "./style"

import React, { useState } from "react";

export default function Properties({ properties, onPropertiesChange, onPropertiesDelete }) {
  const [newProperty, setNewProperty] = useState("");

  const handleAddProperty = () => {
    if (newProperty !== "") {
      onPropertiesChange(newProperty);
      setNewProperty("");
      console.log("asd");
    }
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = [...properties];
    updatedProperties.splice(index, 1);
    onPropertiesDelete(updatedProperties);
  };

  return (
    <ItemContainer>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <strong>{property}; </strong>
            <button onClick={() => handleDeleteProperty(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <ItemInputText
          type="text"
          placeholder="Name"
          value={newProperty}
          onChange={(e) => setNewProperty(e.target.value)}
        />
        <AddButton onClick={handleAddProperty}>Add</AddButton>
      </div>
    </ItemContainer>
  );
}