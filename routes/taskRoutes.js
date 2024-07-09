const express = require('express')
const router = express.Router()
const {getAllData, addNewTaskData, getTaskById, deleteTask, updateTask} = require("../controllers/taskController")

router.get("/allTask",getAllData)
router.post("/addTask", addNewTaskData)
router.get("/:id",getTaskById)
router.put("/updateTask", updateTask)
router.delete("/deleteTask/:id", deleteTask)

module.exports = router