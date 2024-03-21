import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layouts/Header";
import Main from "./components/Main";
import Footer from "./components/layouts/Footer";

function App() {
  return (
      <div>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
