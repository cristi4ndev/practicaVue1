<template>
    <div id="login-form-container">
        <HeaderFormLogo cicon="fa-solid fa-id-card" />
        <SubHeader icon="fa-solid fa-user-plus" text="new user" />
        <PostForm @submit.prevent="registerPetition">
            <InputTextFormGroup label='name' name="name" type="text" @returnValue="getValues" />
            <InputTextFormGroup label='surname' name="surname" type="text" @returnValue="getValues" />
            <InputTextFormGroup label='email' name="user" type="email" @returnValue="getValues" />
            <InputTextFormGroup label='password' name="password" type="password" @returnValue="getValues" />
            <InputTextFormGroup label='Vuelve a introducir la contraseña' name="password2" type="password" @returnValue="getValues" />
            <template v-if="password.value != password2.value">
                <LittleInfo text="Las contraseñas no coinciden" />
                <SubmitFormButton disabled value="Registrarme" class="disabled"/>
            </template>
            <template v-else>
                <SubmitFormButton value="Registrarme" />                
            </template>
            
        </PostForm>

        <LittleInfo text="Registrate con:" />

        <SocialLogin />
        <div class="flex-col">
            <LittleInfo text="¿Ya tienes cuenta?" />
            <router-link :to="{ name: 'login' }">
                <LittleInfo accent="true" text="Accede al login" />
            </router-link>

        </div>
    </div>

</template>

<script lang="ts" setup>
import HeaderFormLogo from '@/components/forms/HeaderFormLogo.vue';
import InputTextFormGroup from '@/components/forms/InputTextFormGroup.vue';
import LittleInfo from '@/components/forms/LittleInfo.vue';
import PostForm from '@/components/forms/PostForm.vue';
import SocialLogin from '@/components/forms/SocialLogin.vue';
import SubHeader from '@/components/forms/SubHeader.vue';
import SubmitFormButton from '@/components/forms/SubmitFormButton.vue';
import { IRegisterRequest } from '@/interfaces/auth';
import { ref, Ref } from 'vue';

let array: Array<any> = Array(4)
let registerRequest: IRegisterRequest = {
    user: '',
    password: '',
    name: '',
    surname: ''
}
let user = ''
let password: Ref = ref('')
let password2: Ref = ref('')
let name = ''
let surname = ''
function getValues(input: any) {

    for (let index = 0; index < array.length; index++) {
        if (input.name == "user") {

            user = input.value
        }
        if (input.name == "password") {
            password.value = input.value
        }
        if (input.name == "password2") {
            password2.value = input.value
        }
        if (input.name == "name") {
            name = input.value
        }
        if (input.name == "surname") {
            surname = input.value
        }
    }
    array = [user, password.value, name, surname]

    registerRequest.user = array[0]
    registerRequest.password = array[1].value
    registerRequest.name = array[2]
    registerRequest.surname = array[3]
    console.log(registerRequest)

}
const registerPetition = () => {
    console.log("Petición de registro", registerRequest)
}


</script>


<style scoped>
#login-form-container {
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

/**************Media Queries**************/
@media screen and (max-width: 600px) {


    #login-form-container {
        width: 100%;
        box-shadow: 0px 0px 0px 0px;
    }
}
</style>