import { useState } from "react";

const Mobile = () => {
    let [count,setCount] = useState(100);
    let handleCount = () => {
        if(count <= 0){
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
            <button onClick={handleCount}>Battery Down</button>
            <hr></hr>
        </div>
    );
};

export default Mobile;