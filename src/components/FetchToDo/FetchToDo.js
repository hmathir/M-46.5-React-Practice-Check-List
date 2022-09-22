import { useEffect, useState } from "react";
import ShowTodo from "../ShowTodo/ShowTodo";

const FetchToDo = () => {
    const [todos,setTodo] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();
            setTodo(data);
            console.log(data);
        }
        fetchData();
    },[])
    console.log(todos);
    return (
        <div>
            <div className="grid md:grid-cols-3">
            {
                todos.map(todo => <ShowTodo todo={todo}></ShowTodo>)
            }
            </div>

        </div>
    );
};

export default FetchToDo;