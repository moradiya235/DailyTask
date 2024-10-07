import React, { useReducer, useContext, createContext, useState } from 'react';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const id = new Date().getTime();
    setNotifications([...notifications, { id, message }]);
    setTimeout(() => {
      setNotifications((current) => current.filter((notif) => notif.id !== id));
    }, 3000); 
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <div className="notifications">
        {notifications.map((notif) => (
          <div key={notif.id} className="notification">
            {notif.message}
          </div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => useContext(NotificationContext);


const initialTaskState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const TaskScheduler = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const { tasks } = state;
  const { addNotification } = useNotification();
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    if (!newTask) return;
    const task = { id: new Date().getTime(), text: newTask };
    dispatch({ type: 'ADD_TASK', payload: task });
    addNotification(`Task "${newTask}" added.`);
    setNewTask('');
  };

  const handleEditTask = (task) => {
    setNewTask(task.text);
    setEditingTask(task);
  };

  const handleSaveTask = () => {
    if (!newTask) return;
    const updatedTask = { ...editingTask, text: newTask };
    dispatch({ type: 'EDIT_TASK', payload: updatedTask });
    addNotification(`Task "${newTask}" updated.`);
    setNewTask('');
    setEditingTask(null);
  };

  const handleDeleteTask = (task) => {
    dispatch({ type: 'DELETE_TASK', payload: task });
    addNotification(`Task "${task.text}" deleted.`);
  };

  return (
    <div className="task-scheduler">
      <h2>Task Scheduler</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        {editingTask ? (
          <button onClick={handleSaveTask}>Save Task</button>
        ) : (
          <button onClick={handleAddTask}>Add Task</button>
        )}
      </div>

      <div className="task-list">
        <h3>Your Tasks</h3>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task">
              <span>{task.text}</span>
              <button className='btn btn-success' onClick={() => handleEditTask(task)}>Edit</button>
              <button className='btn btn-danger' onClick={() => handleDeleteTask(task)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks available. Add a task to get started.</p>
        )}
      </div>
    </div>
  );
};


const App = () => {
  return (
    <NotificationProvider>
      <div className="App">
        <TaskScheduler />
      </div>
    </NotificationProvider>
  );
};

export default App;
