// Dependencies
import {useState, useEffect, useMemo, useCallback} from 'react';
import './App.css';

// Components
import List, {Todo} from './List';

const initialTodos = [
    {id: 1, task: 'Go shopping'},
    {id: 2, task: 'Pay the electricity bill'}
];

function App() {
    const [todoList, setTodoList] = useState(initialTodos);
    const [task, setTask] = useState('');

    useEffect(() => {
        console.log('Rendering <App />');
    });

    const handleCreate = () => {
        const newTodo = {
            id: Date.now(),
            task
        };

        // Pushing the new todo to the list
        setTodoList([...todoList, newTodo]);

        // Resetting input value
        setTask('');
    };

    return (
        <div className='container'>
            <input
                type='text'
                value={task}
                placeholder='hmm what to do?'
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleCreate}>Create</button>

            <List todoList={todoList}/>
        </div>
    );
}

export default App;
