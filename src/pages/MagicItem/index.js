import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMagicItemByIndex } from "../../services/DnDAPI/equipmentApi";
import MagicItemDetails from "../../components/MagicItemDetails";

export default function MagicItem() {
    const [magicItem, setMagicItem] = useState(null);

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');

            const magicItemSelected = await getMagicItemByIndex(paramIndex);
            setMagicItem(magicItemSelected);
        }
        fetchData();
    }, [location.search]);

    return (
        <>
            <Header />
            {magicItem ? (<MagicItemDetails magicItem={magicItem}/>) : (<></>)}
        </>
    );
};
