import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import SpellForm from "../../components/SpellForm";

export default function SpellCreation() {
    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Spell Creator - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-spell");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <SpellForm token={token}/>
        </>
    );
};