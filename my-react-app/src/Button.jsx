

function Button() {

    const styles = { 
        backgroundColor: "rgb(28, 75, 175)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name}, you clicked me ${count} times`);
    //     } else {
    //         console.log(`${name}, stop clicking me`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "shlawg";


    return(
        <button style={styles} onClick={(e) => handleClick(e)}>Click me 😁</button>
    );
}

export default Button