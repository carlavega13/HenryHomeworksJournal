import React from "react";
import { useDispatch } from 'react-redux'
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  const[form,setForm]=React.useState({
    nombre:"",
    email:"",
    asunto:"",
    mensaje:""
  })
  const dispatch= useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(enviarForm(form))
    setForm({
      nombre:"",
      email:"",
      asunto:"",
      mensaje:""
    })
  }
  const handleInputs=(event)=>{
setForm({
  ...form,
  [event.target.name]:event.target.value
})
  }
  return (
    <div>
      <form  className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input value={form.nombre} onChange={handleInputs} name="nombre" />
        <label htmlFor="email">Email: </label>
        <input value={form.email} onChange={handleInputs} name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input value={form.asunto} onChange={handleInputs} name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input value={form.mensaje} onChange={handleInputs} name="mensaje" />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
