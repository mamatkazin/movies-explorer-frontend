import React from 'react';
import './index.css';

function Movies(props) {
  const data = [
    {
      name: '33 слова о дизайне',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Киноальманах «100 лет дизайна»',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'В погоне за Бенкси',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Баския: Взрыв реальности',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Бег это свобода',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Книготорговцы',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Когда я думаю о Германии ночью',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Gimme Danger: История Игги и The Stooges',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Дженис: Маленькая девочка грустит',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Соберись перед прыжком',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Пи Джей Харви: A dog called money',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'По волнам: Искусство звука в кино',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Рудбой',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Скейт — кухня',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Война искусств',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
    {
      name: 'Зона',
      link: '',
      liked: false,
      duration: '1ч 42м',
    },
  ];
  return (
    <div className='page'>
      <Header loggedIn={props.loggedIn} themeColor='light'></Header>
      <main className='content'>
        <Search />
        <MoviesList />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
