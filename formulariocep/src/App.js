import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressForm from './form/AdressForm.js'

function App() {
  return (
    <div className="App">
      <h1>Consulta CEP</h1>
      <AddressForm />
    </div>
  );
}

export default App;
