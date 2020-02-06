import React from "react";
import axios from "axios";
import {Container, Row} from "reactstrap";
import Album from "./Album";
import ModelJumbotron from "./ModelJumbotron";

class Albums extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url + this.props.location.search)
            .then(albumResult => {
                let albums = albumResult.data;
                this.setState({albums});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        return (
            <>
                <ModelJumbotron header="Albums" description="List of albums"/>
                <Container>
                    <Row>
                        {this.state.albums.map(album => <Album key={album.id} album={album}/>)}
                    </Row>
                </Container>
            </>
        );
    }

}

export default Albums;