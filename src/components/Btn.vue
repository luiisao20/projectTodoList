<template>
    <button
        class="btn"
        :style="{ backgroundColor }"
        :class="{ circular: applyCircleClass }"
    >
        <slot />
    </button>

</template>

<script setup>
import { backgroundColorProps, useBackgroundColor } from '../composables/backgroundColor';
import { computed } from '@vue/reactivity';

const props = defineProps({
    circle: {
        default: false,
        type: Boolean
    },
    ...backgroundColorProps,
    padding: {
        default: true,
        type: false
    }
})

const backgroundColor = useBackgroundColor(props);

const applyCircleClass = computed(() => {
    return props.circle;
})
</script>

<style scoped>
.btn {
    color: var(--text-color);
    border: none;
    cursor: pointer;
}
.circular{
    border-radius: 50%;
}
</style>