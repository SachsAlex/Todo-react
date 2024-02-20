import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function markTodo(isDone) {
  const result = await api.put("/todos/mark", { params: { isDone } });

  const todo = result.data.todo;

  return todo;
}
async function updateTodo(todoId) {
  const result = await api.put("/todos/update", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}

async function deleteTodo(todoId) {
  const result = await api.delete("/todos/delete", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}

export default { createTodo, markTodo, updateTodo, deleteTodo };
