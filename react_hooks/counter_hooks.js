// function CounterHooks() { 
//     const [count, setCount] = useState(0); // useState(0) -> holds 0 as the initial value

//     const handleClick = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <h3 className="center">Welcome to the Counter of Life </h3>
//             <button
//                 className="center-block"
//                 onClick={handleClick}> {count} </button>
//         </div>
//     );
// };

function CounterHooks() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    const handleClick = () => {
        setCount(count + 1);
        setTime(new Date());
    };

    return (
        <div>
            <h3 className="center">Welcome to the Counter of Life </h3>
            <button
                className="center-block"
                onClick={handleClick}>{count}</button>
            <p className="center">
                at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
        </div>
    );
}

//  unlike setState calls, the values passed into useState replaces the state value. 
// setState merges object properties but useState replaces the entire value.

// 🐢 merge (setState) vs replace (useState)
// assume initial state is {name: "Ohans"}

// setState({ age: "unknown" }) // =>
// new state object will be 
// {name: "Ohans", age: "unknown"}

// useState({ age: "unknown" }) // =>
// new state object will be
// {age: "unknown"} - initial object is replaced