import React from "react";
import Gist from "./gist";
import styled from "styled-components";

const Gists = ({gists}) => 
<Styles>
    {gists.map((gist, i)=> {
        return <Gist 
        gist={gist} 
        key={i} />
    })}
</Styles>;

const Styles = styled.div`
padding-top: 2rem;
`

export default Gists;