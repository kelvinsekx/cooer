import styled from "styled-components";

export const StyledFooter = styled.div`
    padding-top: 2rem;
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        div>span{
            color: #0e7713;
            font-size:109%;
        }
        hr{
            border: 1px solid grey;
            width: 100%;
        }
    }
    footer>.c_n_a{
        font-size: 1.56rem;
        background-color: rgba(19, 64, 212, 0.98);
        border-radius: 5px;
        border: none;
        &:hover{
            background-color: rgba(19, 64, 212, 0.9);
        }
        &:active{
            background-color: rgba(19, 64, 212, 0.8);
        }
        a{
            color: white;
            text-decoration: none;
            display: inline-block;
            padding: 0.32em 0.87em;  
        }
    }
`;

export const StyledLogs = styled.div`
// border: 2px solid red;
background-color: white;
height: 20rem;
padding: 3rem;
border-radius: 5px;
box-shadow: 3px 5px 40px 3px rgba(71, 67, 67, 0.2);
form{
    display: flex;
    flex-direction: column;
    input, button {
        padding: 0.89rem 2rem;
        font-size: 1.6rem;
        border-radius: 0.31rem;
    }
    input {
        margin-top: 0.1em;
        margin-bottom: 0.9rem;
        border: 1px solid grey;
        color: grey;
        &::placeholder{
            font-size: 1.54rem;
        }
        &:hover{
            border: 1px solid #0e7713;
        }
        &:focus{
            outline: 0;
        }
    }
    button{
        color: white;
        background-color: #0e7713;
        border:none;
        cursor: pointer;
        &:hover{
            background-color: #108f16;
        }
        &:active{
            background-color: #0c420e;
        }
    }
}
`