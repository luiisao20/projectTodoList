<template>
    <table class="todo">
        <tr>
            <td>{{ title }}</td>
            <td>{{ description }}</td>
            <td>{{ date }}</td>
            <td>
                <button
                    @click="edit"
                >
                    <i class="fa-solid fa-pen-to-square"></i>
            </button>
                <button 
                    @click="remove"
                >
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </td>
        </tr>
    </table>
</template>

<script setup> 
const props = defineProps({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    }
});

const emit = defineEmits(['edit', 'remove']);

function edit(){
    emit('edit')
}

function remove(){
    emit('remove')
}
</script>

<style>
.todo {
    background-color: var(--accent-color);
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    margin-top: 20px;
}
td{
    width: 200px;
    text-align: center;
}
button{
    background-color: var(--accent-color);
    border: none;
    cursor: pointer;
}
button i {
    font-size: 30px;
    color: white;
}
</style>