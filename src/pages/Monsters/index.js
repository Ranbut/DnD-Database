import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import { getMonsters } from "../../services/DnD Api/monstersApi";

export default function Monsters() {
    const [monstersList, setMonstersList] = useState([]);
    const [categorizedMonsters, setCategorizedMonsters] = useState({});

    useEffect(() => {
        async function fetchData() {
            const monsters = await getMonsters();
            setMonstersList(monsters);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const categorized = categorizeMonsters(monstersList);
        setCategorizedMonsters(categorized);
    }, [monstersList]);

    function categorizeMonsters(monsters) {
        const categorizedMonsters = {};

        monsters.forEach((monster) => {
            const firstLetter = monster.name.charAt(0).toUpperCase();
            if (!categorizedMonsters[firstLetter]) {
                categorizedMonsters[firstLetter] = [];
            }
            categorizedMonsters[firstLetter].push(monster);
        });

        return categorizedMonsters;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col space-y-4">
                {Object.entries(categorizedMonsters).map(([letter, monsters]) => (
                    <div className="ml-4" key={letter}>
                        <h2 className="mt-4 mb-4 text-red-600 text-2xl font-bold">{letter}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {monsters.map((monster, index) => (
                                <Link key={index} to={`/monster?index=${monster.index}`} className="p-4 bg-gray-200 rounded-md">
                                    <p className="text-gray-800">{monster.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
