import React from 'react';

const Step2 = (props) =>{

    const {username,handleChange} = props
    if(props.currentStep !== 2){
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="email">Username</label>
            <input 
                type="text" 
                className="form-control"
                id="username"
                name="username"
                placeholder="enter username"
                value={username}
                onChange={handleChange}
            />
        </div>
    )
}

export default Step2