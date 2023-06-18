import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMonsterByIndex } from "../../services/DnDAPI/monstersApi";
import MonsterStats from "../../components/MonsterStats";
import { addHistory } from "../../services/historyApi";
import useToken from "../../hooks/useToken";

export default function Monster() {
    const [monster, setMonster] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const monsterSelected = await getMonsterByIndex(paramIndex);
            document.title = `${monsterSelected.name} - D&D Database`;
            setMonster(monsterSelected);
            if (token) {
                const body = { 
                    index: monsterSelected.index,
                    name: monsterSelected.name,
                    type: "MONSTER"
                };
                await addHistory(body ,token);
            }
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
