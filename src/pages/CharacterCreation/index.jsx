import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import CharacterForm from "../../components/CharacterForm";

export default function CharacterCreation() {
    const token = useToken();
    const navigate = useNavigate();


    useEffect(() => {
        document.title = 'Character Creation - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-character");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <CharacterForm token={token}/>
        </>
    );
};