import React from 'react';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            new_post: '',
            title: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e,keyname) {
        this.setState({
            [keyname]: e.target.value,
        })
    }
    handleClick() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.new_post,
                userId: 1
            }),
            headers: {
                "content-type" : "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json =>console.log(json))
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    posts: data,
                })
                console.log(this.state.posts)
            })
            .catch(console.log)
    }
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.new_post} onChange = {(e) => {this.handleChange(e,'new_post')}}/>
                <input type = "text" value = {this.state.title} onChange = {(e) => {this.handleChange(e,'title')}}/>
                <button onClick = {this.handleClick}>ADD</button>
                {this.state.posts.map((post) => (
                    <div>
                        <li>{post.title}</li>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}
export default Dashboard;