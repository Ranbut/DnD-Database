import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 3% 3%;
  font-family: Roboto, Helvetica, sans-serif;
`;

export const MagicItemHeading = styled.div`
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
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 630px;
  }
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
  width: 100%;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;
`;

export const ItemSelect = styled.select`
  display: block;
  height: 50px;
  width: 100%;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;
`;

export const ItemTextArea = styled.textarea`
  display: block;
  padding: 10px;
  border: 1px solid #d8dde3;
  background-color: #fff;
  box-shadow: inset 0 0 4px 0 rgba(139, 178, 199, 0.48);
  border-radius: 0;
  font-size: 15px;
  width: 100%;
  resize: none;
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
`;

export const Required = styled.span`
  color: red;
`;