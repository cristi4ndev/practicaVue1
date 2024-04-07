<template>
    <input class="submit-button" type="submit" :value="props.value">
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    value: String
})

</script>

<style scoped>
.submit-button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    padding: 12px 20px;
    border: 0px;
    transition: background-color 0.5s;
    font-weight: 600;
    width: 100%;
    &:hover {
        background-color: var(--dark-primary-color);
    }

}
</style>