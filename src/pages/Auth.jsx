import React from 'react';
import styles from '../assets/styles/auth.module.css'
import { Link, NavLink } from 'react-router-dom';
import routes from '../utils/consts';

const Auth = () => {
  return (
    <div className={styles.box}>
      <form>
        <div className={styles.inputBox}>
          <input type="text" required="required"/>
          <span>Имя пользователя</span>
        </div>

        <div className={styles.inputBox}>
          <input type="password" required="required"/>
          <span>Пароль</span>
      
        </div>
        <div className={styles.links}>
          <a href='/'>Забыл пароль</a>
        </div>
          <button type='login' className={styles.primaryBtn}>Войти</button>
          <p className={styles.top}>
            <a href={routes.REGISTRATION} className={styles.register}>Зарегистрироваться</a>
        </p>        
          
      </form>
    </div>
  )
}

export default Auth