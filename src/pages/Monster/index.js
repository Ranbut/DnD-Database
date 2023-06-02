import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMonsterByIndex } from "../../services/DnD Api/monstersApi";
import MonsterStats from "../../components/MonsterStats";

export default function Monster() {
    const [monster, setMonster] = useState(null);

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const monsterSelected = await getMonsterByIndex(paramIndex);
            setMonster(monsterSelected);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            {monster ? (<MonsterStats monster={monster}/>) : (<></>)}
        </>
    );
};
