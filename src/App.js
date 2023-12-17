import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/LogReg/Login';
import Reg from './components/LogReg/Reg';

const App = () => {
  const [loginMode, setLoginMode] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('')
  const [showSuccessMessage,setShowSuccessMessage] = useState(false)

  const login = () => {
    setRegisterMode(false);
    setLoginMode(true);
  };

  const register = () => {
    setLoginMode(false);
    setRegisterMode(true);
  };

  return (
    <div className="App">
      <main>
        <div className='wrapper'>
          <header>
            <h1>logo</h1>
            <nav>
              <ul>
                <li>
                  <button onClick={login}>Login</button>
                </li>
                <li>
                  <button onClick={register}>Registration</button>
                </li>
              </ul>
            </nav>
          </header>
          {showSuccessMessage && <div>Регистрация прошла успешно</div>}
          <main>
            <Login  setUserName={setUserName} loginMode={loginMode} setLoginMode={setLoginMode} setUserPassword={setUserPassword}/>
            <Reg registerMode={registerMode} setRegisterMode={setRegisterMode} setShowSuccessMessage={setShowSuccessMessage}/>
            {loginMode === false && registerMode === false && userName.length > 0 && (
              <span>Привет {userName}, вот ваш пароль: {userPassword}</span>
            )}
          </main>
        </div>
      </main>
    </div>
  );
};

export default App;
