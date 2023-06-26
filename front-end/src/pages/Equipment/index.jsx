import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getEquipmentByIndex } from "../../services/DnDAPI/equipmentApi";
import EquipmentDetails from "../../components/EquipmentDetails";
import { addHistory } from "../../services/historyApi";
import useToken from "../../hooks/useToken";
import Footer from '../../components/Footer';

export default function Equipment() {
    const [equipment, setEquipment] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');
            
            const equipmentSelected = await getEquipmentByIndex(paramIndex);
            document.title = `${equipmentSelected.name} - D&D Database`;
            setEquipment(equipmentSelected);

            if (token) {
                const body = { 
                    index: equipmentSelected.index,
                    name: equipmentSelected.name,
                    type: "EQUIPMENT"
                };
                await addHistory(body ,token);
            }
        }
        fetchData();
    }, [location.search]);

    return (
        <>
            <Header />
            {equipment ? (<EquipmentDetails equipment={equipment}/>) : (<></>)}
            <Footer/>
        </>
    );
};
