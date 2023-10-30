// Code Keypad Component Here
// import React, { useState } from "react";
function Keypad (){
    // const [inputValue, setInputValue] = useState('');

    function handleInputChange () {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" id="password" placeholder="password" onChange={handleInputChange}/>
        </div>
    )
}

export default Keypad;