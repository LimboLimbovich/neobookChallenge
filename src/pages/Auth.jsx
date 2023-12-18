import React from 'react'

const Auth = () => {
  return (
    <div>
      <form action="">
        <div className=" relative my-4  ">
          <input type="email" className=' block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none '/>
          <label htmlFor="">Имя пользователя</label>
        </div>

        <div className=" relative my-4  ">
          <input type="password" className=' block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none '/>
          <label htmlFor="">Пароль</label>
        </div>
        <div>
          <span>Забыли пароль</span>
        </div>
        <button type='submit'>Войти</button>
        <div>Зарегистрироваться</div>
      </form>
    </div>
  )
}

export default Auth