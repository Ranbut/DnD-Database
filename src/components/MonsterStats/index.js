import styled, { createGlobalStyle } from "styled-components"
import MrsEavesSmallCapsRegular from "../../assets/fonts/MrsEavesSmallCapsRegular.ttf";
import ScalaSansRegular from "../../assets/fonts/ScalaSans/ScalaSans-Regular.ttf";
import TopTexture from "../../assets/images/stat-block-top-texture.png"
import PaperTexture from "../../assets/images/paper-texture.png"
import HeaderBar from "../../assets/images/stat-block-header-bar.svg"

export default function MonsterStats({ monster }) {

    console.log(monster);

    function renderMonsterMeta({ size, type, alignment }) {
        const textType = type.charAt(0).toUpperCase() + type.slice(1);
        const textAlignment = alignment.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });

        return `${size}  ${textType}, ${textAlignment}`
    }

    function renderMonsterSpeed({ speed }) {
        return speed.walk + ", " + Object.entries(speed)
            .filter(([key]) => key !== "walk")
            .map(([key, value]) => key + " " + value)
            .join(", ");
    }

    function calculateAbilityModifier(abilityScore) { return Math.floor((abilityScore - 10) / 2); };

    function renderMonsterSavingThrows({ proficiencies }) {
        const savingThrows = proficiencies.filter(item => item.proficiency.name.includes('Saving Throw'));

        const savingThrowsString = savingThrows.map(item => `${item.proficiency.name.split(': ')[1]} +${item.value}`).join(', ');

        return savingThrowsString;
    }

    function renderMonsterSkills({ proficiencies }) {
        const skills = proficiencies.filter(item => item.proficiency.name.includes('Skill'));

        const skillsString = skills.map(item => `${item.proficiency.name.split(': ')[1]} +${item.value}`).join(', ');

        return skillsString;
    }

    function renderMonsterImmunities({ damage_immunities }) {
        const capitalizeArray = damage_immunities.map(element =>
            element.charAt(0).toUpperCase() + element.slice(1)
        );
        const result = capitalizeArray.join(", ");
        return ' '+ result;
    }

    function renderMonsterSenses({ senses }) {
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, " ");
        }

        return ' ' + Object.entries(senses)
            .map(([key, value]) => capitalizeFirstLetter(key) + " " + value)
            .join(", ");
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <BlockContainer topTexture={TopTexture} paperTexture={PaperTexture}>
                <div className="mon-stat-block__header">
                    <StyledName className="mon-stat-block__name">
                        <a className="mon-stat-block__name-link" href="/monsters/16764-adult-black-dragon">
                            {monster.name}
                        </a>
                    </StyledName>

                    <StyledMeta>{renderMonsterMeta(monster)}</StyledMeta>
                </div>
                <div className="mon-stat-block__separator">
                    <img className="mon-stat-block__separator-img" alt="" src={HeaderBar} />
                </div>
                <StyledAtributtes>
                    <div className="mon-stat-block__attribute">
                        <StyledAtributteLabel>Armor class</StyledAtributteLabel>
                        <StyledAtributteValues>
                            <span className="mon-stat-block__attribute-data-value">
                                {monster.armor_class[0].value}
                            </span>

                            <span className="mon-stat-block__attribute-data-extra">
                                ({monster.armor_class[0].type} armor)
                            </span>
                        </StyledAtributteValues>
                    </div>
                    <div className="mon-stat-block__attribute">
                        <StyledAtributteLabel>Hit Points</StyledAtributteLabel>
                        <StyledAtributteValues>
                            <span className="mon-stat-block__attribute-data-value">
                                {monster.hit_points}
                            </span>
                            <span className="mon-stat-block__attribute-data-extra">
                                ({monster.hit_points_roll})
                            </span>
                        </StyledAtributteValues>
                    </div>
                    <div className="mon-stat-block__attribute">
                        <StyledAtributteLabel>Speed</StyledAtributteLabel>
                        <StyledAtributteValues>
                            <span className="mon-stat-block__attribute-data-value">
                                {renderMonsterSpeed(monster)}
                            </span>
                        </StyledAtributteValues>
                    </div>
                </StyledAtributtes>
                <div className="mon-stat-block__stat-block">
                    <div className="mon-stat-block__separator">
                        <img className="mon-stat-block__separator-img" alt="" src={HeaderBar} />
                    </div>
                    <StyledAbility>
                        <div className="ability-block__stat ability-block__stat--str">
                            <StyledAbilityHeading>STR</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.strength}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.strength)})</span>
                            </div>
                        </div>
                        <div className="ability-block__stat ability-block__stat--dex">
                            <StyledAbilityHeading>DEX</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.dexterity}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.dexterity)})</span>
                            </div>
                        </div>
                        <div className="ability-block__stat ability-block__stat--con">
                            <StyledAbilityHeading>CON</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.constitution}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.constitution)})</span>
                            </div>
                        </div>
                        <div className="ability-block__stat ability-block__stat--int">
                            <StyledAbilityHeading>INT</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.intelligence}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.intelligence)})</span>
                            </div>
                        </div>
                        <div className="ability-block__stat ability-block__stat--wis">
                            <StyledAbilityHeading>WIS</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.wisdom}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.wisdom)})</span>
                            </div>
                        </div>
                        <div className="ability-block__stat ability-block__stat--cha">
                            <StyledAbilityHeading>CHA</StyledAbilityHeading>
                            <div className="ability-block__data">
                                <span className="ability-block__score">{monster.charisma}</span>
                                <span className="ability-block__modifier">(+{calculateAbilityModifier(monster.charisma)})</span>
                            </div>
                        </div>
                    </StyledAbility>
                    <div className="mon-stat-block__separator">
                        <img className="mon-stat-block__separator-img" alt="" src={HeaderBar} />
                    </div>
                </div>
                <div className="mon-stat-block__tidbits">

                    <div className="mon-stat-block__tidbit">
                        <StyledTidbitLabel>Saving Throws</StyledTidbitLabel>
                        <span className="mon-stat-block__tidbit-data"> {renderMonsterSavingThrows(monster)}</span>
                    </div>

                    <div className="mon-stat-block__tidbit">
                        <StyledTidbitLabel>Skills</StyledTidbitLabel>
                        <span className="mon-stat-block__tidbit-data"> {renderMonsterSkills(monster)}</span>
                    </div>
                    {monster.damage_immunities.length > 0 ? (
                        <div className="mon-stat-block__tidbit">
                            <StyledTidbitLabel>Damage Immunities</StyledTidbitLabel>
                            <span className="mon-stat-block__tidbit-data">
                                {renderMonsterImmunities(monster)}
                            </span>
                        </div>) : (<></>)}
                    <div className="mon-stat-block__tidbit">
                        <StyledTidbitLabel>Senses</StyledTidbitLabel>
                        <span className="mon-stat-block__tidbit-data">
                            {renderMonsterSenses(monster)}
                        </span>
                    </div>

                    <div className="mon-stat-block__tidbit">
                        <StyledTidbitLabel>Languages</StyledTidbitLabel>
                        <span className="mon-stat-block__tidbit-data"> {monster.languages}</span>
                    </div>

                    <div className="mon-stat-block__tidbit-container">
                        <div className="mon-stat-block__tidbit">
                            <StyledTidbitLabel>Challenge</StyledTidbitLabel>
                            <span className="mon-stat-block__tidbit-data"> {monster.challenge_rating} ({monster.xp.toLocaleString('en-US')} XP)</span>
                        </div>
                        <div className="mon-stat-block__tidbit-spacer"></div>
                        <div className="mon-stat-block__tidbit">
                            <StyledTidbitLabel>Proficiency Bonus</StyledTidbitLabel >
                            <span className="mon-stat-block__tidbit-data">
                                +5
                            </span>
                        </div>

                    </div>

                </div>
                <div className="mon-stat-block__separator">
                    <img className="mon-stat-block__separator-img" alt="" src={HeaderBar} />
                </div>
                <div className="mon-stat-block__description-blocks">

                    <div className="mon-stat-block__description-block">
                        <div className="mon-stat-block__description-block-content">
                            {monster.special_abilities.map((ability, index) => (
                                <p key={index}><em><strong>{ability.name} {ability.usage && ability.usage.times ? `(${ability.usage.times}/Day)` : ''}.</strong></em> {ability.desc}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mon-stat-block__description-block">
                        <div className="mon-stat-block__description-block-heading">Actions</div>
                        <div className="mon-stat-block__description-block-content">
                        {monster.actions.map((action, index) => (
                            <p key={index}><em><strong>{action.name}{action.usage && action.usage.min_value ? ` (Recharge ${action.usage.min_value}–6)` : ''}{action.usage && action.usage.times ? ` (${action.usage.times}/Day)` : ''}.</strong> {action.desc}</em></p>
                            ))}
                        </div>
                    </div>
                    <div className="mon-stat-block__description-block">
                        <div className="mon-stat-block__description-block-heading">Legendary Actions</div>
                        <div className="mon-stat-block__description-block-content">
                        {monster.legendary_actions.map((action, index) => (
                            <p key={index}><em><strong>{action.name}.</strong> {action.desc}</em></p>
                            ))}
                        </div>
                    </div>

                </div>
            </BlockContainer>
        </MainContainer>
    )
}

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
    width: calc(100% - 370px);
    font-family: 'Scala Sans', sans-serif;
    font-size: 15px;
`

const BlockContainer = styled.div`
  background-image: url(${props => props.topTexture}),url(${props => props.paperTexture});
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat,repeat;
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
    margin: 5px 0;
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

const StyledAbility = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
  color: #822000;
  line-height: 1.2;
`;