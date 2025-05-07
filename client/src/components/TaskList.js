import React, { useState, useEffect } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (response.ok) {
        setNewTask({ title: '', description: '' });
        fetchTasks();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}/complete`, {
        method: 'PUT',
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="task-list">
      <h1>Task Manager</h1>
      
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className={`task ${task.is_completed ? 'completed' : ''}`}>
            <div className="task-content">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <small className="task-date">Created: {formatDate(task.created_at)}</small>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleComplete(task.id)}>
                {task.is_completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList; 