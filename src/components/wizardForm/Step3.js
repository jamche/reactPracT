import React from 'react';

const Step3 = (props) =>{

    const {password,handleChange} = props
    if(props.currentStep !== 3){
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="text" 
                className="form-control"
                id="password"
                name="password"
                placeholder="enter password"
                value={password}
                onChange={handleChange}
            />
        </div>
    )
}

export default Step3