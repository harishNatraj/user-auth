import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
/*class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_id: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(keyname, e) {
        this.setState({
            [keyname]: e.target.value,
        })
    }
    handleSubmit() {
        const user = localStorage.getItem([this.state.email_id])
        const user_obj = JSON.parse(user);
        const e = "invalid"
        try {
            if (!user) {
                throw e;
            } else {
                if (user_obj.password !== this.state.password) {
                    throw e;
                } else {
                    localStorage.setItem('token', user_obj.name);
                    return (
                        <div>
                            {this.props.history.push({
                                pathname: '/dashboard',
                                state: {
                                    username: user_obj.name,
                                }
                            })}
                        </div>)
                }
            }
        }
        catch (err) {
            alert(err);
        }
    }
    render() {
        return (
            <div className="signin-form">
                <h1><span className="title">SIGNIN</span></h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Enter email" onChange={(e) => this.handleChange('email_id', e)} />
                    <input type="password" placeholder="Enter password" onChange={(e) => this.handleChange('password', e)} />
                    <button className="button">SIGNIN</button>
                    <Link to="/sign-up">NEW USER?</Link>
                </form>
            </div> 
        )
    }
}
export default SignIn;*/
function SignIn(props) {
    const[email_id, setEmail] = useState('');
    const[password, setPassword] = useState('');
    function handleSubmit() {
        console.log(email_id);
        const user = localStorage.getItem(email_id)
        const user_obj = JSON.parse(user);
        const e = "invalid"
        try {
            console.log(user_obj)
            if (!user) {
                throw e;
            } else {
                if (user_obj.password !== password) {
                    throw e;
                } else {
                    localStorage.setItem('token', user_obj.name);
                    return (
                        <div>
                            {props.history.push({
                                pathname: '/dashboard',
                                state: {
                                    username: user_obj.name,
                                }
                            })}
                        </div>)
                }
            }
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <div className="signin-form">
            <h1><span className="title">SIGNIN</span></h1>
            <form >
                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <button className="button" onClick={handleSubmit}>SIGNIN</button>
                <Link to="/sign-up">NEW USER?</Link>
            </form>
        </div> 
    )
}
export default SignIn;