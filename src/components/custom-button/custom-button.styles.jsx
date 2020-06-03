import styled, { css } from 'styled-components';


const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
    if (isGoogleSignIn) {
        return GoogleButton;
    } else if (inverted) {
        return InvertedButton;
    }
    return DefaultButton;
}

export const CustomButtonContainer = styled.div`
    margin-top: 20px;
`

export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;  
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;    
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`

const DefaultButton = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const GoogleButton = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const InvertedButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

