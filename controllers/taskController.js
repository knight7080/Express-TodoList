const { json } = require("express");
const data = require("../data/taskData")
const fs = require("fs")

const getAllData = (req, res) =>{
    res.status(200).json(data);
}

const addNewTaskData = (req,res) =>{
    const {id} = req.body
    data.map(iterator => {
        if (iterator.id === id) {
                return res.status(200).json({message : "Duplicate Data"})
        }
    })
    data.push(req.body)
    // fs.writeFileSync("../exp-d2-assignement/data/taskData.js",JSON.stringify(data))
    return res.status(200).json({message: "Added Successfully :)"})
}

const getTaskById = (req,res) =>{
    const id = req.params.id
    const taskIndex = data.findIndex(task => task.id === id)
    return res.status(200).json(data[taskIndex])
}

const updateTask = (req, res) =>{
    const {id, task, status} = req.body
    const taskIndex = data.findIndex(task => task.id === id)
    data[taskIndex].task = task
    data[taskIndex].status = status
    return res.status(200).json(data[taskIndex])

}

const deleteTask = (req, res) =>{
    const id = req.params.id;
    console.log(typeof(id))

    const taskIndex = data.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        data.splice(taskIndex, 1);
            return res.status(200).json({ message: `Task with ID ${id} deleted successfully.` });
    } 
    else {
            return res.status(404).json({ message: `Task with ID ${id} not found.` });
    }
}

module.exports = {getAllData, addNewTaskData, getTaskById, deleteTask, updateTask}