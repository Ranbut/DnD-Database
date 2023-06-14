import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import styled from "styled-components";
import { GiSpikedDragonHead, GiBlackKnightHelm, GiAxeSword, GiMagicPalm } from 'react-icons/gi';

export default function Home() {
    return (
        <>
            <Header />
            <MainContainer>
                <CompendiumList>
                    <CompendiumContainer>
                    <Link to='/monsters'>
                        <CompendiumIcon>
                            <GiSpikedDragonHead size={160} />
                        </CompendiumIcon>
                        <CompendiumLabel>Monsters</CompendiumLabel>
                    </Link>
                    </CompendiumContainer>
                    <CompendiumContainer>
                    <Link to='/'>
                        <CompendiumIcon>
                            <GiBlackKnightHelm size={160} />
                        </CompendiumIcon>
                        <CompendiumLabel>Classes</CompendiumLabel>
                    </Link>
                    </CompendiumContainer>
                    <CompendiumContainer>
                    <Link to='/equipments'>
                        <CompendiumIcon>
                            <GiAxeSword size={160} />
                        </CompendiumIcon>
                        <CompendiumLabel>Equipments</CompendiumLabel>
                    </Link>
                    </CompendiumContainer>
                    <CompendiumContainer>
                    <Link to='/spells'>
                        <CompendiumIcon>
                            <GiMagicPalm size={160} />
                        </CompendiumIcon>
                        <CompendiumLabel>Spells</CompendiumLabel>
                    </Link>
                    </CompendiumContainer>
                </CompendiumList>
            </MainContainer>
        </>
    );
};

const MainContainer = styled.div`

`

const CompendiumList = styled.div`
    margin-top: 40px;
    display: flex;
`

const CompendiumContainer = styled.div`
    margin-left: 45px;
    padding: 4% 4%;
    background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(187,0,10,1) 35%, rgba(187,0,10,1) 65%, rgba(0,0,0,1) 100%); 
    width: 300px;
    height: 375px;
`
const CompendiumIcon = styled.div`
    margin: 100px, 20px;
`;

const CompendiumLabel = styled.h4`
    font-size: 40px;
`