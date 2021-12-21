import { connect } from "./connection"

export const getTodos = async () => {
  try {
    const { conn, Todo } = await connect()
    return await Todo.find({})
  } catch (error) {
    return { error: "Error in getTodos function" }
  }
}

export const getTodo = async (id) => {
  try {
    const { conn, Todo } = await connect()
    return await Todo.findById(id)
  } catch (error) {
    return { error: "Error in getTodo function" }
  }
}

export const createTodo = async (newTodo) => {
  try {
    const { conn, Todo } = await connect()
    return await Todo.create(newTodo)
  } catch (error) {
    return { error: "Error in createTodo function" }
  }
}

export const updateTodo = async (updatedTodo, id) => {
  try {
    const { conn, Todo } = await connect()
    return await Todo.findByIdAndUpdate(id, updatedTodo, { new: true })
  } catch (error) {
    return { error: "Error in updateTodo function" }
  }
}

export const destroyTodo = async (id) => {
  try {
    const { conn, Todo } = await connect()
    return await Todo.findByIdAndRemove(id)
  } catch (error) {
    return { error: "Error in destroyTodo function" }
  }
}