import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import React from 'react';
import {loginAction} from '../../store/api-actions';
import {toast} from 'react-toastify';


function LoginPage(): JSX.Element {
  const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/;
  const dispatch = useAppDispatch();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleEmailFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailField(evt.target.value);
  };

  const handlePasswordFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordField(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailField !== null && passwordField !== null) {
      if (!(String(passwordField).match(passwordRegex))){
        toast.warn('The password should contain at least 1 number and 1 letter');
        return;
      }
      localStorage.email = emailField;
      dispatch(loginAction({email: emailField, password:passwordField}));
    }
  };
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Страница авторизации</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to ={AppRoute.Root} className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  width="81"
                  height="41"
                  alt="6 cities logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit = {handleSubmit}className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={emailField}
                  onChange = {handleEmailFieldChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={passwordField}
                  onChange={handlePasswordFieldChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                  Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to = {AppRoute.Root} className="locations__item-link" >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
