const mongoose = require("mongoose");


// mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")
mongoose.connect("mongodb+srv://khachaneks22:cfniXIo6NgmPfNsG@cluster0.j1jf3qh.mongodb.net/tododb")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}


