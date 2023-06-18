import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import styled from "styled-components";
import { GiSpikedDragonHead, GiBlackKnightHelm, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import Compendium1 from "../../assets/images/compendium/compendium-1.jpeg"
import Compendium2 from "../../assets/images/compendium/compendium-2.jpeg"
import Compendium3 from "../../assets/images/compendium/compendium-3.jpeg"
import Compendium4 from "../../assets/images/compendium/compendium-4.jpg"
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        document.title = 'D&D Database';
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <CompendiumList>
                <CompendiumLink to="/monsters">
                    <CompendiumContainer image={Compendium4}>
                        <CompendiumContent>
                                <CompendiumText>Monsters <GiSpikedDragonHead size='40' color='#fff' opacity='.8'/></CompendiumText>
                        </CompendiumContent>
                    </CompendiumContainer>
                </CompendiumLink>
                <CompendiumLink to="/">
                    <CompendiumContainer image={Compendium3}>
                        <CompendiumContent>
                                <CompendiumText>Class <GiBlackKnightHelm size='40' color='#fff' opacity='.8'/></CompendiumText>
                        </CompendiumContent>
                    </CompendiumContainer>
                </CompendiumLink>
                <CompendiumLink to="/equipments">
                    <CompendiumContainer image={Compendium2}>
                        <CompendiumContent>
                                <CompendiumText>Equipments <GiAxeSword size='40' color='#fff' opacity='.8'/></CompendiumText>
                        </CompendiumContent>
                    </CompendiumContainer>
                </CompendiumLink>
                <CompendiumLink to="/spells">
                    <CompendiumContainer image={Compendium1}>
                        <CompendiumContent>
                                <CompendiumText>Spells <GiMagicPalm size='40' color='#fff' opacity='.8'/></CompendiumText>
                        </CompendiumContent>
                    </CompendiumContainer>
                </CompendiumLink>
                </CompendiumList>
            </MainContainer>
        </>
    );
};

const MainContainer = styled.div`

`

const CompendiumList = styled.div`
  margin-left: 40px;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 640px) {
        margin-left: 35px;
    }
`

const CompendiumContainer = styled.div`
    margin-left: 15px;
    margin-top: 15px;
    width: 320px;
    height: 320px;
    min-width: 320px;
    min-height: 320px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    transition: transform 0.3s;
    
    @media (max-width: 640px) {
        margin-left: 0px;
        margin-top: 10px;
    }

    &:hover {
        transform: scale(1.1);
    }
`

const CompendiumContent = styled.div`
    width: 100%;
    background-color: rgba(28, 29, 30, 0.8);
    padding: 10px;
    transition: transform 0.3s;
    
    ${CompendiumContainer}:hover & {
        transform: scale(1.1);  
    }
`

const CompendiumLink = styled(Link)`
    text-decoration: none;
`

const CompendiumText = styled.span`
    opacity: 0.8;
    color: #fff;
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
