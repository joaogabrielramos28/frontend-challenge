import React from 'react';
import CardsContainer from './components/cardsContainer';
import Header from './components/header/index';
import SearchSection from './components/searchSection';
import GlobalStyles from './themes/global'
import  {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <>
    <Header />
    <SearchSection />
    <CardsContainer />
    <GlobalStyles />
    <ToastContainer theme={'colored'} />
    </>
  );
}

export default App;
