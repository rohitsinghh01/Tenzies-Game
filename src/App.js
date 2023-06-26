import React from 'react';
import Dice from './components/Dice';

export default function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const [dice, setDice] = React.useState(allNewDice());
  const diceElement = dice.map((die) => <Dice value={die} />);

  function toggleDice(){
    setDice(allNewDice())
  }

  return (
    <main>
      <div className='die-container'>{diceElement}</div>
      <button onClick={toggleDice} className='roll-dice'>Roll</button>
    </main>
  );
}
