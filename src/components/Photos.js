import React from "react";
import axios from "axios";
import ModelJumbotron from "./ModelJumbotron";
import {Col, Container, Row} from "reactstrap";

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url + this.props.location.search)
            .then(respons => {
                let photos = respons.data;
                this.setState({photos});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        return (
            <>
                <ModelJumbotron header="Photos" description="List of photos"/>
                <Container fluid>
                    <Row sm="6">
                        {this.state.photos.map(photo => {
                            return (
                                <Col key={photo.id} className="mb-2">
                                    <img src={photo.url} width="300px" height="300px" alt=""/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        );
    }

}

export default Photos;