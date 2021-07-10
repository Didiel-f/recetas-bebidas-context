import React from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
      
    </>
  );
}

export default App;
