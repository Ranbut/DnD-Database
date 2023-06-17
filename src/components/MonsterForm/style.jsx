import styled from "styled-components"

export const MainContainer = styled.div`
    padding: 3% 3%;
    font-family: Roboto, Helvetica,sans-serif;
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

export const Container = styled.div`

`;

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
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

export const ItemInputNumber = styled.input`
    display: block;
    height: 50px;
    width: 10%;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
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
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

export const ItemTextArea = styled.textarea`
    display: block;
    padding: 10px;
    border: 1px solid #d8dde3;
    background-color: #fff;
    box-shadow: inset 0 0 4px 0 rgba(139,178,199,0.48);
    border-radius: 0;
    font-size: 15px;
`;

export const CreateButton = styled.button`
`;

export const Required = styled.span`
    color: red;
`;