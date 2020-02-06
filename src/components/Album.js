import React from "react";
import "./album.css"
import {Card, CardFooter, Col} from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class Album extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: ""
        }
    }


    componentDidMount() {
        console.log(this.props)
        axios.get(`/photos?albumId=${this.props.album.id}`)
            .then(response => {
                let thumbnailUrl = response.data[0].thumbnailUrl;
                this.setState({thumbnailUrl});
            })
    }

    render() {
        return (
            <Col sm={3} className="mb-3">
                <Card outline color="dark" style={{minHeight:"250px"}}>
                    <div className="hovereffect">
                        <img style={{margin:"0 auto"}} className="img-responsive" src={this.state.thumbnailUrl} alt=""/>
                        <div className="overlay">
                            <Link className="info" to={`/photos?albumId=${this.props.album.id}`}>View Album</Link>
                            {/*<a className="info" href="#">link here</a>*/}
                        </div>
                    </div>
                    <CardFooter>{this.props.album.title}</CardFooter>
                </Card>
            </Col>
        );
    }
}

export default Album;