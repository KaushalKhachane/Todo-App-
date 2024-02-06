const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")

const app = express();
app.use(cors())
const PORT = 3000

app.use(express.json())

app.post('/todo', async (req, res) => {
    const createPlayload = req.body;
    const parsedPlayload = createTodo.safeParse(createPlayload)

    if(!parsedPlayload.success){
        res.status(400).json({ 
            msg: "You Sent the wrong input"
        })
        return
    } 
    //stored in mongo atlas
    await todo.create(({
        title: createPlayload.title,
        description: createPlayload.description,
        completed: false
    }))

    res.json("todo created")
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({ 
        todos: [todos]
    })
})

app.put('/completed', async  (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})  

app.listen(PORT, () => {
    console.log("Server Listining on port 3000!")
})