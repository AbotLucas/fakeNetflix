import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {

  const mainTitleText = 'Que quieres ver hoy?';
  const mainInputPlaceholder = 'Buscar';
  return (
    <section className='main'>
      <h2 className='main__title'>{mainTitleText}</h2>
      <input type='text' className='input' placeholder={mainInputPlaceholder} />
    </section>
  );
};

export default Search;
