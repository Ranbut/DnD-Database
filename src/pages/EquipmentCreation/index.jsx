import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import EquipmentForm from "../../components/EquipmentForm";

export default function CharacterCreation() {
    const token = useToken();
    const navigate = useNavigate();


    useEffect(() => {
        document.title = 'Equipment Creation - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-equipment");
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <EquipmentForm token={token}/>
        </>
    );
};