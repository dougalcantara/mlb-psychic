import { useState } from 'react';

import { auth } from '../store';

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
    <form onSubmit={onSubmit} className="w-full mx-auto md:max-w-sm">
      <fieldset>
        <label htmlFor="email" className="block">Email Address:</label>
        <input onChange={({ target }) => setFormField(target)} type="email" name="email" id="email" className="border-2 border-gray-300 w-full py-2 pl-2 rounded-sm" />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="block">Password:</label>
        <input onChange={({ target }) => setFormField(target)} type="password" name="password" id="password" className="border-2 border-gray-300 w-full py-2 pl-2 rounded-sm" />
      </fieldset>
      <fieldset className="mt-4">
        <button type="submit" className="bg-green-500 text-white border-2 border-green-500 py-2 px-6 hover:text-green-500 hover:bg-white">Login</button>
      </fieldset>
    </form>
  );
}
