<template>
    <div class="list-group" v-if="completedTodos.length || notCompletedTodos.length">
        <template v-if="notCompletedTodos.length">
            <p>В процессе</p>
            <todo-item v-for="todo in notCompletedTodos" :todo="todo" :key="todo.id" />
        </template>
        <template v-else>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Все задачи выполнены</h5>
                    <p class="card-text">Скорее, добавь новую задачу, чтобы ничего не забыть</p>
                </div>
            </div>
        </template>

        <template v-if="completedTodos.length">
            <p class="mt-3 ">Выполненные задачи</p>
            <todo-item v-for="todo in completedTodos" :todo="todo" :key="todo.id" />
        </template>
    </div>
    <div v-else class="card">
        <div class="card-body">
            <h5 class="card-title">Нет задач</h5>
            <p class="card-text">Скорее, добавь первую задачу, чтобы ничего не забыть</p>
        </div>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
    components: {
        TodoItem
    },
    computed: {
        completedTodos: function () {
            return this.$store.getters.completedTodos
        },
        notCompletedTodos: function () {
            return this.$store.getters.notCompletedTodos
        }
    }
}
</script>