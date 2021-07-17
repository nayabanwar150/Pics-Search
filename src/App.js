import React, { useState } from "react";
import Header from "./components/Navs/Header";
import ScrollToTop from "react-scroll-to-top";
import Default from "./components/Home/Default";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      {!searchText && <Default />}
      <ScrollToTop smooth />
    </>
  );
}

export default App;
