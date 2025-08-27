import { useState, useRef } from 'react';
import './App.css';

// function App() {
//   const inputRef = useRef(null);
//   const [expression, setExpression] = useState(''); // stores like "5+3"
//   const [result, setResult] = useState(null);

//   // Safe evaluator: only supports + - * /
//   function calculate(expr) {
//     try {
//       // split by operators while keeping them
//       const tokens = expr
//         .split(/([+\-*/])/)
//         .map((t) => t.trim())
//         .filter(Boolean);

//       // Convert numbers to floats
//       let values = [];
//       let ops = [];

//       const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

//       function applyOp() {
//         const b = values.pop();
//         const a = values.pop();
//         const op = ops.pop();
//         switch (op) {
//           case '+':
//             values.push(a + b);
//             break;
//           case '-':
//             values.push(a - b);
//             break;
//           case '*':
//             values.push(a * b);
//             break;
//           case '/':
//             values.push(a / b);
//             break;
//           default:
//             break;
//         }
//       }

//       tokens.forEach((token) => {
//         if (!isNaN(token)) {
//           values.push(parseFloat(token));
//         } else if (['+', '-', '*', '/'].includes(token)) {
//           while (
//             ops.length &&
//             precedence[ops[ops.length - 1]] >= precedence[token]
//           ) {
//             applyOp();
//           }
//           ops.push(token);
//         }
//       });

//       while (ops.length) {
//         applyOp();
//       }

//       return values[0];
//     } catch {
//       return 'Error';
//     }
//   }

//   function handleOperator(op) {
//     const value = inputRef.current.value;
//     if (!value) return;
//     setExpression((prev) => prev + value + op);
//     inputRef.current.value = '';
//     inputRef.current.focus();
//   }

//   function handleEqual(e) {
//     e.preventDefault();
//     const value = inputRef.current.value;
//     if (value) {
//       const fullExp = expression + value; // e.g. "5+3"
//       const evalResult = calculate(fullExp);
//       setResult(evalResult);
//       setExpression(''); // reset expression
//       inputRef.current.value = '';
//     }
//   }

//   function resetAll(e) {
//     e.preventDefault();
//     setExpression('');
//     setResult(null);
//     inputRef.current.value = '';
//   }

//   return (
//     <div className='App'>
//       <h1>Moderate Working Calculator</h1>
//       <h3>Expression: {expression || '................'}</h3>
//       <h2>Result: {result ?? 0}</h2>

//       <form>
//         <input ref={inputRef} type='number' placeholder='Type a number' />
//         <div>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleOperator('+');
//             }}
//           >
//             +
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleOperator('-');
//             }}
//           >
//             -
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleOperator('*');
//             }}
//           >
//             x
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleOperator('/');
//             }}
//           >
//             /
//           </button>
//           <button onClick={handleEqual}>=</button>
//           <button onClick={resetAll}>Reset</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(null);
  const getValue = () => Number(inputRef.current.value);

  function plus(e) {
    e.preventDefault();
    const value = getValue();
    setResult((result) => (result === null ? value : result + value));
    inputRef.current.value = null;
    inputRef.current.focus();
  }

  function minus(e) {
    e.preventDefault();
    const value = getValue();
    setResult((result) => (result === null ? value : result - value));
    inputRef.current.value = null;
    inputRef.current.focus();
  }

  function times(e) {
    e.preventDefault();
    const value = getValue();
    setResult((result) => (result === null ? value : result * value));
    inputRef.current.value = null;
    inputRef.current.focus();
  }

  function divide(e) {
    e.preventDefault();
    const value = getValue();

    if (value === 0) {
      alert('Error: Division by zero is not allowed!');
      inputRef.current.value = '';
      inputRef.current.focus();
      return;
    }

    setResult((result) => (result === null ? value : result / value));
    inputRef.current.value = null;
    inputRef.current.focus();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = null;
  }

  return (
    <div className='App'>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h2 ref={resultRef}>{result === null ? '0' : result}</h2>
        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
