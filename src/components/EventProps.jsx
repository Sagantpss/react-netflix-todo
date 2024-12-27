export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Welcome ${user}`);
    }
    const handleMouseEnter = () => {
        alert(`Mouse Enter`);
        
    }
    return (
        <>
        <WelcomeUser onClick={() => handleWelcomeUser("Sagan")} 
            onMouseEnter= {handleMouseEnter}
            />
        </>
    )
};

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log("Greeting");
        props.onClick();
    }
    return(
        <>
        <button onClick={onClick} >Click Me</button>
        <button onMouseEnter={onMouseEnter}>Mouse Enter</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}