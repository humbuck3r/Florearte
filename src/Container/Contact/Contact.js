import React, { useState } from 'react';
import {db} from '../../Firebaseconfig';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    db.collection("contacts")
    .add({
      name:name,
      email: email,
      message:message,
    })
    .then(() => {
      alert("Mensaje enviado");
    })
    .catch((error => {
      alert(error.message);
    })
    )};
    

  return (
    <form className="form" onSubmit={handleSubmit}>   
 <ul>
  <li>
    <label for="name">Nombre:</label>
    <input 
    type="text" 
    id="name" 
    name="user_name" 
    placeholder="nombre" 
    value={name} onChange={(e) => setName(e.target.value)}/>
  </li>
  <li>
    <label for="mail">Correo electrónico:</label>
    <input
      type="email"
      id="mail"
      name="user_mail" 
      placeholder="mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
  </li>
  <li>
    <label for="msg">Mensaje:</label>
    <textarea id="msg" name="user_message" placeholder="deja tu consulta" value={message} onChange={(e) => setMessage(e.target.value)}/>
  </li>
  <button type="submit"> Enviar consulta</button>
 </ul>
</form>);
}



export default Contact;