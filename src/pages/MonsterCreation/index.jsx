import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MonsterForm from "../../components/MonsterForm";
import useToken from "../../hooks/useToken";

export default function MonsterCreation() {
    const token = useToken();
    const navigate = useNavigate();


    useEffect(() => {
        document.title = 'Monster Creator - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-monster");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <MonsterForm token={token}/>
        </>
    );
};