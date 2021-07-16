import React from 'react';
import Header from './components/Navs/Header'
import ScrollToTop from "react-scroll-to-top";
import Default from './components/Home/Default';

function App() {
  return (
    <>
      <Header />
      <Default />
      <ScrollToTop smooth />
    </>
  );
}

export default App;
