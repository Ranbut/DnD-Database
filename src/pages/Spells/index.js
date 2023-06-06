import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import { getSpells } from "../../services/DnD Api/spellsApi";

export default function Spells() {
    const [spellsList, setSpellsList] = useState([]);
    const [categorizedSpells, setCategorizedSpells] = useState({});

    useEffect(() => {
        async function fetchData() {
            const spells = await getSpells();
            setSpellsList(spells);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const categorized = categorizeSpells(spellsList);
        setCategorizedSpells(categorized);
    }, [spellsList]);

    function categorizeSpells(spells) {
        const categorizedMonsters = {};

        spells.forEach((spell) => {
            const firstLetter = spell.name.charAt(0).toUpperCase();
            if (!categorizedMonsters[firstLetter]) {
                categorizedMonsters[firstLetter] = [];
            }
            categorizedMonsters[firstLetter].push(spell);
        });

        return categorizedMonsters;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col space-y-4">
                {Object.entries(categorizedSpells).map(([letter, spells]) => (
                    <div className="ml-4" key={letter}>
                        <h2 className="mt-4 mb-4 text-red-600 text-2xl font-bold">{letter}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {spells.map((spell, index) => (
                                <Link key={index} to={`/spell?index=${spell.index}`} className="p-4 bg-gray-200 rounded-md">
                                    <p className="text-gray-800">{spell.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
