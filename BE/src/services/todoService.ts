import { createTask, getTodos, getUserTodoList, getUserIdByTodo, updateTodo, deleteTodo } from "../dao/todoDao";


async function createTodoService(todoTask: string, todoPriority: string, todoDue: string, userId: number) {
    try {

        const post = await createTask(todoTask, todoPriority, todoDue, userId);
        return post;
    } catch (error: any) {
        throw new Error('Error registering ToDo service: ' + error.message);
    }
}

async function getTodoService() {
    try {
        const post = await getTodos();
        return post;
    } catch (error: any) {
        throw new Error('Error get ToDo service all: ' + error.message);
    }
}

async function getUserTodoListService(username: string) {
    try {
        const post = await getUserTodoList(username);
        return post;
    } catch (error: any) {
        throw new Error('Error get ToDo service: ' + error.message);
    }
}

async function getUserIdByTodoIdService(postId: number) {
    try {
        const userId = await getUserIdByTodo(postId)
        return userId
    } catch (error: any) {
        throw new Error('Error getting ToDo id by post id service: ' + error.message);
    }
}

async function updateTodoService(todoTask: string, todoPriority: string, todoDue: string, todoId: number) {
    try {
        const todo = await updateTodo(todoTask, todoPriority, todoDue, todoId)
        return todo;
    } catch (error: any) {
        throw new Error('Error updating ToDo service: ' + error.message);
    }
}

async function deleteTodoService(post_id: number) {
    try {
        const todo = await deleteTodo(post_id)
        return todo;
    } catch (error: any) {
        throw new Error('Error delete ToDo service: ' + error.message);
    }
}

export { createTodoService, getTodoService, getUserTodoListService, getUserIdByTodoIdService, updateTodoService, deleteTodoService }