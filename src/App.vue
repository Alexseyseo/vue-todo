<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <todo-input />
            </div>
            <div class="col-12">
                <todo-list />
            </div>
        </div>
    </div>
</template>

<script>

import TodoList from '@/components/TodoList';
import TodoInput from '@/components/TodoInput';

export default {
  components: {
      TodoList,
      TodoInput
  }
}
</script>
