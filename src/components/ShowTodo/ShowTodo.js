
const ShowTodo = (props) => {
    const {userId, title:todo, completed} = props.todo;
    return (
        <div className="bg-black text-white mb-5 w-9/12 mx-auto p-10 shadow-lg border border-red-500 rounded-[30px]">
            <p>User ID: {userId}</p>
            <p>ToDo: {todo}</p>
            <p>Completed: {
                completed ? 'Yes' : 'No'
            }</p>
        </div>
    );
};

export default ShowTodo;