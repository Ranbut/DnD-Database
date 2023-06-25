import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getMagicItemById } from "../../services/magicItemApi";
import MagicItemDetails from "../../components/MagicItemDetails";
import useToken from "../../hooks/useToken";

export default function HomebrewMagicItem() {
    const [magicItem, setMagicItem] = useState(null);

    const token = useToken();
    const location = useLocation();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');

            const magicItemSelected = await getMagicItemById(paramId, token);
            document.title = `${magicItemSelected.magicItem.name} - D&D Database`;
            setMagicItem(magicItemSelected.magicItem);
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
