import P from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import './App.css';

const Button = ({ incrementButton }) => {
  console.log('Filho Renderizou!');
  return <button onClick={() => incrementButton(100)}> + </button>;
};

Button.propTypes = { incrementButton: P.func };

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  console.log('Pai renderizou');
  return (
    <>
      <div>
        <p>Teste 1</p>
        <h1>C1: {counter}</h1>
        {btn}
      </div>
    </>
  );
}
export default App;
