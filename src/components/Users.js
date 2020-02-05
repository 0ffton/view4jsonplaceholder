import React from "react";
import axios from "axios";
import {Jumbotron, Container, Badge, ListGroup} from "reactstrap";
import User from "./User"

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            activeUserId: 0
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(value => {
                this.setState({users: [...value.data]})
            })
            .catch(reason => console.error(reason));
    }

    setActiveUserId = id => {
        this.setState({activeUserId: id});
    };

    render() {

        const userList = this.state.users.map(user => <User key={user.id} isOpen={this.state.activeUserId===user.id} visibilityHandler={this.setActiveUserId} user={user}/>);

        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3 text-center">Users</h1>
                        <p className="lead text-center">List of users from <Badge
                            href="https://jsonplaceholder.typicode.com/" color="dark">JSONPlaceholder</Badge></p>
                    </Container>
                </Jumbotron>
                <Container>
                    <ListGroup>
                        {userList}
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Users;