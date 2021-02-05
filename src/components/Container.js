import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    width: 90vw;
`;

const Container = props => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

Container.propTypes = {
    children: PropTypes.element.isRequired
};

export default Container;