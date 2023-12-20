import React from 'react';
import styles from '../assets/styles/auth.module.css'
import routes from '../utils/consts';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import bg from '../assets/images/image 1.png'
import eye from '../assets/images/eye.png'

const Auth = () => {
  return (
    <div className={styles.container}>
    <img src={bg} alt="" />
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
          <div className={styles.eyeBtn}><img src={eye} alt="" /></div>
        </div>
          <button type='login' className={styles.primaryBtn}>Войти</button>
      </form>
        <div className={styles.register}>
          <a href={routes.REGISTRATION}>Зарегистрироваться</a>
        </div>
        
    </div>
    </div>
  )
}

export default Auth