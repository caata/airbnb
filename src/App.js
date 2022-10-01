import React from 'react';
import "./App.css"
import Nav from "./Nav";
import Desc from "./Description";
import Card from "./Card";
import data from "./data"


function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})        
  return (
    <div className="App">
      <Nav />
      <Desc />
      <section className='cardsList'>
        {cards}
      </section>
    </div>
  );
}

export default App;



