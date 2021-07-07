import React from "react"
import EDITABLE from "./editable"
import { BsBriefcaseFill, BsPersonCheck, BsPersonFill, BsPhone } from "react-icons/bs";
import styled from "styled-components";


const editInfo =  [
        {
            icon: BsBriefcaseFill,
            name: 'bio',
            n: "bio",
            bio: 'bio'
        },
        {
            icon: BsPersonFill,
            name: 'Name',
            n:  "name",
            bio: 'name'
        },
        {
            icon: BsPersonCheck,
            name: 'Anonymous Name',
            n: "anonymousname",
            bio: 'anonymousname'
        },
        {
            icon: BsPhone,
            name: 'Telephone',
            n: "telephone",
            bio:'telephone'
        }
    ]

const EDITPROFILE_COMPONENT = ({handleChange, user, handleSubmit, fileHandler})=> 
<Styles>
    <form onSubmit={(e)=> e.preventDefault()}>
        <div>Profile Image</div>
        <label htmlFor="icon-button-file">
        <input 
            accept="image/*" 
            type="file"       
            onChange={fileHandler}       
            style={{display:'none'}}       
            id="icon-button-file" 
        />
            <span>Upload Photo</span>
            <small style={{color: 'rgb(27, 214, 10)'}}>    
                {user.photo ? user.photo.name : ''}
            </small>
        </label>
        {editInfo.map((e, i) => <EDITABLE 
            key={i}
            Icon={e.icon}
            name={e.name}
            n= {e.n}
            bio={user[e.bio]}
            handleChange={handleChange}
        />)}
        <button onClick={handleSubmit}>Save</button>
    </form>
</Styles>;

const Styles = styled.div`
form{
 button {
  border: 1px solid rgb(7, 454,50);
  color: white;
  width: 6rem;
  font-size: 1.2rem;
  background-color: rgb(7, 454, 50); 
 }
}
`
export default EDITPROFILE_COMPONENT;
