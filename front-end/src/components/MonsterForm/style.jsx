import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 3% 3%;
  font-family: Roboto, Helvetica, sans-serif;
`;

export const MonsterImage = styled.img`
  width: 100px;
`;

export const MonsterHeading = styled.div`
  font-size: 36px;
  border-color: #704cd9;
  border-bottom: 3px solid #704cd9;
  border-bottom-color: #704cd9;
  padding-bottom: 8px;
  padding-top: 16px;
`;

export const Label = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: normal;
  color: #242527;
  line-height: 1.3;
  font-weight: bold;
`;

export const Container = styled.div``;

export const ItemContainer = styled.div`
  margin-top: 20px;
  flex-basis: 630px;
`;

export const ItemLabel = styled.div`
  margin-top: 10px;
  color: #242527;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
`;

export const ItemInputText = styled.input`
  display: block;
  height: 50px;
  width: 60%;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemInputNumber = styled.input`
  display: block;
  height: 50px;
  width: 10%;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemCheckBox = styled.input.attrs({ type: "checkbox" })`
  display: block;
`;

export const ItemSelect = styled.select`
  display: block;
  height: 50px;
  width: 20%;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemTextArea = styled.textarea`
  display: block;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;
  width: 60%;
  resize: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CreateButton = styled.button`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  background: #45cef7;
  height: 50px;
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  border: 1px solid #d8dde3;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: none;
    min-width: none;
    width: 100%;
  }
`;

export const AddButton = styled.button`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  background: #45cef7;
  height: 50px;
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  border: 1px solid #d8dde3;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: none;
    min-width: none;
    width: 100%;
  }
`;

export const Required = styled.span`
  color: red;
`;
