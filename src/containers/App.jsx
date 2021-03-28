import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import '../assets/styles/App.scss';
import ItemCarousel from '../components/ItemCarrousel';

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=edb67d13cecee476561844a5ab40881c&language=en-US&page=${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`).then((response) => response.json()).then((data) => {
        setMovies(data.results);
      });
    } catch {
      console.log(error);
    }
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='Mi Lista'>
        <Carousel>
          {movies.slice(0, 6).map((item) => (
            <ItemCarousel data={item} key={item.id} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Netflix'>
        <Carousel>
          {movies.slice(6, 14).map((item, index) => (
            <ItemCarousel data={item} key={item.id} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {movies.slice(14, 20).map((item, index) => (
            <ItemCarousel data={item} key={item.id} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
