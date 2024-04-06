<template>
    <form method="POST" action="#" class="form">

        <FormGroup/>
        <FormGroup/>
        
    <input class="submit-button" type="submit" value="Entrar">
</form>
</template>

<script lang="ts" setup>
import FormGroup from '@/components/forms/FormGroup.vue'
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
.submit-button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    padding: 12px 20px;
    border: 0px;
    transition: background-color 0.5s;
    font-weight: 600;
    &:hover {
        background-color: var(--dark-primary-color);
    }

}



.subheader-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
}
</style>