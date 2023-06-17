import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import styled from "styled-components";
import Logo from "../../assets/images/dnd.svg"
import { GiSpikedDragonHead, GiMagicAxe, GiAxeSword, GiMagicPalm } from 'react-icons/gi';

export default function Homebrew() {
    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <SidebarContainer background={Logo}>
                    <div>
                        <SidebarList>
                            <SidebarListItem>Monsters <GiSpikedDragonHead /></SidebarListItem>
                            <SidebarListItem>Spells <GiMagicPalm /></SidebarListItem>
                            <SidebarListItem>Equipments <GiAxeSword /></SidebarListItem>
                            <SidebarListItem>Magic Items <GiMagicAxe /></SidebarListItem>
                        </SidebarList>
                    </div>
                </SidebarContainer>
        </>
    );
};

const SidebarContainer = styled.div`
      margin-top: 20px;
      margin-left: 20px;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border: 2px solid red;
      background-color: transparent;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      background-image: url(${props => props.background});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: fit-content;
    `;

const SidebarList = styled.ul`
      margin-top: 4px;
      margin-left: 4px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;

const SidebarListItem = styled.li`
      cursor: pointer;
      font-weight: bold;
      background-color: ${(props) => (props.selected ? "#E5E7EB" : "none")};
      color: ${(props) => (props.selected ? "red" : "inherit")};
    `;