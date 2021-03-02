<template>
    <label :class="classes">
        <template v-if="!editMode">
            <input :checked="todo.isComplete" class="form-check-input me-2" type="checkbox" @input="toggleTodo($event.target.checked)">
            <span class="me-auto">{{ todo.text }}</span>
            <button class="btn btn-outline-secondary btn-sm me-1" type="button" @click.prevent="editMode = true">Редактировать</button>
            <button class="btn btn-outline-secondary btn-sm" type="button" @click.prevent="removeTodo">x</button>
        </template>
        <template v-else>
            <div class="input-group">
                <input
                    v-model.trim="editedValue"
                    @keyup.enter="editTodo"
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Введите описание задачи..."
                >
                <button class="btn btn-outline-primary btn-sm" type="button" @click.prevent="editTodo">Сохранить</button>
                <button class="btn btn-outline-secondary btn-sm" type="button" @click.prevent="cancelEdit">Отмена</button>
            </div>
        </template>
    </label>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
        },
    },
    data: function () {
        return {
            editMode: false,
            editedValue: this.todo.text,
        }
    },
    methods: {
        toggleTodo: function (val) {
            this.$store.commit('toggleTodo', {
                id: this.todo.id,
                value: val
            })
        },
        editTodo: function () {
            if (!this.editedValue) return;

            this.$store.commit('editTodo', {
                todo: this.todo,
                value: this.editedValue
            })

            this.editMode = false;
        },
        removeTodo: function () {
            this.$store.commit('removeTodo', this.todo)
        },
        cancelEdit: function () {
            this.editMode = false;
            this.editedValue = this.todo.text;
        }
    },
    computed: {
        classes() {
            return {
                'list-group-item': true,
                'list-group-item-secondary': this.todo.isComplete,
                'd-flex': true,
                'align-items-center': true
            }
        }
    }
}
</script>