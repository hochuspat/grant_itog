import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
const LoginPage = () => {
    const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Вход', loginData);
    // Здесь можно добавить логику для отправки данных на сервер и проверки авторизации
    // После успешной авторизации, перенаправляем пользователя на страницу home
    router.push('/home');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация', registerData);
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <div className="login-page">
      <style jsx>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .form-container {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
      <div className="form-container">
        <h2>Вход</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <button type="submit">Войти</button>
        </form>
      </div>
      <div className="form-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            value={registerData.confirmPassword}
            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
