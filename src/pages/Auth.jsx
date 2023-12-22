import React, { useEffect, useState } from 'react';
import styles from '../assets/styles/auth.module.css';
import routes from '../utils/consts';
import shopCart from '../assets/images/ShopCart.png'
import bg from '../assets/images/image 1.png';
import eye from '../assets/images/eye-disable.png';
import lightShadow from '../assets/images/Rectangle 1.png'
import eyeDisable from '../assets/images/eye.png';


const Auth = () => {
  const [formValid, setFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [eyeClicked, setEyeClicked] = useState(false);
 

  useEffect(() => {
    const nameError = false;
    const passwordError = false;

    if (nameError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formValid]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeClicked(!eyeClicked);
  };

  return (
    <div className={styles.container}>
      
      <img src={bg} className={styles.bg}/>
      <img src={shopCart} className={styles.cart}/>
      <img src={lightShadow} className={styles.shadow}/>
      

      <div className={styles.box}>
        <form>
          <div className={styles.inputBox}>
            <input type="text" required="required" />
            <span>Имя пользователя</span>
          </div>

          <div className={styles.inputBox}>
            <input
              type={showPassword ? 'text' : 'password'}
              required="required"
            />
            <span>Пароль</span>
            <div
              className={`${styles.eyeBtn} ${eyeClicked ? styles.disabled  : ''}`}
              onClick={togglePasswordVisibility}
            >
              <img src={eyeClicked ? eyeDisable : eye} alt="" />
            </div>
          </div>
          <div className={styles.links}>
            <a href='/'>Забыл пароль</a>
          </div>
          <button type='login' className={styles.primaryBtn} disabled={!formValid}>
            Войти
          </button>
        </form>
        <div className={styles.register}>
          <a href={routes.REGISTRATION}>Зарегистрироваться</a>
        </div>
      </div>
    </div>
  );
};

export default Auth;

