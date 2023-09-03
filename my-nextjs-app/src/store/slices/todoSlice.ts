import type { AppState } from "@/store";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: { title: string; description: string; resolved: boolean };
};

const initialState: Todo[] = [
  {
    id: "1",
    type: "special",
    position: { x: 0, y: 0 },
    data: { title: "Add your first task", description: "", resolved: false },
  },
];

const slice = createSlice({
  name: "todosState",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateResolved: (
      state,
      action: PayloadAction<{ id: string; resolved: boolean }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.data.resolved = action.payload.resolved;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateResolved } =
  slice.actions;
export default slice.reducer;

export const getTodos = (state: AppState) => state.todosState;

export const getResolvedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo: Todo) => todo.data.resolved)
);

export const getResolvedTodosCount = createSelector(
  getTodos,
  (todos) => todos.filter((todo: Todo) => todo.data.resolved).length
);
