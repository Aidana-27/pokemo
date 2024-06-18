import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
<div className='header__logo'>
<img className='header__logo__img' src='https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg' alt='img'/>
</div>
<div className='header__info'>
<p className='header__link'>Home</p>
<p className='header__link'>About</p>
<p className='header__link'>Shop</p>
</div>
<div className='header__input'>
<input type='text'/>
<i class="header__glass fa-solid fa-magnifying-glass fa-sm" style={{color: "#b9cef3;"}}></i>
</div>
                </div>
            </div>
        </header>
    )
}

export default Header