import React from 'react';

const CHATS = ({chats})=> {
    console.log(chats)
    return <p>{chats.length}</p>
    // if (chats.length < 1 || chats == undefined) {
    //     return <p>start up some discus</p>
    // }
    // return (
    //     <div>
    //         {chats.map(chat => <div>{chat.text}</div>)}
    //     </div>
    // )
};

export default CHATS;