<template>
    <div 
        v-if="show" 
        class="alert" 
        :style="{ backgroundColor }"
    >
        <div class="message">{{ message }}</div>
        <div @click="close" class="close-alert">&times;</div>
    </div>
</template>

<script setup>
import { useBackgroundColor, backgroundColorProps } from '../composables/backgroundColor';

const props = defineProps({
    message: {
        required: true,
        type: String
    },
    show: {
        required: true,
        type: Boolean
    },
    ...backgroundColorProps
});

const emit = defineEmits(['close'])

const backgroundColor = useBackgroundColor(props)

function close(){
    emit('close');
}

</script>

<style scoped>
.alert {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 20px 0 20px;
    border-radius: 10px;
    height: 50px;
    background-color: var(--danger-color);
}
.close-alert {
    cursor: pointer;
    font-size: 50px;
}
.message{
    margin-left: 30px;
    font-size: 20px;
}
</style>