import React from "react";
import axios from "axios";
import {Jumbotron, Container, Badge} from "reactstrap"

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(value => {
                this.setState({users: [...value.data]})
            })
            .catch(reason => console.error(reason));
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3 text-center">Users</h1>
                        <p className="lead text-center">List of users from <Badge href="https://jsonplaceholder.typicode.com/" color="dark">JSONPlaceholder</Badge></p>
                    </Container>
                </Jumbotron>

            </div>
        )
    }
}

export default Users;