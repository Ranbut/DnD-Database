import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import styled from "styled-components";
import { GiSpikedDragonHead, GiBlackKnightHelm, GiAxeSword, GiMagicPalm } from 'react-icons/gi';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        document.title = 'D&D Database';
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <CompendiumBorder />
                <CompendiumLabel>Official Material</CompendiumLabel>
                <CompendiumList>
                    <CompendiumLink to="/monsters">
                        <CompendiumContainer image='https://i.imgur.com/k7tiOS7.jpg'>
                            <CompendiumContent>
                                <CompendiumText>Monsters <GiSpikedDragonHead size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/">
                        <CompendiumContainer image='https://i.imgur.com/tqB1mDB.jpg'>
                            <CompendiumContent>
                                <CompendiumText>Class <GiBlackKnightHelm size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/equipments">
                        <CompendiumContainer image='https://i.imgur.com/RfratMD.jpg'>
                            <CompendiumContent>
                                <CompendiumText>Equipments <GiAxeSword size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/spells">
                        <CompendiumContainer image='https://i.imgur.com/Lul2jjJ.jpg'>
                            <CompendiumContent>
                                <CompendiumText>Spells <GiMagicPalm size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                </CompendiumList>
                <CompendiumBorder />
                <CompendiumLabel>My Homebrew</CompendiumLabel>
                <CompendiumList>
                    <CompendiumLink to="/homebrew">
                        <CompendiumContainer image='https://i.imgur.com/k7tiOS7.jpg'>
                            <CompendiumContent>
                                <CompendiumText>My Monsters <GiSpikedDragonHead size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/homebrew">
                        <CompendiumContainer image='https://i.imgur.com/tqB1mDB.jpg'>
                            <CompendiumContent>
                                <CompendiumText>My Characters <GiBlackKnightHelm size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/homebrew">
                        <CompendiumContainer image='https://i.imgur.com/RfratMD.jpg'>
                            <CompendiumContent>
                                <CompendiumText>My Equipments <GiAxeSword size='40' color='#fff' opacity='.8' /></CompendiumText>
                            </CompendiumContent>
                        </CompendiumContainer>
                    </CompendiumLink>
                    <CompendiumLink to="/homebrew">
                        <CompendiumContainer image='https://i.imgur.com/Lul2jjJ.jpg'>
                            <CompendiumContent>
                                <CompendiumText>My Spells <GiMagicPalm size='40' color='#fff' opacity='.8' /></CompendiumText>
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

const CompendiumBorder = styled.div`
  margin-top: 25px;
  border-bottom: 4px solid #e40712;
`

const CompendiumLabel = styled.h4`
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-top: 25px;
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
