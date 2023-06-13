import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { getEquipmentsByCategory, getEquipmentsCategories } from "../../services/DnDAPI/equipmentApi";

export default function Equipments() {
    const [equipmentsCategoriesList, setEquipmentsCategoriesList] = useState([]);
    const [categorizedEquipmentsCategories, setCategorizedEquipmentsCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categorizedEquipments, setCategorizedEquipments] = useState({});

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const queryParams = new URLSearchParams(location.search);
            const paramIndex = queryParams.get('index');

            if(paramIndex){
                setSelectedCategory(paramIndex);
                fetchDataByCategory(paramIndex);
            }

            const equipments = await getEquipmentsCategories();
            setEquipmentsCategoriesList(equipments);
        }
        fetchData();
    }, [location.search]);

    useEffect(() => {
        const categorized = categorizeEquipments(equipmentsCategoriesList);
        setCategorizedEquipmentsCategories(categorized);
    }, [equipmentsCategoriesList]);

    async function fetchDataByCategory(index){
        const equipments = await getEquipmentsByCategory(index);
        const categorized = categorizeEquipments(equipments.equipment);
        setCategorizedEquipments(categorized);
    }

    function categorizeEquipments(equipments) {
        const categorizedEquipments = {};

        equipments.forEach((equipment) => {
            const firstLetter = equipment.name.charAt(0).toUpperCase();
            if (!categorizedEquipments[firstLetter]) {
                categorizedEquipments[firstLetter] = [];
            }
            categorizedEquipments[firstLetter].push(equipment);
        });

        return categorizedEquipments;
    }

    return (
        <>
            <Header />
            {!selectedCategory ? 
            (<div className="flex flex-col space-y-4">
                {Object.entries(categorizedEquipmentsCategories).map(([letter, equipmentCategory]) => (
                    <div className="ml-4" key={letter}>
                        <h2 className="mt-4 mb-4 text-red-600 text-2xl font-bold">{letter}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {equipmentCategory.map((category, index) => (
                                <Link key={index} onClick={() => {setSelectedCategory(category.index); fetchDataByCategory(category.index);}} to={`/equipments?index=${category.index}`} className="p-4 bg-gray-200 rounded-md">
                                    <p className="text-gray-800">{category.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>) : 
            (<div className="flex flex-col space-y-4">
                {Object.entries(categorizedEquipments).map(([letter, equipment]) => (
                    <div className="ml-4" key={letter}>
                        <h2 className="mt-4 mb-4 text-red-600 text-2xl font-bold">{letter}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {equipment.map((equipment, index) => (
                                <Link key={index} to={
                                    equipment.url.includes("magic-items")
                                      ? `/magic-item?index=${equipment.index}`
                                      : `/equipment?index=${equipment.index}`
                                  } className="p-4 bg-gray-200 rounded-md">
                                    <p className="text-gray-800">{equipment.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>)}
        </>
    );
};
