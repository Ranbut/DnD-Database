import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getEquipmentByIndex } from "../../services/DnDAPI/equipmentApi";
import EquipmentDetails from "../../components/EquipmentDetails";

export default function Equipment() {
    const [equipment, setEquipment] = useState(null);

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const equipmentSelected = await getEquipmentByIndex(paramIndex);
            setEquipment(equipmentSelected);
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
