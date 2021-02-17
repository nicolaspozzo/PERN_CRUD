import React from 'react'
import axios from 'axios'
import EditTask from './editTask'


class ListTask extends React.Component {

    state = {
        tasks: []
    }
    getTasks = () => {
        try {
            axios.get('http://localhost:5000/task')
                .then(res => {
                    this.setState({ tasks: res.data })
                    console.log(this.state.tasks)
                })
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount = () => {
        this.getTasks();
    }
    deleteTask = (e) => {
        try {
            axios.delete(`http://localhost:5000/task/${e}`)
                .then(res => {
                    console.log(res)
                })
            this.setState({ task: this.state.tasks.filter(task => task.todo_id != e) })
            // refrescar lista
            this.getTasks()
            window.location = '/'

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>TASK</th>
                            <th>UPDATE</th>
                            <th>DELITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(task => (
                                <tr key={task.todo_id} >
                                    <td>{task.name}</td>
                                    <td>
                                        <EditTask task={task} />
                                    </td>
                                    <td><button className="btn btn-outline-danger"
                                        onClick={() => this.deleteTask(task.todo_id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTask;