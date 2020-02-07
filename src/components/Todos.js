import React from "react";
import axios from "axios";
import {Card, CardBody, Container, ListGroup} from "reactstrap";
import ModelJumbotron from "./ModelJumbotron";
import TodoItem from "./TodoItem";

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }


    componentDidMount() {
        axios.get(this.props.match.url + this.props.location.search)
            .then(response => {
                let todos = response.data;
                this.setState({todos});
            })
            .catch(reason => console.error(reason));
    }

    render() {
        return (
            <>
                <ModelJumbotron header="Todos" description="List of todos"/>
                <Container>
                    <Card>
                        <CardBody>
                            <ListGroup>
                                {this.state.todos.map(todo => {
                                    return (
                                        <TodoItem key={todo.id} completed={todo.completed} title={todo.title}/>
                                    );
                                })}
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }

}

export default Todos;