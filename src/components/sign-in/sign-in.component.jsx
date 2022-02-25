import React from "react";
import "./sign-in.styles.scss";

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

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <label>Email</label>
                    <input name="email" type="email" 
                    value={this.state.email} required />
                    <label>Password</label>
                    <input name="password" type="password"
                    required value={this.state.password} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}