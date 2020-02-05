import React from "react";
import {
    Badge,
    Card,
    CardBody,
    CardLink,
    CardText,
    Col,
    Collapse,
    ListGroupItem,
    Row
} from "reactstrap";
import UserNavigation from "./UserNavigation";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    collapseCard = () => {
        this.props.visibilityHandler(this.props.user.id);
        this.setState({isOpen: !this.state.isOpen})
    };

    onExited = () => {
        if (!this.props.isOpen) {
            this.setState({isOpen: false})
        }
    };

    render() {
        return (
            <>
                <ListGroupItem active={this.props.isOpen && this.state.isOpen} onClick={this.collapseCard} tag="button"
                               action>{this.props.user.name}</ListGroupItem>
                <Collapse isOpen={this.props.isOpen && this.state.isOpen} onExited={this.onExited}>
                    <Row>
                        <Col>
                            <UserNavigation userId={this.props.user.id}/>
                        </Col>
                        <div style={{margin: "10px 0 10px 0", width: "1px", backgroundColor: "#117a8b"}}/>
                        <Col>
                            <Card body outline color="white">
                                <CardBody>
                                    <CardText
                                        style={{textDecoration: "underline", textUnderlinePosition: "under"}}><Badge
                                        onClick={this.fade} color="dark">Username</Badge> {this.props.user.username}
                                    </CardText>
                                    <CardText
                                        style={{textDecoration: "underline", textUnderlinePosition: "under"}}><Badge
                                        color="dark">Email</Badge> {this.props.user.email}</CardText>
                                    <CardText
                                        style={{textDecoration: "underline", textUnderlinePosition: "under"}}><Badge
                                        color="dark">Address</Badge> {this.props.user.address.city}</CardText>
                                    <CardText
                                        style={{textDecoration: "underline", textUnderlinePosition: "under"}}><Badge
                                        color="dark">Phone number</Badge> {this.props.user.phone}</CardText>
                                    <CardText
                                        style={{textDecoration: "underline", textUnderlinePosition: "under"}}><Badge
                                        color="dark">Company</Badge> {this.props.user.company.name}</CardText>
                                    <CardLink href={this.props.user.website}><Badge
                                        color="dark">Website</Badge> {this.props.user.website}</CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Collapse>
            </>
        )
    }
}

export default User;