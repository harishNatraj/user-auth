import React, {Component} from 'react';
export default function(WrappedComponent) {
    return class Auth extends Component {
        componentDidMount() {
            const user_data = localStorage.getItem('token');
            if (!user_data) {
                this.props.history.push('/sign-in')
            }
        }
        render() {
            console.log({...this.props})
            return(
                <WrappedComponent {...this.props} />
            )
        }

    }
}


















/*function Auth(WrappedComponent,props) {
    const[user_data, setData] = useState('');
    useEffect(() => {
        setData(localStorage.getItem('token'));
        if (!user_data) {
            props.history.push('/sign-in')
        }
    },[user_data,props.history]);
    return(
        <WrappedComponent {...props} />
    )
}
export default Auth;*/















/*function HOC(WrappedComponent) {
        const user_data = JSON.parse(localStorage.getItem('token'));
        if (user_data !== this.props.username) {
            this.props.history.push('/sign-in')
        }
        return(
            <WrappedComponent {...this.props} />
        )
}

export default HOC;*/