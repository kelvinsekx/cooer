import React, {useState} from "react";
import styled from "styled-components"
import Gists from "../components/gists";
import TextArea from "./../components/others/cooerTextArea"
import auth from "../helpers/auth.helper";

import {Link} from "react-router-dom"
import PsuedoAds from "./../components/others/PsuedoAds"

import {LISTNEWFEEDS} from "../apis/gist/api-gist"
import {LIST} from "../apis/user/api-user"

const MUHA = (props) =>{
    const home = window.APP && window.APP.home
    const [gists, setGists] = useState( []);
    const [members, setMembers] = useState([])

    const jwt = auth.isAuthenticated();

    React.useEffect(()=> {
        const abortController = new AbortController();
        const signal = abortController.signal;
        

        LISTNEWFEEDS({userId: jwt.user.username}, 
            {token: jwt.token}, signal).then(data=> {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setGists(data)
                }
        });

        LIST().then(data=> {
            if(data.error){
                console.log(data.error)
            }else {
                //console.log(data)
                setMembers(data)
            }
        })

        return function cleanup(){
            abortController.abort()
        }
    }, [])

    const addGist = (gist) => {
        const updatedGists = [...gists];
        updatedGists.unshift(gist);
        setGists(updatedGists);
    }


    return (
        <Styles>
        <div className="muha">
            <div className="feed">
                <div>
                    <TextArea 
                        addGist={addGist}
                        jwt = {jwt} />
                </div>
                <Gists gists={gists} />
            </div>
            <div>
                <PsuedoAds 
                    header={`Suggested Followers`}
                    body={members.length < 1 ? "": members.map((member, index)=> {
                        return <div className="lilintro" key={index}>
                        <div className="dp"><img src={`/_v1/api/users/u/photo/${member.username}?${new Date().getTime()}`}/></div>
                        <div>
                            <Link to={`/profile/${member.username}`}>
                            <p className="un">{member.username}</p>
                            <p className='bio'>{member.bio}</p>
                            </Link>
                        </div>
                    </div>
                    })}
                />
            </div>
        </div>
        </Styles>
    )
}

const Styles = styled.div`
div.muha{
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    div.feed{
        border-right: 0.10rem solid rgba(0, 0, 0, 0.2);
    }
    .lilintro{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 0.1em;
        padding: 0.5rem 0;
        .un{
            font-size: 85%;
        }
        .bio{
            color: #666;
            font-size:70%;
        }
        .dp {
            //border: 1px solid red;
            width: 3rem;
            height: 3rem;
            border-radius: 100%;
            overflow: hidden;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
}
@media (max-width: 700px) {
    div.muha{
        grid-template-columns: 1fr;
        div.feed{
            height:94vh;
            overflow-y: scroll;
        }
    }
}
`
export default MUHA;