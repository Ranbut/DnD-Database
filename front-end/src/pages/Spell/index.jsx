import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getSpellByIndex } from "../../services/DnDAPI/spellsApi";
import SpellDetails from "../../components/SpellDetails";
import useToken from "../../hooks/useToken";
import { addHistory } from "../../services/historyApi";
import Footer from '../../components/Footer';

export default function Spell() {
    const [spell, setSpell] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const spellSelected = await getSpellByIndex(paramIndex);
            document.title = `${spellSelected.name} - D&D Database`;
            setSpell(spellSelected);
            if (token) {
                const body = { 
                    index: spellSelected.index,
                    name: spellSelected.name,
                    type: "SPELL"
                };
                await addHistory(body ,token);
            }
        }
        fetchData();
    }, [location.search, token]);

    return (
        <>
            <Header />
            {spell ? (<SpellDetails spell={spell}/>) : (<></>)}
            <Footer/>
        </>
    );
};
