import React from "react";
import auth from "./../../helpers/auth.helper"
import {LIST} from "./../../apis/user/api-user"

import {Link} from "react-router-dom"
import styled from "styled-components"

import {useEffect, useState} from "react"
function followTheseAwesomeGuyz () {
    const [list, setList] = useState([])

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        LIST().then(data=> {
            if(data.error){
                console.log(data.error)
            }else {
		   const {data: {allPeople}} = data
                   setList(allPeople)
            }
        })
        
        return function cleanup(){
            abortController.abort()
        }
    }, [])

    return <Styles>
        <div id="pleaseDo">
            <h1>Hey {auth.isAuthenticated().user.username},</h1> 
            <p>Seems you're  new to cooer, here are some awesome guyz to share this world with.</p>
        </div>
        <StyledToFollow>
            <div>
                {list.map((each, index)=><div className="lilintro" key={index}>
                        <div className="dp"><img src={`${each.photo.data}?${new Date().getTime()}`}/></div>
                        <div>
                            <Link to={`/profile/${each.username}`}>
                            <p className="un">{each.username}</p>
                            <p className='bio'>{each.bio}</p>
                            </Link>
                        </div>
                    </div>)}
            </div>
        </StyledToFollow>
    </Styles>
}

const Styles = styled.div`
padding-top: 2rem;
#pleaseDo {
    h1{
        font-size: 88%;
         color: rgb(15, 116, 32);
    } 
    p{
        font-size: 78%;
    }      
}
@media (min-width: 700px) {
    #pleaseDo {
        h1{
            font-size: 98%;
        }
    }
}
`

const StyledToFollow = styled.div`
//border: 6px solid red;
border: 1px solid rgba(0,0,0, 0.34);
width: 70%;
margin: 1em 0 0 auto;
min-height: 100vh;
    @media (min-width: 700px) {
        width: 80%;
        border: 1,4px solid rgba(0,0,0, 0.34);
        #pleaseDo {
            h1{
                font-size: 78%;
                color: red;
            }
        }
    }
`

export default followTheseAwesomeGuyz;