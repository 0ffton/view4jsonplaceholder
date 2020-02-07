import React from "react";
import {Badge, ListGroupItem, Modal, ModalBody, ModalFooter} from "reactstrap";
import axios from "axios";
import "./comment.css"
import {FaUserAstronaut, GoComment} from "react-icons/all";

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            comments: []
        }
    }

    toggle = () => {
        this.setState({isActive: !this.state.isActive})
    };

    componentDidMount() {
        axios.get(`/comments?postId=${this.props.post.id}`)
            .then(response => {
                const comments = response.data;
                this.setState({comments});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        return (
            <>
                <ListGroupItem tag="button" action onClick={this.toggle}>{this.props.post.title}</ListGroupItem>
                <Modal style={{maxWidth: "60%"}} isOpen={this.state.isActive} toggle={this.toggle}>
                    <ModalBody>
                        <h1 style={{borderBottom:"2px solid #a9aaad", paddingBottom:"10px", marginBottom:"25px"}}>{this.props.post.title}</h1>
                        <p className="lead">{this.props.post.body}</p>
                    </ModalBody>
                    <ModalFooter>
                        <div>
                            <h3 style={{marginBottom: "15px"}}>Comments <GoComment/></h3>
                            <div style={{marginLeft: "15px"}}>
                                {this.state.comments.map(comment => {
                                    return (

                                        <div key={comment.id} className="comment">
                                            <div className="header"><FaUserAstronaut/>{comment.name} <Badge
                                                color="dark">{comment.email}</Badge></div>
                                            <div className="comment-body">
                                                {comment.body}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Post;