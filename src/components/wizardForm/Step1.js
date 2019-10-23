import React from 'react';

const Step1 = (props) =>{

    const {email,handleChange} = props
    if(props.currentStep !== 1){
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="text" 
                className="form-control"
                id="email"
                name="email"
                placeholder="enter email"
                value={email}
                onChange={handleChange}
            />
        </div>
    )
}

export default Step1