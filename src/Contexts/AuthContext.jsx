
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({ form: {}, handleChange: () => {} });

export const AuthContextProvider = ({ children }) => {
    const [form, setForm] = useState({});

    const [allow, setAllow] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
      console.log("ue")
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form)
  };
  return (
    <AuthContext.Provider value={{ form, setForm, handleChange , setAllow, allow}}>
      {children}
    </AuthContext.Provider>
  );
};