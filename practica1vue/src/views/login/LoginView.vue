<template>
    <div id="login-form-container">
        <HeaderFormLogo/>
        <SubHeader/>
        <PostForm/>
    </div>
</template>

<script lang="ts" setup>
import HeaderFormLogo from "@/components/forms/HeaderFormLogo.vue";
import SubHeader from "@/components/forms/SubHeader.vue";
import PostForm from "@/components/forms/PostForm.vue";
</script>

<style scoped>

#login-form-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 10px 0px var(--light-primary-color);
    border-radius: 10px;
    padding: 10px 20px;
    gap: 30px;
    width: 500px;


}
</style>