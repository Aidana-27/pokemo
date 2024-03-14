import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios("https://pokeapi.co/api/v2/pokemon?limit=104&offset=0")
            .then(rec => setInfo(rec.data.results))
    }, [setInfo])
    console.log(info);




    const getRandomInt=(min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let count = 10
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
        randomNumbers.push(getRandomInt(0, 100));
    }

    console.log(randomNumbers);


    return (
        <>
        <section className='slider'>
            <div className='container'>
            <div className='game'>
        <a className='img__game' href='https://legends.arceus.pokemon.com/ru-ru/' target='blank'>
            <img src='https://assets.pokemon.com/assets//cms2-ru-ru/img/video-games/_tiles/pokemon-legends-arceus/launch/pokemon-legends-arceus-875-ru.jpg' alt='game pokemon'/>
        </a>
        <div class="banner  bg-gray-400">
      <div className='banner__text'>
      <h3 className='banner__title'>Игра <em>Pokémon Legends: Arceus</em> уже в продаже!</h3>
      <p className='banner__link' style={{maxWidth: "1000px", minHeight: "50px;"}}>Повстречай новых Покемонов, познакомься с народом региона Гисуи и раскрой тайны, окружающие Аркеуса!</p>
      </div>
        <div class="rating-logo wrapper" data-href="https://www.nintendo.ru/-/-/-/-/--660719.html">
            <img class="PEGI" src="https://assets.pokemon.com/assets//cms2-ru-ru/img/video-games/game_ratings/RUS_AgeRating_6_POS.jpg" alt="6+"/>
        </div>
      </div>
        </div>
                <h3 className='swiper__text'>
                    Покемон дня
                </h3>
           
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {randomNumbers && randomNumbers.map((el, index) => (
                    <>
                        <React.Fragment key={index}>
                            <SwiperSlide>
                                <div className='swiper__flex'>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el}.png`} />
                                    {info[el] && (<p className='swiper__name'>
                                        {info[el - 1].name}
                                    </p>)}
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    </>
                     

                     
                ))}
            </Swiper>

            <div cla>
            <NavLink to="/hero" className="slider__info">
                Узнайте больше о покемонах
            </NavLink>
            </div>
        </div>
        </section>
        </>
    );
}




export default Slider