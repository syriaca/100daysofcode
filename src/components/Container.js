import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    width: 90vw;

    @media (max-width: 480px) {
        width: 100vw;
    }
`;

const Container = props => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

Container.propTypes = {
    children: PropTypes.array.isRequired
};

export default Container;