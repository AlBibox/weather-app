import React from 'react'

const Form = (props) => {
    
    return (
        <div className="form">
            <p>This is a basic weather application, enter your city in the form and take a look at your forecast.</p>
            <input 
                value={props.inputValue} 
                onChange={(e) => props.handleInput(e.target.value)} 
            />
            <button onClick={() => props.handleData()}>SEARCH</button> 
        </div>
    )
}

export default Form
