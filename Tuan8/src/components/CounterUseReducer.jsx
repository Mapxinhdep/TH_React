// src/components/CounterUseReducer.jsx
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="text-center p-4 border rounded-lg bg-yellow-100">
      <h2 className="text-xl font-bold mb-2">Counter with useReducer</h2>
      <p className="text-lg mb-2">Count: {state.count}</p>
      <div className="space-x-2">
        <button onClick={() => dispatch({ type: 'increment' })} className="bg-green-600 text-white px-3 py-1 rounded">+</button>
        <button onClick={() => dispatch({ type: 'decrement' })} className="bg-red-600 text-white px-3 py-1 rounded">-</button>
        <button onClick={() => dispatch({ type: 'reset' })} className="bg-gray-600 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default CounterUseReducer;
