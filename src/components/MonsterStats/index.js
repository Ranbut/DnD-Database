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

    function renderMonsterImmunities({ damage_immunities }) {
        const capitalizeArray = damage_immunities.map(element =>
            element.charAt(0).toUpperCase() + element.slice(1)
          );
          const result = capitalizeArray.join(", ");
          return result;
    }

    function renderMonsterSenses({ senses }) {
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, " ");
          }

        return Object.entries(senses)
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
                                19
                            </span>

                            <span className="mon-stat-block__attribute-data-extra">
                                (natural armor)
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
                        <span className="mon-stat-block__tidbit-data">
                            DEX +7, CON +10, WIS +6, CHA +8
                        </span>
                    </div>

                    <div className="mon-stat-block__tidbit">
                        <StyledTidbitLabel>Skills</StyledTidbitLabel>
                        <span className="mon-stat-block__tidbit-data">
                            <a className="tooltip-hover skill-tooltip" href="/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a> +11, <a className="tooltip-hover skill-tooltip" href="/compendium/rules/basic-rules/using-ability-scores#Stealth" data-tooltip-href="//www.dndbeyond.com/skills/5-tooltip?disable-webm=1&amp;disable-webm=1">Stealth</a> +7
                        </span>
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
                        <span className="mon-stat-block__tidbit-data">
                            {monster.languages}
                        </span>
                    </div>

                    <div className="mon-stat-block__tidbit-container">
                        <div className="mon-stat-block__tidbit">
                            <StyledTidbitLabel>Challenge</StyledTidbitLabel>
                            <span className="mon-stat-block__tidbit-data">
                                {monster.challenge_rating} ({monster.xp.toLocaleString('en-US')} XP)
                            </span>
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
                            <p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>
                            <p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>
                        </div>
                    </div>

                    <div className="mon-stat-block__description-block">
                        <div className="mon-stat-block__description-block-heading">Actions</div>
                        <div className="mon-stat-block__description-block-content">
                            <p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>
                            <p><em><strong>Bite.</strong> Melee Weapon Attack:</em> <span data-dicenotation="1d20+11" data-rolltype="to hit" data-rollaction="Bite">+11</span> to hit, reach 10 ft., one target. <em>Hit:</em> 17 <span data-dicenotation="2d10+6" data-rolltype="damage" data-rollaction="Bite" data-rolldamagetype="piercing">(2d10 + 6)</span> piercing damage plus 4 <span data-dicenotation="1d8" data-rolltype="damage" data-rollaction="Bite" data-rolldamagetype="acid">(1d8)</span> acid damage.</p>
                            <p><em><strong>Claw.</strong> Melee Weapon Attack:</em> <span data-dicenotation="1d20+11" data-rolltype="to hit" data-rollaction="Claw">+11</span> to hit, reach 5 ft., one target. <em>Hit:</em> 13 <span data-dicenotation="2d6+6" data-rolltype="damage" data-rollaction="Claw" data-rolldamagetype="slashing">(2d6 + 6)</span> slashing damage.</p>
                            <p><em><strong>Tail.</strong> Melee Weapon Attack:</em> <span data-dicenotation="1d20+11" data-rolltype="to hit" data-rollaction="Tail">+11</span> to hit, reach 15 ft., one target. <em>Hit:</em> 15 <span data-dicenotation="2d8+6" data-rolltype="damage" data-rollaction="Tail" data-rolldamagetype="bludgeoning">(2d8 + 6)</span> bludgeoning damage.</p>
                            <p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become <a className="tooltip-hover condition-tooltip" href="/compendium/rules/basic-rules/appendix-a-conditions#Frightened" data-tooltip-href="//www.dndbeyond.com/conditions/5-tooltip?disable-webm=1&amp;disable-webm=1">frightened</a> for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>
                            <p><em><strong>Acid Breath <span data-dicenotation="1d6" data-rolltype="recharge" data-rollaction="Acid Breath">(Recharge 5–6)</span>.</strong></em> The dragon exhales acid in a 60-­foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 <span data-dicenotation="12d8" data-rolltype="damage" data-rollaction="Acid Breath" data-rolldamagetype="acid">(12d8)</span> acid damage on a failed save, or half as much damage on a successful one.</p>
                        </div>
                    </div>

                    <div className="mon-stat-block__description-block">
                        <div className="mon-stat-block__description-block-heading">Legendary Actions</div>
                        <div className="mon-stat-block__description-block-content">
                            <p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p>
                            <p><strong>Detect.</strong> The dragon makes a Wisdom (<a className="tooltip-hover skill-tooltip" href="/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check.</p>
                            <p><strong>Tail Attack.</strong> The dragon makes a tail attack.</p>
                            <p><strong>Wing Attack (Costs 2 Actions).</strong> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 <span data-dicenotation="2d6+6" data-rolltype="damage" data-rollaction="Wing Attack" data-rolldamagetype="bludgeoning">(2d6 + 6)</span> bludgeoning damage and be knocked <a className="tooltip-hover condition-tooltip" href="/compendium/rules/basic-rules/appendix-a-conditions#Prone" data-tooltip-href="//www.dndbeyond.com/conditions/12-tooltip?disable-webm=1&amp;disable-webm=1">prone</a>. The dragon can then fly up to half its flying speed.</p>
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