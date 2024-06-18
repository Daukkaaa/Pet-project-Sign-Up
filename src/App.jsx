import React, { useState } from "react";
import Form from "./Components/Form.jsx";
import './main.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    password: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Form formData={formData} handleChange={handleChange} />
    </div>
  )
}

export default App;
