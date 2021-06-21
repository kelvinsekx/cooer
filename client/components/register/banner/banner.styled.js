import styled from "styled-components";

export let styledBanner = styled.div`
display: flex;
width: 44.23%;
padding-left: 6em;
div>div#brand{
    font-size: 3.4501rem;
    font-weight: 789.432;
    color: #0e7713;
    padding-bottom: 2.765rem;
}
div>div:nth-child(2){
    font-size:1.567rem;
    div{
        min-height: 5rem;
    }
    div:nth-child(3){
        height:10rem;
        // border: 2px solid red;
        display:flex;
        flex-direction: column-reverse;
    }
}
`