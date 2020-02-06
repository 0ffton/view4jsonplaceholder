import React from "react";
import ModelJumbotron from "./ModelJumbotron";
import axios from "axios";

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url+this.props.location.search)
            .then(response => {
                this.setState({posts: [...response.data]});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        const posts = this.state.posts.map(post => <li key={post.id}>{post.title}</li>)
        return (
            <div>
                <ModelJumbotron header="Posts" description="List of post"/>
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default Posts;