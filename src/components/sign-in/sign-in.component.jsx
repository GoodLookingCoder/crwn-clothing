import React, { Component } from 'react'

import "./sign-in-styles.scss"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import {auth, signInWithGoogle } from "../../firebase/firebase.utils"

export default class SignIn extends Component {
    constructor(){
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: "", password: ""})
        }catch(error){
            console.log(error)
        }
    }

    handleChange = e => {
        const {value, name} = e.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="email" 
                        name="email"
                        label="Email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>  
                    </div>
                    
                </form>
            </div>
        )
    }
}
