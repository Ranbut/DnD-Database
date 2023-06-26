import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MonsterForm from "../../components/MonsterForm";
import { getMonsterById } from "../../services/monstersApi";
import useToken from "../../hooks/useToken";
import Footer from '../../components/Footer';

export default function MonsterCreation() {
    const [monster, setMonster] = useState(null);
    const [monsterId, setMonsterId] = useState(null);

    const token = useToken();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(!token) navigate("/sign-in?return=homebrew/create-monster");
        document.title = 'Monster Creator - D&D Database';
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramId = queryParams.get('id');

            if(paramId){
                const userMonster = await getMonsterById(paramId, token);
                setMonster(userMonster.monster);
                setMonsterId(paramId);
            }
        }
        fetchData();
    }, [token, navigate]);
    

    return (
        <>
            <Header />
            <MonsterForm monster={monster} id={monsterId} token={token}/>
            <Footer/>
        </>
    );
};