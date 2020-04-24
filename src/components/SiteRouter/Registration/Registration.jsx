import './Registration.scss';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Input from './Input/input.jsx'
import Button from './Button/button.jsx'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(Password) {
    const pe = /[A-Za-zА-Яа-яЁё0-9]/;
    return pe.test(String(Password).toLowerCase());
}

export default class Registration extends Component {

    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                type: 'name',
                label: 'Name',
                errorMessage: 'Введите корректное имя',
                valid: false,
                touched: false,
                validation: {
                    reqired: true,
                    minLength: 2
                }
            },
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    reqired: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    reqired: true,
                    minLength: 8,
                    password: true
                }
            }
        }
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        if (validation.password) {
            isValid = validatePassword(value) && isValid
        }

        return isValid
    }
    
    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })
        
        this.setState({
            formControls, isFormValid
        })
    }

    submitHandler = event => {
        event.preventDefault()
    }
    
    renderInputs() {
        return Object.keys(this.state.formControls).map ((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input 
                    key={controlName + index}
                    type={control.type}
                    value={control.vulue}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <>
                <div className="registration">
                    <div className="registration__wrapper">
                        <h1><Link to="/">TaskUp</Link></h1>
                        <div className="registration-field">
                            <h2>Sign up</h2>
                            { this.renderInputs() }
                            <div class="registration-social">
                                <a href="#">
                                    <img src="../../../miscellaneous/img/facebook-icon.png" alt=""></img>
                                </a>
                                <a href="#">
                                    <img src="../../../miscellaneous/img/google-icon.png" alt=""></img>
                                </a>
                                <a href="#">
                                    <img src="../../../miscellaneous/img/telegram-icon.png" alt=""></img>
                                </a>
                                <a href="#">
                                    <img src="../../../miscellaneous/img/vkontakte-icon.png" alt=""></img>
                                </a>
                            </div>
                            <Button disabled={!this.state.isFormValid}>Sign up</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}