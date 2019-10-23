import React,{Component,Fragment} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



class MasterForm extends Component{

    next = () =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep >=2 ? 3: currentStep + 1
        this.setState({
            currentStep
        })
    }

    prev = () =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep
        })
    }

    previousButton = () =>{
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return(
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.prev}
                >
                    Previous
                </button>        
            )
        }
        return null
    }

    nextButton = () =>{
        let currentStep = this.state.currentStep;
        if(currentStep < 3){
            return(
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this.next}
                >
                    Next
                </button>        
            )
        }
        return null
    }

    constructor(props){
        super(props)

        this.state= {
            currentStep : 1,
            email:'',
            username : '',
            password: ''
        }
    }

    handleChange =(e)=>{
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    } 
    handleSubmit = (e) =>{
        e.preventDefault()
        const{email, username, password} = this.state
        alert(`Your registration details:
            Email:${email}
            Username:${username}
            Password:${password}
            `)
    }

    render(){
        const {email,username,password} = this.state
        return(
            <Fragment>
                <h1>A Wizard Form!</h1>
                <p>Step {this.state.currentStep}</p>

                <form onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={password}
                    />
                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </Fragment>
        )
    }
}

export default MasterForm