import React from "react";
import {Badge, Container, Jumbotron, Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";

const ModelJumbotron = (props) => {
    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Main</NavbarBrand>
            </Navbar>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 text-center">{props.header}</h1>
                    <p className="lead text-center">{`${props.description} from`} <Badge
                        href="https://jsonplaceholder.typicode.com/" color="dark">JSONPlaceholder</Badge></p>
                </Container>
            </Jumbotron>
        </>
    );
};
export default ModelJumbotron;