<template>
    <form method="POST" action="#" class="form">

        <slot></slot>
       
</form>
</template>

<script lang="ts" setup>
import SubmitFormButton from './SubmitFormButton.vue';


</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}


</style>