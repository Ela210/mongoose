import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "./../redux/actions/contact";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: "", email: "", age: "" });
  const handlChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handlAdd=()=>{
    dispatch(addContact(contact));
    navigate("/")
    
  }
  return (
    <div>
      <h1>Add</h1>
      <label htmlFor="name">name</label>
      <input
        type="text"
        placeholder="enter your name here"
        name="name"
        onChange={handlChange}
      />
      <label htmlFor="name">email</label>
      <input
        type="text"
        placeholder="enter your email here"
        name="email"
        onChange={handlChange}
      />
      <label htmlFor="name">age</label>
      <input
        type="text"
        placeholder="enter your age here"
        name="age"
        onChange={handlChange}
      />
      <button onClick={handlAdd }>add</button>
    </div>
  );
};

export default Add;
