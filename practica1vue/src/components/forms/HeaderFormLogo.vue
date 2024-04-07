<template>
    <div class="header-form-logo">
        <i :class="props.icon"  ></i>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    icon: String
})
</script>

<style scoped>

.header-form-logo{
    font-size: 40px;
   
    border-radius: 10px;
    padding: 10px;
    
    box-shadow: 0px 0px 10px 0px var(--light-primary-color);
        
}
</style>