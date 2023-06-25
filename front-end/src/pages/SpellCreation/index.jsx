import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import SpellForm from "../../components/SpellForm";
import { getSpellById } from "../../services/spellsApi";

export default function SpellCreation() {
    const [spell, setSpell] = useState(null);
    const [spellId, setSpellId] = useState(null);

    const token = useToken();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = 'Spell Creator - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-spell");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');

            if(paramId){
                const userSpell = await getSpellById(paramId, token);
                setSpell(userSpell.spell);
                setSpellId(paramId);
            }
        }
        fetchData();
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <SpellForm spell={spell} id={spellId} token={token}/>
        </>
    );
};