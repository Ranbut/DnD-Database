import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";
import MagicItemForm from "../../components/MagicItemForm";
import { getMagicItemById } from "../../services/magicItemApi";

export default function MagicItemCreation() {
    const [magicItem, setMagicItem] = useState(null);
    const [magicItemId, setMagicItemId] = useState(null);

    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Magic Item Creation - D&D Database';
        if(!token) navigate("/sign-in?return=homebrew/create-magic-item");
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');

            if(paramId){
                const userMagicItem = await getMagicItemById(paramId, token);
                setMagicItem(userMagicItem.magicItem);
                setMagicItemId(paramId);
            }
        }
        fetchData();
    }, [token, navigate]);
    
    return (
        <>
            <Header />
            <MagicItemForm magicItem={magicItem} id={magicItemId} token={token}/>
        </>
    );
};