
const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
// middlewares
app.use(cors())
app.use(express.json())
// routes
// createing a task
app.post('/task', async (req, res) => {
    try {
        const { name } = req.body;
        const newTask = await pool.query('insert into todo (name) values ($1) returning *', [name]);
        res.json(newTask.rows);
    } catch (error) {
        console.log(error)
    }

})
// get all task
app.get('/task', async (req, res) => {
    try {
        const allTasks = await pool.query('select * from todo order by todo_id');
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error)
    }
})

// get a tasks
app.get('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query('select * from todo where todo_id = $1', [id]);
        res.json(task.rows[0])
    } catch (error) {
        console.log(error)
    }
})

// update a task
app.put('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateTask = await pool.query('update todo set name = $1 where todo_id = $2', [name, id]);
        res.json("todo updated successfully");
    } catch (error) {
        console.log(error)
    }
})

// delete a task
app.delete('/task/:id', async (req, res) => {
    try {
        const {id} = req.params;            
        const deleteTask = await pool.query('delete from todo where todo_id = $1',[id]);
        res.json("task deleted successfully")
    } catch (error) {
        console.log(error)
    }
})



app.listen(5000, () => {
    console.log("server started on localhost 5000")
})