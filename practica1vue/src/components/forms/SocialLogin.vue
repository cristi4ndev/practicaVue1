<template>
    <div class="social-login">
        <div>
            <i class="fa-brands fa-facebook"></i>
        </div>
        <div>
            <i class="fa-brands fa-google"></i>
        </div>
        <div>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.social-login {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    justify-self: flex-end;
    font-size: 30px;
    transition: color 0.5s;
}

.social-login div:hover {
    color: var(--primary-color);
    cursor: pointer;
}
</style>