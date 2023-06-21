import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMonsterById } from "../../services/monstersApi";
import MonsterStats from "../../components/MonsterStats";
import useToken from "../../hooks/useToken";

export default function HomebrewMonster() {
    const [monster, setMonster] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');
            
            const monsterSelected = await getMonsterById(paramId, token);
            document.title = `${monsterSelected.monster.name} - D&D Database`;
            setMonster(monsterSelected.monster);
        }
        fetchData();
    }, [location.search, token]);

    return (
        <>
            <Header />
            {monster ? (<MonsterStats monster={monster}/>) : (<></>)}
        </>
    );
};
