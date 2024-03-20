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
      e.preventDefault()
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
                  <i class="fa-solid fa-magnifying-glass" style={{color: "#4a4f55;"}}></i>
                  </button>
                </form>
              </button>
              <button>
                <NavLink to="/signin">
                  <i onClick={() => setIsOpen(true)} class="header__signin fa-solid fa-user"></i>
                </NavLink>
              </button>
              <button onClick={Click}>
              <NavLink to="/hero">
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