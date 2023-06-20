import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getSpellById } from "../../services/spellsApi";
import SpellDetails from "../../components/SpellDetails";
import useToken from "../../hooks/useToken";

export default function HomebrewSpell() {
    const [spell, setSpell] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');
            
            const spellSelected = await getSpellById(paramId, token);
            document.title = `${spellSelected.spell.name} - D&D Database`;
            setSpell(spellSelected.spell);
        }
        fetchData();
    }, [location.search, token]);

    return (
        <>
            <Header />
            {spell ? (<SpellDetails spell={spell}/>) : (<></>)}
        </>
    );
};
