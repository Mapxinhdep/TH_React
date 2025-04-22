import React, { useState } from 'react';
import CounterApp from './components/CounterRedux';
import CounterApp1 from './components/CounterUseReducer';
import ToDoApp from './ToDoApp/ToDoApp';

function App() {
  const [currentApp, setCurrentApp] = useState(null); // 'counter' | 'todo' | null

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>SHOW</h1>

      {/* Các nút chuyển */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setCurrentApp('counterRedux')} style={{ margin: '0 10px' }}>
          Counter App Redux
        </button>
        <button onClick={() => setCurrentApp('counterUseReducer')} style={{ margin: '0 10px' }}>
          Counter App useReducer
        </button>
        <button onClick={() => setCurrentApp('todo')} style={{ margin: '0 10px' }}>
          ToDo App
        </button>
        <button onClick={() => setCurrentApp(null)} style={{ margin: '0 10px' }}>
          Ẩn tất cả
        </button>
      </div>

      {/* Hiển thị App tương ứng */}
      {currentApp === 'counterRedux' && <CounterApp />}
      {currentApp === 'counterUseReducer' && <CounterApp1 />}
      {currentApp === 'todo' && <ToDoApp />}
      {currentApp === null && <p>Chọn</p>}
    </div>
  );
}

export default App;
