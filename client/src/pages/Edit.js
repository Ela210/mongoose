import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editContact, getOne } from "../redux/actions/contact";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [contact, setContact] = useState({ name: "", email: "", age: "" });
  const handlChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  console.log(params.id);
  useEffect(() => {
    dispatch(getOne(params.id));
  }, []);
  const load = useSelector((state) => state.contactReducer.load);
  const contactToGet = useSelector(
    (state) => state.contactReducer.contactToGet
  );
  const handlEdit = () => {
    dispatch(editContact(params.id.contact));
    navigate("/");
  };
  return (
    <div>
      <h1>Edit</h1>
      <h1>profile</h1>
      {load ? (
        <p>loading</p>
      ) : (
        <div>
          <h1>name:{contactToGet.name}</h1>
          <h1>email:{contactToGet.email}</h1>
          <h1>age:{contactToGet.age}</h1>
        </div>
      )}

      <label htmlFor="name">name</label>
      <input
        type="text"
        placeholder={`${contactToGet.name}`}
        name="name"
        onChange={handlChange}
      />
      <label htmlFor="name">email</label>
      <input
        type="text"
        placeholder={`${contactToGet.email}`}
        name="email"
        onChange={handlChange}
      />
      <label htmlFor="name">age</label>
      <input
        type="text"
        placeholder={`${contactToGet.age}`}
        name="age"
        onChange={handlChange}
      />
      <button onClick={handlEdit}>Edit</button>
    </div>
  );
};

export default Edit;
