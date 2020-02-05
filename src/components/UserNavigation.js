import React from "react";
import {Link} from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";

class UserNavigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: "2.5rem"}}>
                <Nav vertical>
                    <NavItem>
                        <NavLink tag={Link} to={`/users/${this.props.userId}/posts`}>Posts</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default UserNavigation;