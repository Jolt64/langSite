import "./App.css";
import React, { useState, useReducer } from "react";


function App() {

  const [state, newState] = useReducer(
    (state, newState) => ({...state, ...newState}),
  {noun1: ' "Select a button" ', adjective1: ' "Select a button" '}
);

  return (
    <div className="App">
      <header>
        <p className="Header">'This is your mvp'</p>
      </header>
        <div className="TextMain">
          El {state.noun1} es {state.adjective1}
        </div>
        <div>
        <button className="ButtonWordChange"
          onClick={() => {
            state = newState({noun1: NounPicker()})
          }}
        >
          Noun Click Me!
        </button>
        <button className="ButtonWordChange"
          onClick={() => {
            state = newState({adjective1: AdjectivePicker()})
          }}
        >
          Adjective Click Me!
        </button>
        <button className="ButtonWordChange"
          onClick={() => {
            state = newState({noun1: NounPicker(), adjective1: AdjectivePicker()})
          }}
          >
          Both Click Me!
        </button>
          </div>
    </div>
  );
  function NounPicker() {
    return NounArray[Math.floor(Math.random() * NounArray.length)];
  }
  
  function AdjectivePicker() {
    return AdjectiveArray[Math.floor(Math.random() * AdjectiveArray.length)];
  }
}

let AdjectiveArray = ["rojo", "rápido", "verde"];
let NounArray = ["Gato", "Hombre", "Perro"];


export default App;
