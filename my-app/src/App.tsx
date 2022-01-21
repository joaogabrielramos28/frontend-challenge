import React from 'react';
import CardsContainer from './components/cardsContainer';
import Header from './components/header/index';
import SearchSection from './components/searchSection';
import GlobalStyles from './themes/global'
function App() {
  return (
   <>
    <Header />
    <SearchSection />
    <CardsContainer />
    <GlobalStyles />
    </>
  );
}

export default App;
