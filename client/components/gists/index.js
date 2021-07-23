import React from "react";
import Gist from "./gist";
import styled from "styled-components";

const Gists = ({gists}) => {
    console.log(gists)
    return <Styles>
    {gists.map((gist, i)=> <Gist 
        payload={gist} 
        key={i} />)}
</Styles>
}

const Styles = styled.div`
padding-top: 2rem;
`

export default Gists;