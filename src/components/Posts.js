import React from "react";
import ModelJumbotron from "./ModelJumbotron";
import axios from "axios";
import {Container, ListGroup} from "reactstrap";
import Post from "./Post";

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url + this.props.location.search)
            .then(response => {
                this.setState({posts: [...response.data]});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        const posts = this.state.posts.map(post => <Post key={post.id} post={post}/>);
        return (
            <div>
                <ModelJumbotron header="Posts" description="List of post"/>
                <Container>
                    <ListGroup>
                        {posts}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default Posts;