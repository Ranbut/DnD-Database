import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import CharacterForm from "../../components/CharacterFrom";

export default function CharacterCreation() {
    const token = useToken();
    const navigate = useNavigate();


    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew/create-character");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <CharacterForm />
        </>
    );
};