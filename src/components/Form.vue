<template>
    <div class="form">
        <h1>Add Todo</h1>
        <form class="addTodo">
            <label for="">Todo title</label>
            <input 
                :value="title" type="text" placeholder="Todo Title"
                @input="$emit('update:title', $event.target.value)"
            >
            <label for="">Todo Description</label>
            <input 
                :value="description" type="text" placeholder="Todo Description"
                @input="$emit('update:description', $event.target.value)"
            >
            <label for="">Todo Date</label>
            <input 
                :value="date" type="date" min="2019-01-01" max="2023-03-20"
                @input="$emit('update:date', $event.target.value)"
            >
            <div class="button" >
                <button 
                    @click.prevent="submit"
                >
                    <i class="fa-sharp fa-solid fa-circle-check" style="color: white;"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
defineProps({
    title:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    date:{
        required: true,
        type: String
    }
});

const emit = defineEmits(['update:title', 'update:description', 'update:date', 'submit']);

function submit(){
    emit('submit')
};
</script>

<style scoped>
.form {
    background-color: var(--navbar-color);
    padding: 20px;
    border-radius: 40px;
}

.addTodo {
    display: flex;
    flex-direction: column;
    font-size: 20px;
}

input {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
}

button {
    background-color: var(--navbar-color);
}

.button {
    text-align: end;
}

.fa-sharp {
    font-size: 40px;
}
</style>