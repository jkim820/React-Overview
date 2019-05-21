function CounterHooks() { 
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3 className="center">Welcome to the Counter of Life </h3>
            <button
                className="center-block"
                onClick={handleClick}> {count} </button>
        </div>
    );
};