import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider2",
    email: "mbceron@gmail.com",
  });

  const { username, email } = formState;

  const onInputChance = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChance}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="mbceron@gmail.com"
        name="email"
        value={email}
        onChange={onInputChance}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
