import React, { useState, useEffect } from 'react';

const Reg = ({registerMode,setRegisterMode,setShowSuccessMessage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const [user, setUser] = useState({
    name:'',
    email: '',
    password: ''
  });

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerName = (e) => {
    setName(e.target.value);
  };

  const submitUser = () => {
    let userFound = false;
    if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
    .exec(email)) {
      alert('email не подходит');
      return;
    }
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;}
      {
    if (password.length < 6){
      alert('пароль не может быть таким коротким')
      return
    }  
    if (!/[0-9]/.exec(password)) {
      alert('пароль должен содержать хотя бы одну цифру');
      return
    }
    if (!/[a-zA-Z]/.exec(password)) {
      alert('пароль должен содержать хотя бы одну букву и все буквы должны быть на английском');
      return
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.exec(password)) {
      alert('пароль должен содержать хотя бы один спец символ');
      return;
    }


    const keys = Object.keys(localStorage);
    

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = JSON.parse(localStorage.getItem(key));

      if (item && item.email === email || item && item.name === name) {
        userFound = true
        alert('Такой пользователь уже существует')
      }
    }
  }
    if (!userFound) {
        setUser({
            name: name,
            email: email,
            password: password
          });
          setRegisterMode(false)
          setShowSuccessMessage(true); // Set the show success message state to true
          setTimeout(() => {
      setShowSuccessMessage(false); // показываем success message на 2 сек
    }, 2000); // 2 seconds
    }
  };
  const handlerConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const mode = () => {
    setRegisterMode(false)
  }

  useEffect(() => {
    if (user.email && user.password && user.name) {
      localStorage.setItem(`user${Date.now()}`, JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className={registerMode === true ? '' : 'hide'}>
      <div className='formContainer'>
        <form className='formStyle'>
          <div className='closeFormContainer'><button type='button' className='closeForm' onClick={() => {mode()}}>X</button></div>
          <span>Регистрация</span>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваше имя'
            value={name}
            onChange={(e) => { handlerName(e) }}
          ></input>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваш email'
            value={email}
            onChange={(e) => { handlerEmail(e) }}
          ></input>
          <input
            className='inputStyle'
            type='password'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={(e) => { handlerPassword(e) }}
          ></input>
          <input
            className='inputStyle'
            type='password'
            placeholder='Подтвердите ваш пароль'
            value={confirmPassword}
            onChange={handlerConfirmPassword}
          />
          <button type="button" onClick={() => { submitUser() }}>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
