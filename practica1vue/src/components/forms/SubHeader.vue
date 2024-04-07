<template>
    <div class="subheader-form">
        <div>
            <i :class="props.icon"></i>
        </div>
        <div>
            {{ props.text }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    icon: String,
    text: String
})
</script>

<style scoped>
.subheader-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

}
</style>