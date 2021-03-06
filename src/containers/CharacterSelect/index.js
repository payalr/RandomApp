import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import bg from '../../assets/STATSlight.png';
import Button from '../../components/Button';
import predefinedCharacters from './predefinedCharacters';
import { useHistory } from "react-router";

//actions
import {
    playerSetData,
    enemySetData,
} from "../../store/actions";

import predefinedEnemies from '../CharacterSelect/predefinedEnemies';
import { randomFromArray } from '../../utils/functions/randomFromArray';
import AttacksList from './AttacksList.js';


const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.modalBackground};
    z-index: 10;
    overflow: auto;
    font-size: 1rem;
`;

const StyledStatsWrapper = styled.div`
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: auto;
`;

const StyledStatsTab = styled.div`
    width: 300px;
    height: 500px;
    background-image: url(${bg});
    background-size: 100% 100%;
    padding: 66px 30px 66px 30px;
`;

const StyledStatsContainer = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 10px;
`;

const StyledStatsRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledStatsRowCenter = styled(StyledStatsRow)`
    justify-content: center;
`;

const StyledStatsTitle = styled.span`
    text-align: center;
    font-size: 1.1em;
    width: 100%;
    color: ${({ theme }) => theme.colors.fontDark};
    font-weight: bold;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.colors.fontDark};
    font-weight: bold;
    margin-left: 20px;
    position: relative;
`;

const StyledSpanWithIco = styled(StyledSpan)`
    &:before{
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        left: -23px;
        top: 3px;
        background-image: url(${({ ico }) => ico});
        background-size: contain;
    }
`;

const StyledAvatarImg = styled.img`
    max-height: 150px;
    margin: 0 auto;
`;

const ConnectedCharacterSelect = ({ playerSetData, enemySetData }) => {

    let history = useHistory()

    const charactersArr = predefinedCharacters;
    const [characterIndex, setCharacterIndex] = useState(0)

    const {
        name,
        gender,
        className,
        avatar,
        lvl,
        maxHp,
        maxAp,
        attributes,
        abilities,
        stats,
        defense, } = charactersArr[characterIndex];


    const handlePlay = () => {
        playerSetData(charactersArr[characterIndex])
        enemySetData(randomFromArray(predefinedEnemies))
        history.push("/battle")
    }

    const handleNext = () => {
        if (characterIndex === charactersArr.length - 1) {
            setCharacterIndex(0)
        } else {
            setCharacterIndex(characterIndex + 1)
        }
    }

    const handlePrev = () => {
        if (characterIndex === 0) {
            setCharacterIndex(charactersArr.length - 1)
        } else {
            setCharacterIndex(characterIndex - 1)
        }
    }

    return (
        <StyledWrapper>
            <StyledStatsWrapper>
                <StyledStatsTab>
                    <StyledStatsContainer>
                        <StyledStatsRow>
                            <StyledStatsTitle>Choose your character:</StyledStatsTitle>
                        </StyledStatsRow>
                        <StyledStatsRow>
                            <Button size='small' onClick={() => handlePrev()}>prev</Button>
                            <Button size='small' onClick={() => handleNext()}>next</Button>
                        </StyledStatsRow>
                    </StyledStatsContainer>
                    <StyledStatsContainer>
                        <StyledStatsRow>
                            <StyledAvatarImg src={require(`../../assets/avatars/${avatar}.png`)} />
                        </StyledStatsRow>
                    </StyledStatsContainer>
                    <StyledStatsContainer>
                        <StyledStatsRow>
                            <StyledSpanWithIco ico={require('../../assets/stats/NAME.png')}>name:</StyledSpanWithIco>
                            <StyledSpan>{name}</StyledSpan>
                        </StyledStatsRow>
                        <StyledStatsRow>
                            <StyledSpanWithIco ico={require('../../assets/stats/GENDER.png')}>gender:</StyledSpanWithIco>
                            <StyledSpan>{gender}</StyledSpan>
                        </StyledStatsRow>
                        <StyledStatsRow>
                            <StyledSpanWithIco ico={require('../../assets/stats/CLASS.png')}>class:</StyledSpanWithIco>
                            <StyledSpan>{className}</StyledSpan>
                        </StyledStatsRow>
                    </StyledStatsContainer>
                    <StyledStatsContainer>
                        <StyledStatsRowCenter>
                            <Button onClick={() => handlePlay()}>play</Button>
                        </StyledStatsRowCenter>
                    </StyledStatsContainer>
                </StyledStatsTab>
            </StyledStatsWrapper>
        </StyledWrapper>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        playerSetData: state => dispatch(playerSetData(state)),
        enemySetData: state => dispatch(enemySetData(state)),
    };
}

const CharacterSelect = connect(
    null,
    mapDispatchToProps,
)(ConnectedCharacterSelect);

export default CharacterSelect;