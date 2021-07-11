import React from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListaRecetas } from './components/ListaRecetas';
import CategoriasProvider from './context/CategoriasContext';
import { ModalProvider } from './context/ModalContext';
import { RecetasProvider } from './context/RecetasContext';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
          </div>
          <ListaRecetas />
          
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
