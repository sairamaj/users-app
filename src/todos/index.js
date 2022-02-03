import React from 'react';

class ToDo extends React.Component {
    render() {
        return (
            <tr>
                <td><label>{this.props.todo.Name}</label></td>
                <td><label>{this.props.todo.DueDate}</label></td>
                <td><label>{this.props.todo.Status}</label></td>
            </tr>
        )
    }
}

class ToDoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            todos: []
        }
    }
    componentDidMount() {
        const apiUrl = 'https://0rd4fxo8bc.execute-api.us-west-2.amazonaws.com/prod/users/todos';
        fetch(apiUrl)
            .then(async (response) => {
                this.setState({ loading: false, todos: await response.json() });
            });
    }

    render() {
        if (this.state.loading) {
            return (<label>loading...</label>)
        }
        else {
            return (
                <div>
                    {/* <Link to="foo" className="btn btn-sm btn-success mb-2">Add Contact</Link> */}
                    <table align='center'>
                        <th>Name</th>
                        <th>DueDate</th>
                        <th>Status</th>
                        {this.state.todos.map((item) =>
                            <ToDo todo={item} />
                        )}
                    </table>
                </div>
            )
        }
    }
}

export { ToDoContainer };