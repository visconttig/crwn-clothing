import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // reset fields
        this.setState({
            email: "",
            password: ""
        });
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    
                <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    required 
                    label="email"
                    />
                    
                    <FormInput 
                    name="password" 
                    type="password"
                    required 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn;