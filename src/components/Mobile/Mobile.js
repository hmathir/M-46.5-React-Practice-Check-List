import { useState } from "react";

const Mobile = () => {
    const [count,setCount] = useState(100);
    const handleCount = () => {
        if(count === 0){
            alert('Please Charge Your Phone Now!');
            return;
        }else{
            setCount(count => count-10);
        }

    } 
    return (
        <div>
            <hr></hr>
            <h1>{count}</h1>
            <button className="px-3 py-2 bg-teal-800 text-white" onClick={handleCount}>Battery Down</button>
            <hr></hr>
        </div>
    );
};

export default Mobile;