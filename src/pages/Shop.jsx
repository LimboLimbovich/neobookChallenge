import React from 'react'
import styles from "../assets/styles/shop.module.css"
import carImg from "../assets/images/bmwM4.png"
import shoes from  "../assets/images/nike.png"
import basket from "../assets/images/shopping.png"
import avatar from "../assets/images/avatar.png"
import disLike from "../assets/images/Heart.png"
import like from "../assets/images/HeartRad.png"




class App extends React.Component {

    render() {
      return (
        <div className={styles.main}>
           <div className={styles.header}>
          <div className={styles.logo}>
          <img className={styles.basketImg} src={basket} alt="" /> <br />
          <h1 className={styles.txt}>MOBI MARKET</h1>
          </div>
          <div className={styles.auth}>
            <button className={styles.btn}>Подать объявление</button>
            <div className={styles.portfolio} >
                <div className={styles.info}>
                <h3 className={styles.name}>Алеся</h3>
                <h3 className={styles.email}>sergeykrash01</h3>
                </div>
                <img className={styles.avatar} src={avatar} alt="" />
            </div>
          </div>
           </div>
           <div className={styles.cards }>
           <div className={styles.card}>
      <img className={styles.car} src={carImg} alt="" />
      <h2>BMW M4 Coupe: A </h2>
      <p>Two-Door</p>
      <p>23 000$</p>
      <div className={styles.rating}>
        <img src={disLike} alt="" />
        <span>100</span>
      </div>
    </div>
    <div className={styles.card}>
      <img className={styles.car} src={carImg} alt="" />
      <h2>BMW M4 Coupe: A </h2>
      <p>Two-Door</p>
      <p>23 000$</p>
      <div className={styles.rating}>
      <img src={like} alt="" />
        <span>100</span>
      </div>
    </div>
    <div className={styles.card}>
      <img className={styles.car} src={carImg} alt="" />
      <h2>BMW M4 Coupe: A </h2>
      <p>Two-Door</p>
      <p>23 000$</p>
      <div className={styles.rating}>
      <img src={like} alt="" />
        <span>100</span>
      </div>
    </div>
    <div className={styles.card}>
      <img className={styles.car} src={carImg} alt="" />
      <h2>BMW M4 Coupe: A </h2>
      <p>Two-Door</p>
      <p>23 000$</p>
      <div className={styles.rating}>
      <img src={like} alt="" />
        <span>100</span>
      </div>
    </div>
           </div>
        </div>
      );
    }
  }
  
  export default App;
 