import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import MagicItemForm from "../../components/MagicItemForm";

export default function MagicItemCreation() {
    const token = useToken();
    const navigate = useNavigate();


    useEffect(() => {
        document.title = 'Magic Item Creation - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-magic-item");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <MagicItemForm token={token}/>
        </>
    );
};