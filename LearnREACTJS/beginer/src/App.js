import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import { RedButton, Button, ButtonSASS } from './components/Button';
import { Counter } from './components/Counter';
import { Card2 } from './components/Card/Card2';
import { GlobalStyles } from './GlobalStyles';
import { styled } from 'styled-components';

const BlackCounter = styled(Card2)`
  background-color: black;
`;

const course = [
  {
    id: 1,
    name: 'Java',
  },
  {
    id: 2,
    name: 'C#',
  },
  {
    id: 3,
    name: 'C++',
  },
];

function App() {
  const [state, setState] = useState([]);

  const handleCheck = (id) => {
    setState((prev) => {
      const isChecked = state.includes(id);
      if (isChecked) {
        return state.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  // console.log(state);

  //JSX
  return (
    <div className="App">
      {/* <GlobalStyles> */}
      {/* <Clock name="sdada" age="18" /> */}
      {/* <h1>Hello world</h1>
      {course.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={state.includes(item.id)}
            onChange={() => handleCheck(item.id)}
          />
          {item.name}
        </div>
      ))} */}
      {/* <Button />
      <RedButton placeholder="Nguyen trong Khuong" /> */}
      {/* <Counter /> */}
      {/* <ButtonSASS>Primary</ButtonSASS>
      <ButtonSASS secondary>Secondary</ButtonSASS> */}
      {/* <Card secondary /> */}
      {/* </GlobalStyles> */}
      <Card2 />
      <BlackCounter />
    </div>
  );
}

export default App;
