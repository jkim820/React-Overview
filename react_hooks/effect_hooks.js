// the useEffect hook is called by passing it a function within which you can perform your side effects.

// example: 
useEffect(() => {
    // 🐢 you can perform side effects here
    console.log("useEffect first timer here.");
});

// when is the useEffect function called?
// Since functional components don’t have these lifecycle methods (componentDidMount and componentDidUpdate),
// useEffect kinda takes their place.

function CounterHooks() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date())

    // 🐢 look here.
    useEffect(() => {
        console.log("useEffect first timer here.");
    }, [count]);


    const handleClick = () => {
        setCount(count + 1);
        setTime(new Date());
    };

    return (
        <div>
            <h3 className="center">Welcome to the Counter of Life </h3>
            <button className="center-block"
                onClick={handleClick}>{count}</button>
            <p className="center"> at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
        </div>
    );
};

// What if you only want to run the effect function only when the component mounts ?
// useEffect takes a second parameter, an array of dependencies to handle this.
// If you pass in an empty array, the effect function is run only on mount — subsequent re-renders don’t trigger the effect function.
useEffect(() => {
    console.log("useEffect first timer here.")
}, []) 

// If you pass any values into this array, then the effect function will be run on mount, and anytime the values passed are updated. 
// i.e if any of the values are changed, the effected call will re-run.
useEffect(() => {
    console.log("useEffect first timer here.")
}, [count]) 


// SUBSCRIPTIONS
//ex:
useEffect(() => {
    const clicked = () => console.log('window clicked');
    window.addEventListener('click', clicked);
}, [])

// How do we unsubscribe from this listener when the component is unmounted ?
// If you RETURN a function within your effect function, it will be INVOKED when the component UNMOUNTS. 
// This is the perfect place to cancel subscriptions as shown below:
useEffect(() => {
    const clicked = () => console.log('window clicked');
    window.addEventListener('click', clicked);

    return () => {
        window.removeEventListener('click', clicked)
    }
}, [])