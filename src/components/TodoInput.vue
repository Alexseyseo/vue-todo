<template>
    <div class="mb-3">
        <div class="input-group">
            <input
                v-model.trim="newTodo"
                @keyup.enter="addTodo"
                type="text"
                class="form-control"
                placeholder="Введите описание задачи..."
            >
            <button class="btn btn-primary" type="button" @click="addTodo">Добавить</button>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        newTodo: ''
    }),
    methods: {
        addTodo: function () {
            if (!this.newTodo) return;
            this.$store.commit('addTodo', this.newTodo);
            this.newTodo = '';
        }
    }
}
</script>