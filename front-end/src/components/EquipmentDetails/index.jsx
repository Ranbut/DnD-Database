import styled from "styled-components";
import { addBookmark, getBookmarkByIndex, removeBookmark } from "../../services/bookmarksApi"
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";

export default function EquipmentDetails({ equipment }) {
    const [bookmarked, setBookmarked] = useState(false);
    const token = useToken();
  
    useEffect(() => {
      async function fetchData() {
          const bookmark = await getBookmarkByIndex(equipment.index, token);
          setBookmarked(bookmark);
      }
      fetchData();
  }, []);
  
  async function handleBookmark() {
    try {
        if (!bookmarked) {
            const body = {
                index: equipment.index,
                name: equipment.name,
                type: "EQUIPMENT"
            };
            await addBookmark(body, token);
            setBookmarked(true);
        }
        else {
            await removeBookmark(equipment.index, token);
            setBookmarked(false);
        }
    } catch (error) {
        alert('Error on bookmark!');
    }
  }
  

    const propertyNames = equipment.properties.map((property) => property.name);
    const joinedPropertyNames = propertyNames.join(", ") || '--';

    return (
        <MainContainer>
            <MainDetailContainer>
                <EquipmentName>{equipment.name}
                {!bookmarked && token ? (<ButtontBookmark title="Add Bookmark" onClick={handleBookmark}><BsFillBookmarkPlusFill /></ButtontBookmark>) 
                : bookmarked && token ? (<ButtontBookmark title="Remove Bookmark" onClick={handleBookmark}><BsFillBookmarkDashFill /></ButtontBookmark>) 
                : (<></>)}
                </EquipmentName>
                <Details>
                    <div>Type: <strong>{equipment.equipment_category.name}</strong></div>
                    <div>Cost: <strong>{equipment.cost ? equipment.cost.quantity + equipment.cost.unit : '--'}</strong></div>
                    <div>Weight: <strong>{equipment.weight ? equipment.weight + 'lbs' : '--'}</strong></div>
                </Details>
                {equipment.desc.map((desc, index) => (
                    <Description key={index}>{desc}</Description>
                ))}
                {equipment.armor_class ? 
                (<Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Cost</TableHeaderCell>
                            <TableHeaderCell>Armor Class</TableHeaderCell>
                            <TableHeaderCell>Strength</TableHeaderCell>
                            <TableHeaderCell>Stealth</TableHeaderCell>
                            <TableHeaderCell>Weight</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{equipment.name}</TableCell>
                            <TableCell>{equipment.cost ? equipment.cost.quantity + equipment.cost.unit : '--'}</TableCell>
                            <TableCell>{equipment.armor_class.base} + Dex modifier</TableCell>
                            <TableCell>{equipment.str_minimum ? equipment.str_minimum : '--'}</TableCell>
                            <TableCell>{equipment.stealth_disadvantage ? 'Disadvantage' : '--'}</TableCell>
                            <TableCell>{equipment.weight} lbs</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>) : (<></>)}
                {equipment.damage ? 
                (<Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Cost</TableHeaderCell>
                            <TableHeaderCell>Damage</TableHeaderCell>
                            <TableHeaderCell>Weight</TableHeaderCell>
                            <TableHeaderCell>Properties</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{equipment.name}</TableCell>
                            <TableCell>{equipment.cost ? equipment.cost.quantity + equipment.cost.unit : '--'}</TableCell>
                            <TableCell>{equipment.damage.damage_dice} {equipment.damage.damage_type.name}</TableCell>
                            <TableCell>{equipment.weight}</TableCell>
                            <TableCell>{joinedPropertyNames}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>) : (<></>)}
                {equipment.speed ? 
                (<Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Cost</TableHeaderCell>
                            <TableHeaderCell>Speed</TableHeaderCell>
                            <TableHeaderCell>Properties</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{equipment.name}</TableCell>
                            <TableCell>{equipment.cost ? equipment.cost.quantity + equipment.cost.unit : '--'}</TableCell>
                            <TableCell>{equipment.speed.quantity} {equipment.speed.unit}</TableCell>
                            <TableCell>{joinedPropertyNames}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>) : (<></>)}
            </MainDetailContainer>
        </MainContainer>
    )
};

const MainContainer = styled.div`   
    font-family: Roboto, Helvetica, sans-serif;
`;

const MainDetailContainer = styled.div`
    width: calc(100% - 370px);
    font-family: 'Scala Sans', sans-serif;
    font-size: 15px;
    margin-top: 20px;
    margin-left: 20px;
    
    @media (max-width: 600px) {
        width: 100%;
        margin-left: 0;
        padding: 10px;
    }
`;

const Details = styled.div`
    display: flex;
    & > div {
        margin-right: 20px;
    }
`;

const Description = styled.div`
    margin-top: 10px;
`;

const EquipmentName = styled.div`
    font-size: 36px;
    margin-top: 10px;
    color: #242527;
`;

const Table = styled.table`
    margin-top: 10px;
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.thead`
    background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
    padding: 8px;
    text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    padding: 8px;
`;

const ButtontBookmark = styled.button`
    background-color: transparent;
    margin-top: 20px;
    margin-left: 20px;
    @media (max-width: 580px) {
    margin-left: 18%;
  }
`;