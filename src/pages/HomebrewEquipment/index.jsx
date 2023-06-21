import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getEquipmentById } from "../../services/equipmentApi";
import EquipmentDetails from "../../components/EquipmentDetails";
import useToken from "../../hooks/useToken";

export default function HomebrewEquipment() {
    const [equipment, setEquipment] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');
            
            const equipmentSelected = await getEquipmentById(paramId, token);
            document.title = `${equipmentSelected.equipment.name} - D&D Database`;
            setEquipment(equipmentSelected.equipment);
        }
        fetchData();
    }, [location.search]);

    return (
        <>
            <Header />
            {equipment ? (<EquipmentDetails equipment={equipment}/>) : (<></>)}
        </>
    );
};
