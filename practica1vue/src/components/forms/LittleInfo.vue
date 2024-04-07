<template>
    <div>
       
        <p v-if="props.accent" class="little-info accent-text" :href="props.href">{{ props.text }}</p>
        <p v-else class="little-info">{{ props.text }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    href: String,
    text: String,
    accent: String
})
</script>

<style scoped>
.little-info {
    font-size: 12px;
    color: white;
    font-weight: 600;
}
</style>