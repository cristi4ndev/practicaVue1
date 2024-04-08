<template>
    <div class="form-group">
        <label :for="props.name">{{ props.label }}</label>
        <input :id="props.name" :name="props.name" :type="props.type" v-model="text" >
       
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, onUpdated, ref } from 'vue';
const text = ref('')

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
})

const emit = defineEmits(['returnValue'])



onUpdated(()=>{
    
    emit("returnValue", {
        name: props.name,
        value: text
    })


})


</script>

<style scoped>
.form-group{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
}
label {
    font-size: 11px;
    font-weight: bold;

}

input {
    text-indent: 5px;
    padding: 10px;
    width: 100%;
    color: var(--primary-color);
    border: none;

}

input:focus {
    color: var(--primary-color);
}
</style>