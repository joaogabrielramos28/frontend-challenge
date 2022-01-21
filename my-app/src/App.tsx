import React from 'react';
import Header from './components/header/index';
import SearchSection from './components/searchSection';
import GlobalStyles from './themes/global'
function App() {
  return (
   <>
    <Header />
    <SearchSection />
    <GlobalStyles />
    </>
  );
}

export default App;
