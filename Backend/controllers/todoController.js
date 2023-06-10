const {Todos} = require("../models")

const addTodo = async(req, res)=>{
    const todo = req.body;
    try{
        await Todos.create(todo);
        res.json({
            msg: "You Added Your Task",
            todo: todo
        });
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getTodos = async(req, res)=>{
    try{
        const listOfTodos = await Todos.findAll();
        res.json(listOfTodos);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteTodo = async(req, res) =>{
    const todoID = req.params.id;

    try{
        const deletedTodo = await Todos.destroy({
            where: {id: todoID}
        })
        const listOfTodos = await Todos.findAll();

        if (deletedTodo) {
            res.json({
                msg: "You Have Deleted Your Task",
                todo: listOfTodos
            });
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    addTodo,
    getTodos,
    deleteTodo
};