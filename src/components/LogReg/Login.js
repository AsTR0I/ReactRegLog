import React, { useState } from 'react';

const Login = ({ loginMode, setLoginMode, setUserEmail, setUserName,setUserPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitUser = () => {
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    } else{
    const keys = Object.keys(localStorage);
    let userFound = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = JSON.parse(localStorage.getItem(key));

      if (item && item.email === email && item.password === password) {
        setUser(item);
        setUserPassword(item.password);
        setUserName(item.name)
        userFound = true;
        setLoginMode(false)
        break;
      }
    }

    if (!userFound) {
      alert('Пользователь не найден');
    }
    }
  };

  const mode = () => {
    setLoginMode(false);
  };

  return (
    <div className={loginMode === true ? '' : 'hide'}>
      <div className='formContainer'>
        <form className='formStyle'>
          <div className='closeFormContainer'>
            <button type='button' className='closeForm' onClick={() => { mode() }}>X</button>
          </div>
          <span>Войти</span>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваш email'
            value={email}
            onChange={handlerEmail}
          />
          <input
            className='inputStyle'
            type='password'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={handlerPassword}
          />
          <input
            className='inputStyle'
            type='password'
            placeholder='Подтвердите ваш пароль'
            value={confirmPassword}
            onChange={handlerConfirmPassword}
          />
          <button type="button" onClick={submitUser}>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
