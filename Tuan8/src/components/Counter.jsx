import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center text-white mt-20">
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={() => dispatch(increment())} className="bg-black px-3 py-1 rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-black px-3 py-1 rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-black px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
