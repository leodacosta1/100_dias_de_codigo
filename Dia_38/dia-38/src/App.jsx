import {React, useState} from 'react';
import Input from './components/Input';
import Board from './components/Board';

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <>
      <div class='flex flex-col items-center justify-center py-8 gap-4'>
        <h1>Quadro de tarefas</h1>
          <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
            />
        ))}
      </div>


    </>
  )
}

export default App;