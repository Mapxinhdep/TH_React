import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CounterRedux from "./components/Counter";
import CounterUseReducer from './components/CounterUseReducer';
import './app.css';

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-10 space-y-6">
        <CounterRedux />
        <CounterUseReducer />
      </div>
    </Provider>
  );
}

export default App;
