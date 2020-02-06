import React from "react";
import axios from "axios";
import {Container, ListGroup} from "reactstrap";
import User from "./User"
import ModelJumbotron from "./ModelJumbotron";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            activeUserId: 0
        }
    }

    componentDidMount() {
        axios.get("/users")
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
                <ModelJumbotron header="Users" description="List of users"/>
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