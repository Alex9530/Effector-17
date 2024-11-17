import { createStore, createEvent } from "effector";

export const addTodo = createEvent();

export const removeTodo = createEvent();

export const todoStore = createStore([])
  .on(addTodo, (state, todo) => [...state, todo])
  .on(removeTodo, (state, index) => state.filter((_, i) => i !== index));
