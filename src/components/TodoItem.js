import React from "react";
import {Badge, ListGroupItem} from "reactstrap";

class TodoItem extends React.Component {
    render() {
        let badgeColor = this.props.completed ? "success" : "warning";
        let badgeText = this.props.completed ? "Done" : "Pending";
        let completedItemStyle = this.props.completed ? {textDecoration: "line-through"} : {};
        return (
            <ListGroupItem disabled={this.props.completed} style={completedItemStyle}>
                <Badge color={badgeColor}>{badgeText}</Badge> {this.props.title}
            </ListGroupItem>
        );
    }
}

export default TodoItem;