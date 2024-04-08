<template>
    <div id="login-form-container">
        <HeaderFormLogo icon="fa-solid fa-id-card" />
        <SubHeader icon="fa-solid fa-user-plus" text="new user" />
        <PostForm>
            <InputTextFormGroup label='name' name="name" type="text" @returnValue="getValues" />
            <InputTextFormGroup label='surname' name="surname" type="text" @returnValue="getValues" />
            <InputTextFormGroup label='email' name="user" type="email" @returnValue="getValues" />
            <InputTextFormGroup label='password' name="password" type="password" @returnValue="getValues" />
            <InputTextFormGroup label='Vuelve a introducir la contraseña' name="password2" type="password"
                @returnValue="getValues" />
                <p v-show="password !== password2">Las contraseñas no coinciden</p>
            <SubmitFormButton value="Registrarme" />
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
import { ref } from 'vue';

let array: Array<string> = Array(4)
let registerRequest: IRegisterRequest = {
    user: '',
    password: '',
    name: '',
    surname: ''
}
let user = ''
let password = ''
let password2 = ''
let name = ''
let surname = ''
function getValues(input: any) {

    for (let index = 0; index < array.length; index++) {
        if (input.name == "user") {

            user = input.value
        }
        if (input.name == "password") {
            password = input.value
        }
        if (input.name == "password2") {
            password2 = input.value
        }
        if (input.name == "name") {
            name = input.value
        }
        if (input.name == "surname") {
            surname = input.value
        }
    }
    array = [user, password, name, surname]

    registerRequest.user = array[0]
    registerRequest.password = array[1]
    registerRequest.name = array[2]
    registerRequest.surname = array[3]
    console.log(registerRequest)

}
const sendAuth = () => {
    console.log("petición de acceso", registerRequest)
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