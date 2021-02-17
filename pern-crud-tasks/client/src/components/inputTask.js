
import React from 'react'
import './inputTask.css'
import img from '../images/working02.png'
import axios from 'axios'

class InputTask extends React.Component {

    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.task != '') {
            axios.post('http://localhost:5000/task', { name:this.state.task })
                .then(res => {
                    console.log(res)
                    this.setState({ task: '' })
                })
                // para refrescar la pagina
                window.location = '/'
        }
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-md-4">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        {/* <form > */}
                        <input className="form-control mt-5 ml-5 textbox"
                            name="task"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.task}
                            placeholder="Enter a task " />
                        <button type="submit"
                            className="btn btn-outline-primary mt-2">ADD TASK</button>
                        {/* <img src={ } style={{}} /> */}
                    </form>
                </div>
                <div className="col-md-8">
                    <img src={img} style={{ width: "400px", height: "350px" }} />
                </div>

            </div>
        )
    }
}

export default InputTask;