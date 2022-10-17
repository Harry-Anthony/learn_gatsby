import styled from "styled-components";



export const RoundedButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 187px;
    height: 60px;
    color: #FF007A;
    border-radius: 32px;
    border: 1px solid #FF007A;
    cursor: pointer;
`

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 187px;
    height: 60px;
    color: white;
    /* Primary color */
    background: #FF007A;

    /* Shadow/xs */
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 32px;
    cursor: pointer;
`