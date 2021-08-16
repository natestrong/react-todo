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
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('Rendering <App />');
    });

    const handleSearch = () => {
        setTerm(task);
    };

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

    const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
        console.log('Filtering...');
        return todo.task.toLowerCase().includes(term.toLowerCase());
    }), [term, todoList]);

    const handleDelete = (taskId: number) => {
        const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
        setTodoList(newTodoList);
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
            <button onClick={handleSearch}>Search</button>

            <List todoList={filteredTodoList} handleDelete={handleDelete}/>
        </div>
    );
}

export default App;
