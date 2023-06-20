import { ChangeEvent, FormEvent, useState } from 'react';
import { useLogin } from './hooks/useLogin';

export function LoginPage() {

  const {
    formData, isValid, changeHandler
  } = useLogin();


  function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData)
  }


  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      <form className="flex flex-col gap-3" onSubmit={doLogin}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={changeHandler}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />
        <button disabled={!isValid} className="btn primary" type="submit">SIGN IN</button>
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}