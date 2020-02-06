import React from "react";
import {Link} from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";

class UserNavigation extends React.Component {
    render() {
        return (
            <div style={{padding: "2.5rem"}}>
                <Nav vertical>
                    <NavItem>
                        <NavLink tag={Link} to={`/posts?userId=${this.props.userId}`}>Posts</NavLink>
                        <NavLink tag={Link} to={`/albums?userId=${this.props.userId}`}>Albums</NavLink>
                        <NavLink tag={Link} to={`/todos?userId=${this.props.userId}`}>Todos</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default UserNavigation;