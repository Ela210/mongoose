import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/contact";

const ContactCard = ({list}) => {
    const dispatch= useDispatch()
  return (
    <div>
      <h1>name:{list.name}</h1>
      <h1>email:{list.email}</h1>
      <h1>age:{list.age}</h1>
      <button onClick={()=>dispatch(deleteContact(list._id))}>delete</button>
      <Link to ={`/edit/${list._id}`}><button>edit</button></Link>

      
    </div>
  );
};

export default ContactCard;
