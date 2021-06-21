import React from "react";
import styled from "styled-components"

function printerProcess (text) {
    let PATTERN, TM;
    PATTERN = /^@(\w+)/g;
    TM = PATTERN.exec(text);
    if (TM) {
        const NEWTEXT = text.replaceAll(PATTERN, `<a href="/profile/${TM[1]}">${TM[0]}</a>`)
        return NEWTEXT;
    }else {
        return text;
    }
}
const PRINTER = ({text}) => {
    text = printerProcess(text)
    return (
        <Styles>
            <div 
                dangerouslySetInnerHTML={{__html: text}} 
            />
        </Styles>
    )
};

const Styles = styled.div`
    a {
        text-decoration: none;
        color: rgb(15, 116, 32);
        font-size: 97%;
    }
`
export default PRINTER;