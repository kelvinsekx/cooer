import styled, {css} from "styled-components";

export const StyledRegisterForm = styled.div`
box-shadow: 2px 4px 5px 4px rgba(150, 140, 140, 0.323);
width: 36%;
background-color: hsla(0, 0%, 100%, 0.87);
border-radius: 5px;
padding: 0.6rem 0.0001rem;
display: flex;
flex-direction: column;
align-items: center;
a{
    display: inline-block;
    color: red;
    border: 1px solid red;
    text-decoration: none;
    padding: 0.2em 2em;
    margin-top: 0.6em;
}
div{
    background-color: white;
    form {
        fieldset{
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 0;
            legend{
                color:#0e7713;
                font-size: 130%;
            }
            div{
                padding: 0.09em 0;
            }
            button{
                margin: 2.345rem 0px;
                font-size: 1.5rem;
                color: white;
                background-color: #0e7713;
                border: 0px;
                border-radius: 5px;
                padding: 0.2em 1em;
                padding-bottom: 0.34em;
            }
        }
    }
}
`

export let StyledInput = styled.div`
width: ${({w})=> w + "rem"};
border-radius: 5px;
margin-right: 1em;
div {
    label {
        div{
            font-size: 60%;
            margin: 0px; 
            padding: 0px;
            color: #111;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in;
            transition-delay: 0.7s;
            ${
                (props) => props.tr && css`
                opacity: 1; 
                visibility: visible;               
                `
            }
        }
        input{
            padding: 0.99em 0 0.8em 0.7rem;
            width: 100%;
            border-radius: 5px;
            border: none;
            font-size: 0.77rem;
            background-color: rgba(150, 140, 140, 0.123);
            &::placeholder{
                color: rgb(7, 2, 2);
                font-weight: 550;
                font-size: 1rem;
            }
            &:focus{
                outline: 0;
            }
        }
    }
}
`