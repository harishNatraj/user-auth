import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import {reactLocalStorage} from 'reactjs-localstorage';
/*class SignUp extends React.Component {
    user_data;
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            email_id: '',
            password: '',
            confirm_password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(keyname, e) {
        this.setState({
            [keyname]: e.target.value,
        });
    }
    handleSubmit() {
        if (this.state.user_name === '' || this.state.email_id === '' || this.state.password === '' || this.state.confirm_password === '') {
            alert('Fields cannot be left empty')
        } else {
            if (localStorage.getItem([this.state.email_id])) {
                alert('Email id already registered')
            } else {
                const userObj = {
                    name: this.state.user_name,
                    password: this.state.password
                }
                const obj = JSON.stringify(userObj);
                if (this.state.password === this.state.confirm_password) {
                    localStorage.setItem([this.state.email_id], obj);
                    alert('Sign up successfull')
                    return (
                        this.props.history.push('/sign-in')
                    )

                } else {
                    alert('passwords do not match')
                }
            }
            this.setState({
                user_name: '',
                email_id: '',
                password: '',
                confirm_password: '',
            })
        }

    }
    render() {
        return (
            <div className="signup-form">
                <h1><span className="title">SIGNUP</span></h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter username" value={this.state.value} onChange={(e) => this.handleChange('user_name', e)} />
                    <input type="email" placeholder="Enter email id" value={this.state.value} onChange={(e) => this.handleChange('email_id', e)} />
                    <input type="password" placeholder="Enter password" value={this.state.value} onChange={(e) => this.handleChange('password', e)} />
                    <input type="password" placeholder="Confirm password" value={this.state.value} onChange={(e) => this.handleChange('confirm_password', e)} />
                    <button className="button">SIGNUP</button><Link to="/sign-in">ALREADY A USER</Link>
                </form>

            </div>
        )
    }
}*/
function SignUp(props) {
    const[user_name, setName] = useState('');
    const[email_id, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirm_password, setConfirmPassword] = useState('');
    function handleSubmit() {
        if (user_name === '' || email_id === '' || password === '' || confirm_password === '') {
            alert('Fields cannot be left empty')
        } else {
            if (localStorage.getItem(email_id)) {
                alert('Email id already registered')
            } else {
                const userObj = {
                    name: user_name,
                    password: password
                }
                const obj = JSON.stringify(userObj);
                if (password === confirm_password) {
                    localStorage.setItem(email_id, obj);
                    alert('Sign up successfull')
                    return (
                        props.history.push('/sign-in')
                    )

                } else {
                    alert('passwords do not match')
                }
            }
        }

    }
    return (
        <div className="signup-form">
            <h1><span className="title">SIGNUP</span></h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username" value={user_name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter email id" value={email_id} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="button">SIGNUP</button><Link to="/sign-in">ALREADY A USER</Link>
            </form>
        </div>

    )
}


export default SignUp;