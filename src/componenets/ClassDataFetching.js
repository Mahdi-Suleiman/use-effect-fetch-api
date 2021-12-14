import React from "react";
import { Component } from "react/cjs/react.production.min";

class ClassDataFetching extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: []
        })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("response", response);
                return response.json()
            })
            .then(data => {
                // console.log(data)
                this.setState({ posts: data })
                console.log("posts", this.state.posts);
            });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map((post) => {
                        return <li>{post.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ClassDataFetching