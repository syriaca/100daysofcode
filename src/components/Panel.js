import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledPanel = styled.div`
    background-image: ${props => `url(${props.url})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: 50px;
    height: 80vh;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: flex;
`;

const StyledPanelTitle = styled.h3`

`;

const Panel = ({ key, url, heading }) => {
    console.log(url);
    return (
        <StyledPanel key={key} url={url}>
            <StyledPanelTitle>
                {heading}
            </StyledPanelTitle>        
        </StyledPanel>
    );
};

Panel.propTypes = {
    key: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
};

export default Panel;