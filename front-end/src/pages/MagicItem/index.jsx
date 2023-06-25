import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMagicItemByIndex } from "../../services/DnDAPI/equipmentApi";
import MagicItemDetails from "../../components/MagicItemDetails";
import { addHistory } from "../../services/historyApi";
import useToken from "../../hooks/useToken";

export default function MagicItem() {
    const [magicItem, setMagicItem] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');

            const magicItemSelected = await getMagicItemByIndex(paramIndex);
            document.title = `${magicItemSelected.name} - D&D Database`;
            setMagicItem(magicItemSelected);
            if (token) {
                const body = { 
                    index: magicItemSelected.index,
                    name: magicItemSelected.name,
                    type: "MAGIC_ITEM"
                };
                await addHistory(body ,token);
            }
        }
        fetchData();
    }, [location.search, token]);

    return (
        <>
            <Header />
            {magicItem ? (<MagicItemDetails magicItem={magicItem}/>) : (<></>)}
        </>
    );
};
