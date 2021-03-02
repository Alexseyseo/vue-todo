import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 4,
    todos: [
      {
        id: 1,
        isComplete: false,
        text: 'Прописать финансовые цели',
      },
      {
        id: 2,
        isComplete: false,
        text: 'Сдать домашку первого модуля курса "Капитал"',
      },
      {
        id: 3,
        isComplete: true,
        text: 'Приготовить ужин',
      },
      {
        id: 4,
        isComplete: false,
        text: 'Сдать домашку второго модуля курса "Капитал"',
      },
    ],
  },
  getters: {
    allTodos: state => state.todos.sort((a,b) => a.isComplete === b.isComplete ? 0 : (a.isComplete ? 1 : -1) ),
    completedTodos: state => state.todos.filter(todo => todo.isComplete),
    notCompletedTodos: state => state.todos.filter(todo => !todo.isComplete)
  },
  mutations: {
    addTodo: (state, text) => {
      state.todos.push({
        id: state.count += 1,
        isComplete: false,
        text,
      })
    },
    editTodo: (state, payload) => {
      const index = state.todos.findIndex(todo => todo.id === payload.todo.id);
      state.todos[index] = {
        ...payload.todo,
        text: payload.value
      }
      state.todos = state.todos.map(todo => {

        return todo
      })
    },
    toggleTodo: (state, payload) => {
      const index = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos[index].isComplete = payload.value
    },
    removeTodo: (state, removeTodo) => {
      state.todos.splice(state.todos.findIndex(todo => todo.id === removeTodo.id), 1)
    }
  }
})
