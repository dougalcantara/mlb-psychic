import { useState, useContext } from 'react';

import { AppContext, auth } from '../store';

export default function Login() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  async function onSubmit(e) {
    e.preventDefault();

    const { email, password } = formFields;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }

  function setFormField(target) {
    const { name, value } = target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input onChange={({ target }) => setFormField(target)} type="email" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input onChange={({ target }) => setFormField(target)} type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}
