import React from 'react'
import axios from 'axios'

class EditTask extends React.Component {

    state = {
        // task_id: this.props.task.todo_id,
        task_id: '',
        task_name: this.props.task.name
    }
    handleChange = (e) => {
        this.setState({ task_name: e.target.value })
    }
    handleUpdate = (e) => {
        e.preventDefault()
        try {
            axios.put(`http://localhost:5000/task/${this.state.task_id}`, { name: this.state.task_name })
                .then(res => {
                    console.log(res)
                })
            // refrescar pagina
            window.location = '/'
            
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        if (this.state.task_id == '') {
            this.setState({ task_id: this.props.task.todo_id, task_name: this.props.task.name })
        }
        return (
            <div class="container">


                <button type="button" className="btn btn-outline-warning" data-toggle="modal"
                    data-target={`#ìd${this.props.task.todo_id}`}>
                    Edit
                </button>

                <div class="modal"
                    id={`ìd${this.props.task.todo_id}`}>
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Edit Task</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <input className="form-control"
                                    name="task"
                                    value={this.state.task_name}
                                    onChange={(e) => this.handleChange(e)}
                                    style={{ whidth: "200px" }} />
                            </div>


                            <div class="modal-footer">
                                <button className="btn btn-outline-warning"
                                    onClick={(e) => this.handleUpdate(e)} >Update</button>
                                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditTask;