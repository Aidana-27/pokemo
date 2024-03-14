import { NavLink } from "react-router-dom"
import SignIn from "../component/SignIn"
import SignUp from "../component/SignUp"
import React, { useState } from "react"

function Header({setSearch}) {
  const [isOpen, setIsOpen] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const openSignIn = () => {
    setIsOpen(true);
    setSignUp(false);
  };

  const openRegister = () => {
    setSignUp(true);
    setIsOpen(false);
  }

  const closeBoth = () => {
    setIsOpen(false);
    setSignUp(false);
  };

  const Click=()=>{
    window.location.reload()
  }

  const getById = (e) => {
    if (e.key === "Enter" && e.target.value) {
        setSearch(e.target.value)
    }
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <NavLink to="/" className="header__img">
              <img src="https://assets.pokemon.com/assets/cms2-ru-ru/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="pokemon logo" />
            </NavLink>
            <div className="header__links">
              
              <NavLink to="/" className="header__text"><i class="fa-solid fa-house fa-sm" style={{color:" #4a4f55;"}}></i> Главная</NavLink>
              <NavLink to="/hero" className="header__text"><i class="fa-brands fa-optin-monster fa-sm" style={{ color: " #4a4f55;" }}></i>Покедекс</NavLink>
              <NavLink to="/history" className="header__text" ><i class="fa-solid fa-heart" style={{color:" #4a4f55;"}}></i>Вселенная покемонов</NavLink>
            </div>
            <div className="header__icons">
              <button>
                <form action="" class="relative mx-auto flex">
                  <input onKeyDown={getById} type="search" class="text-white  cursor-pointer relative z-10 h-8 w-10 rounded-lg  bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text  focus:px-3" placeholder="Поиск по ID" />
                  <button class="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-transparent rounded-lg peer-focus:relative peer-focus:rounded-l-none">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 50 50">
                      <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                  </button>
                </form>
              </button>
              <button>
                <NavLink to="/signin">
                  <i onClick={() => setIsOpen(true)} class="header__signin fa-solid fa-user"></i>
                </NavLink>
              </button>
              <button onClick={Click}>
              <NavLink to="/">
              <i class="fa-solid fa-rotate-right" style={{color: "#1c1e21;"}}></i>
              </NavLink>
              </button>
           
            </div>
          </div>
        </div>
        <hr className="header__line" />
      </header>
      {isOpen && <SignIn openSignIn={openSignIn} openRegister={openRegister} closeBoth={closeBoth} />}
      {signUp && <SignUp openRegister={openRegister} closeBoth={closeBoth} />}
    </>
  )
}

export default Header