import styled, { createGlobalStyle } from "styled-components"
import MrsEavesSmallCapsRegular from "../../assets/fonts/MrsEavesSmallCapsRegular.ttf";
import ScalaSansRegular from "../../assets/fonts/ScalaSans/ScalaSans-Regular.ttf";
import TopTexture from "../../assets/images/stat-block-top-texture.png"
import PaperTexture from "../../assets/images/paper-texture.png"
import HeaderBar from "../../assets/images/stat-block-header-bar.svg"
import { addBookmark, getBookmarkByIndex, removeBookmark } from "../../services/bookmarksApi"
import useToken from "../../hooks/useToken";
import { useEffect, useState } from "react";
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs"

export default function MonsterStats({ monster }) {
    const [bookmarked, setBookmarked] = useState(false);
    const token = useToken();

    useEffect(() => {
        async function fetchData() {
            const bookmark = await getBookmarkByIndex(monster.index, token);
            setBookmarked(bookmark);
            console.log(bookmarked);
        }
        fetchData();
    }, []);

    function renderMonsterMeta({ size, type, alignment }) {
        const textType = type.charAt(0).toUpperCase() + type.slice(1);
        const textAlignment = alignment.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });

        return `${size}  ${textType}, ${textAlignment}`
    }

    function renderMonsterSpeed({ speed }) {
        if (!speed.walk) {
            return Object.entries(speed)
                .map(([key, value]) => key + " " + value)
                .join(", ");
        }

        return speed.walk + ", " + Object.entries(speed)
            .filter(([key]) => key !== "walk")
            .map(([key, value]) => key + " " + value)
            .join(", ");
    }

    function calculateAbilityModifier(abilityScore) {
        const abilityModifier = Math.floor((abilityScore - 10) / 2);

        if (abilityModifier >= 0)
            return '+' + abilityModifier;
        else
            return abilityModifier;
    };

    function getProficiencyBonus({ challenge_rating }) {
        console.log()
        if (challenge_rating >= 0 && challenge_rating <= 4) {
            return 2;
        } else if (challenge_rating >= 5 && challenge_rating <= 8) {
            return 3;
        } else if (challenge_rating >= 9 && challenge_rating <= 12) {
            return 4;
        } else if (challenge_rating >= 13 && challenge_rating <= 16) {
            return 5;
        } else if (challenge_rating >= 17 && challenge_rating <= 20) {
            return 6;
        } else if (challenge_rating >= 21 && challenge_rating <= 24) {
            return 7;
        } else if (challenge_rating >= 25 && challenge_rating <= 28) {
            return 8;
        } else if (challenge_rating >= 29) {
            return 9;
        } else {
            return 0; // Invalid challenge_rating
        }
    };

    function renderMonsterSavingThrows({ proficiencies }) {
        const savingThrows = proficiencies.filter(item => item.proficiency.name.includes('Saving Throw'));

        const savingThrowsString = savingThrows.map(item => `${item.proficiency.name.split(': ')[1]} +${item.value}`).join(', ');

        if (!savingThrowsString) {
            return (<></>);
        }
        else {
            return (
                <>
                    <StyledTidbitLabel>Saving Throws</StyledTidbitLabel>
                    <span> {savingThrowsString}</span>
                </>)
        }
    }

    function renderMonsterSkills({ proficiencies }) {
        const skills = proficiencies.filter(item => item.proficiency.name.includes('Skill'));

        const skillsString = skills.map(item => `${item.proficiency.name.split(': ')[1]} +${item.value}`).join(', ');

        if (!skillsString) {
            return (<></>);
        }
        else {
            return (
                <>
                    <StyledTidbitLabel>Skills</StyledTidbitLabel>
                    <span> {skillsString}</span>
                </>)
        }
    }

    function renderMonsterDamageImmunities({ damage_immunities }) {
        const capitalizeArray = damage_immunities.map(element =>
            element.charAt(0).toUpperCase() + element.slice(1)
        );
        const result = capitalizeArray.join(", ");
        return ' ' + result;
    }

    function renderMonsterResistance({ damage_resistances }) {
        const capitalizeArray = damage_resistances.map(element =>
            element.charAt(0).toUpperCase() + element.slice(1)
        );
        const result = capitalizeArray.join(", ");
        return ' ' + result;
    }

    function renderMonsterVulnerabilities({ damage_vulnerabilities }) {
        const capitalizeArray = damage_vulnerabilities.map(element =>
            element.charAt(0).toUpperCase() + element.slice(1)
        );
        const result = capitalizeArray.join(", ");
        return ' ' + result;
    }

    function renderMonsterConditionImmunities({ condition_immunities }) {
        if (condition_immunities.length === 1) {
            return ' ' + condition_immunities[0].name;
        } else if (condition_immunities.length > 1) {
            const names = condition_immunities.map((obj) => obj.name);
            return ' ' + names.join(', ');
        }
    }

    function renderMonsterSenses({ senses }) {
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, " ");
        }

        return ' ' + Object.entries(senses)
            .map(([key, value]) => capitalizeFirstLetter(key) + " " + value)
            .join(", ");
    }

    async function handleBookmark() {
        try {
            if (!bookmarked) {
                const body = {
                    index: monster.index,
                    name: monster.name,
                    type: "MONSTER"
                };
                await addBookmark(body, token);
                setBookmarked(true);
            }
            else {
                await removeBookmark(monster.index, token);
                setBookmarked(false);
            }
        } catch (error) {
            alert('Error on bookmark!');
        }
    }

    return (
        <MainContainer>
            {monster.image ? (<MonsterImage src={`https://www.dnd5eapi.co${monster.image}`} title={monster.name} alt={monster.name} />) : (<></>)}
            <MainDetailContainer>
                <GlobalStyle />
                <BlockContainer topTexture={TopTexture} paperTexture={PaperTexture}>
                    <div>
                        <StyledName>
                            {monster.name}
                            {!bookmarked ? (<ButtontBookmark title="Add Bookmark" onClick={handleBookmark}><BsFillBookmarkPlusFill /></ButtontBookmark>) : (<ButtontBookmark title="Remove Bookmark" onClick={handleBookmark}><BsFillBookmarkDashFill /></ButtontBookmark>)}
                        </StyledName>
                        <StyledMeta>{renderMonsterMeta(monster)}</StyledMeta>
                    </div>
                    <div>
                        <img alt="" src={HeaderBar} />
                    </div>
                    <StyledAtributtes>
                        <div>
                            <StyledAtributteLabel>Armor class</StyledAtributteLabel>
                            <StyledAtributteValues>
                                <span>
                                    {monster.armor_class[0].value}
                                </span>

                                <span>
                                    ({monster.armor_class[0].type} armor)
                                </span>
                            </StyledAtributteValues>
                        </div>
                        <div>
                            <StyledAtributteLabel>Hit Points</StyledAtributteLabel>
                            <StyledAtributteValues>
                                <span>
                                    {monster.hit_points}
                                </span>
                                <span>
                                    ({monster.hit_points_roll})
                                </span>
                            </StyledAtributteValues>
                        </div>
                        <div>
                            <StyledAtributteLabel>Speed</StyledAtributteLabel>
                            <StyledAtributteValues>
                                <span>
                                    {renderMonsterSpeed(monster)}
                                </span>
                            </StyledAtributteValues>
                        </div>
                    </StyledAtributtes>
                    <div>
                        <div>
                            <img alt="" src={HeaderBar} />
                        </div>
                        <StyledAbility>
                            <div>
                                <StyledAbilityHeading>STR</StyledAbilityHeading>
                                <div>
                                    <span>{monster.strength}</span>
                                    <span>({calculateAbilityModifier(monster.strength)})</span>
                                </div>
                            </div>
                            <div>
                                <StyledAbilityHeading>DEX</StyledAbilityHeading>
                                <div>
                                    <span>{monster.dexterity}</span>
                                    <span>({calculateAbilityModifier(monster.dexterity)})</span>
                                </div>
                            </div>
                            <div>
                                <StyledAbilityHeading>CON</StyledAbilityHeading>
                                <div>
                                    <span>{monster.constitution}</span>
                                    <span>({calculateAbilityModifier(monster.constitution)})</span>
                                </div>
                            </div>
                            <div>
                                <StyledAbilityHeading>INT</StyledAbilityHeading>
                                <div>
                                    <span>{monster.intelligence}</span>
                                    <span>({calculateAbilityModifier(monster.intelligence)})</span>
                                </div>
                            </div>
                            <div>
                                <StyledAbilityHeading>WIS</StyledAbilityHeading>
                                <div>
                                    <span>{monster.wisdom}</span>
                                    <span>({calculateAbilityModifier(monster.wisdom)})</span>
                                </div>
                            </div>
                            <div>
                                <StyledAbilityHeading>CHA</StyledAbilityHeading>
                                <div>
                                    <span>{monster.charisma}</span>
                                    <span>({calculateAbilityModifier(monster.charisma)})</span>
                                </div>
                            </div>
                        </StyledAbility>
                        <div>
                            <img alt="" src={HeaderBar} />
                        </div>
                    </div>
                    <div>
                        <div>
                            {renderMonsterSavingThrows(monster)}
                        </div>
                        <div>
                            {renderMonsterSkills(monster)}
                        </div>
                        {monster.damage_immunities.length > 0 ? (
                            <div>
                                <StyledTidbitLabel>Damage Immunities</StyledTidbitLabel>
                                <span>
                                    {renderMonsterDamageImmunities(monster)}
                                </span>
                            </div>) : (<></>)}
                        {monster.damage_resistances.length > 0 ? (
                            <div>
                                <StyledTidbitLabel>Damage Resistances</StyledTidbitLabel>
                                <span>
                                    {renderMonsterResistance(monster)}
                                </span>
                            </div>) : (<></>)}
                        {monster.damage_vulnerabilities.length > 0 ? (
                            <div>
                                <StyledTidbitLabel>Damage Vulnerabilities</StyledTidbitLabel>
                                <span>
                                    {renderMonsterVulnerabilities(monster)}
                                </span>
                            </div>) : (<></>)}
                        {monster.condition_immunities.length > 0 ? (
                            <div>
                                <StyledTidbitLabel>Condition Immunities</StyledTidbitLabel>
                                <span>
                                    {renderMonsterConditionImmunities(monster)}
                                </span>
                            </div>) : (<></>)}
                        <div>
                            <StyledTidbitLabel>Senses</StyledTidbitLabel>
                            <span>
                                {renderMonsterSenses(monster)}
                            </span>
                        </div>
                        {monster.languages ? (
                            <div>
                                <StyledTidbitLabel>Languages</StyledTidbitLabel>
                                <span> {monster.languages}</span>
                            </div>) : (<></>)}
                        <StyledTidbitContainer>
                            <div>
                                <StyledTidbitLabel>Challenge</StyledTidbitLabel>
                                <span> {monster.challenge_rating} ({monster.xp.toLocaleString('en-US')} XP)</span>
                            </div>
                            <StyledTidbitSpace />
                            <div>
                                <StyledTidbitLabel>Proficiency Bonus</StyledTidbitLabel >
                                <span> +{getProficiencyBonus(monster)}</span>
                            </div>
                        </StyledTidbitContainer>
                    </div>
                    <div>
                        <img alt="" src={HeaderBar} />
                    </div>
                    <div>
                        <div>
                            <div>
                                {monster.special_abilities.map((ability, index) => (
                                    <p key={index}><em><strong>{ability.name}{ability.usage && ability.usage.times ? `(${ability.usage.times}/Day)` : ''}.</strong></em> {ability.desc}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <StyledHeading>Actions</StyledHeading>
                            <div>
                                {monster.actions.map((action, index) => (
                                    <p key={index}><em><strong>{action.name}{action.usage && action.usage.min_value ? ` (Recharge ${action.usage.min_value}–6)` : ''}{action.usage && action.usage.times ? ` (${action.usage.times}/Day)` : ''}.</strong> {action.desc}</em></p>
                                ))}
                            </div>
                        </div>
                        {monster.legendary_actions.length > 0 ? (
                            <div>
                                <StyledHeading>Legendary Actions</StyledHeading>
                                <div>
                                    {monster.legendary_actions.map((action, index) => (
                                        <p key={index}><em><strong>{action.name}.</strong> {action.desc}</em></p>
                                    ))}
                                </div>
                            </div>) : (<></>)}
                    </div>
                </BlockContainer>
            </MainDetailContainer>
        </MainContainer>
    )
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MrsEavesSmallCaps';
    src: url(${MrsEavesSmallCapsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Scala Sans';
    src: url(${ScalaSansRegular}) format('truetype');
  }
`;

const MainContainer = styled.div`
    display: flex;
    @media (max-width: 580px) {
    display: block;
  }
`;

const MonsterImage = styled.img`
    border: 5px solid;
    border-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(200, 0, 0, 0.8) 100%); /* Modify the gradient colors as desired */
    border-image-slice: 1;
    background-color: transparent;
    border-radius: 0.25rem;
    margin-top: 20px;
    margin-left: 20px;
    width: 250px;
    height: 250px;
    @media (max-width: 580px) {
    margin-left: 18%;
  }
`;

const ButtontBookmark = styled.button`
    background-color: transparent;
    margin-top: 20px;
    margin-left: 20px;
    @media (max-width: 580px) {
    margin-left: 18%;
  }
`;

const MainDetailContainer = styled.div`
    width: 100%;
    padding-right: 25px;
    font-family: 'Scala Sans', sans-serif;
    font-size: 15px;
    margin-top: 20px;
    margin-left: 20px;
`;

const BlockContainer = styled.div`
  background-image: url(${props => props.topTexture}),url(${props => props.paperTexture});
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat,repeat;
    line-height: 1.4;
    & > * {
    margin-left: 10px;
  } 
`;

const StyledName = styled.div`
  color: #822000;
  font-weight: bold;
  font-size: 34px !important;
  font-family: 'MrsEavesSmallCaps', sans-serif !important;
`;

const StyledMeta = styled.div`
  font-style: italic;
  line-height: 1.1;
`;

const StyledAtributtes = styled.div`
    color: #822000;
    line-height: 1.2;
`;

const StyledAtributteLabel = styled.span`
    font-weight: bold;
`;

const StyledAtributteValues = styled.span`
    margin-left: 5px;

    & > span {
    margin-right: 5px;
  }
`;

const StyledAbilityHeading = styled.div`
    font-weight: bold;
`;

const StyledTidbitLabel = styled.span`
    font-weight: bold;
`;

const StyledTidbitContainer = styled.div`
    display: flex;
`;

const StyledTidbitSpace = styled.div`
    width: 40px;
    min-width: 10px;
`;

const StyledAbility = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
  color: #822000;
  line-height: 1.2;
`;

const StyledHeading = styled.div`
    border-bottom-color: rgb(216, 53, 0);
    color: rgb(255, 148, 113);
    font-family: 'Scala Sans', sans-serif;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.4;
    margin-top: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid #822000;
`;