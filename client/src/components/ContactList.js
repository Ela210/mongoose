import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contact";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.contactReducer.load);
  const list = useSelector((state) => state.contactReducer.ContactList);
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div>
 
       {load ? <p>loading</p> : list?.map((el) => <ContactCard list={el}/>)}
    </div>
  );
};

export default ContactList;
