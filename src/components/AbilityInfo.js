import React, { useEffect } from 'react';
import styled from 'styled-components';
import bg from '../assets/ATTACKINFOdark.png';

import {
    EMPTY,
    UTILITY
} from '../utils/constans'

const StyledAbilityWrapper = styled.div`
    top: ${({ alignment }) => alignment === 'characterSelect' ? '-240px' : '100%'};
    width: 300px;
    left: 0;
    display:${({ visible }) => visible ? "block" : "none"};
    position: absolute;
    font-size: .7rem;
    z-index: 5;
    ${'' /* background-image: url(${bg});
    background-size: 100% 100%; */}
    padding: 10px;
`;

const StyledAbility = styled.div`
   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;
    grid-template-areas:
        "."
        "."
        ".";
`;

const StyledP = styled.p`
    margin-bottom: 3px;
`;

const StyledName = styled(StyledP)`
    font-size: 2rem;
    color: #000000;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: flex-start;
    justify-content: ${({ justify }) => justify === "right" ? "flex-end" : justify === "space-around" ? "space-around" : "flex-start"};
    align-items: center;
`;

const StyledColumn = styled.div`
    display: block;
    
`;

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". .";
    align-items: center;
`;

const StyledContainer = styled.div`
    display: block;
`;

const StyledImgWrapper = styled.div`
    width: 20px;
    margin-right: 10px;
`;

const StyledEffectIco = styled.img`
    width: 100%;
   
`;



const AbilityInfo = ({ alignment, abilityInfo, visible, setHoverIndex }) => {

    useEffect(() => {
        const handleClick = () => setHoverIndex(null)
        visible &&
            document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);


    return (
        <StyledAbilityWrapper alignment={alignment} visible={visible}>
            <StyledAbility>
                <StyledHeader>
                    <StyledName>{abilityInfo.name}</StyledName>
                    
                </StyledHeader>
               
            </StyledAbility>
        </StyledAbilityWrapper>
    );
};

export default AbilityInfo;