import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getSpellByIndex } from "../../services/DnD Api/spellsApi";
import SpellDetails from "../../components/SpellDetails";

export default function Spell() {
    const [magic, setMonster] = useState(null);

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const spellSelected = await getSpellByIndex(paramIndex);
            setMonster(spellSelected);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            {magic ? (<SpellDetails monster={magic}/>) : (<></>)}
        </>
    );
};
