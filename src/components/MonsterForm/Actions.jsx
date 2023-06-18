import { ItemContainer, ItemInputText, ItemTextArea, AddButton } from "./style"
import React, { useState } from "react";

export default function Actions({ actions, onActionsChange, onActionsDelete }) {
  const [newAction, setNewAction] = useState({
    name: "",
    desc: ""
  });

  const handleNameChange = (e) => {
    setNewAction({ ...newAction, name: e.target.value });
  };

  const handleDescChange = (e) => {
    setNewAction({ ...newAction, desc: e.target.value });
  };

  const handleAddAction = () => {
    if (newAction.name !== "" && newAction.desc !== "") {
      onActionsChange(...actions, newAction);
      setNewAction({ name: "", desc: "" });
    }
  };

  const handleDeleteAction = (index) => {
    const updatedActions = [...actions];
    updatedActions.splice(index, 1);
    onActionsDelete(updatedActions);
  };

  return (
    <ItemContainer>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>
            <strong>{action.name}: </strong>
            {action.desc}
            <button onClick={() => handleDeleteAction(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <ItemInputText
          type="text"
          placeholder="Name"
          value={newAction.name}
          onChange={handleNameChange}
        />
        <ItemTextArea
          placeholder="Description"
          value={newAction.desc}
          onChange={handleDescChange}
        ></ItemTextArea>
        <AddButton onClick={handleAddAction}>Add</AddButton>
      </div>
    </ItemContainer>
  );
}