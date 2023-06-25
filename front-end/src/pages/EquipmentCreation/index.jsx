import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import EquipmentForm from "../../components/EquipmentForm";
import { getEquipmentById } from "../../services/equipmentApi";

export default function EquipmentCreation() {
    const [equipment, setEquipment] = useState(null);
    const [equipmentId, setEquipmentId] = useState(null);

    const token = useToken();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = 'Equipment Creation - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-equipment");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');

            if(paramId){
                const userEquipment = await getEquipmentById(paramId, token);
                setEquipment(userEquipment.equipment);
                setEquipmentId(paramId);
            }
        }
        fetchData();
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <EquipmentForm equipment={equipment} id={equipmentId} token={token}/>
        </>
    );
};