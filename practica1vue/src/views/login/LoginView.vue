<template>
    <div id="login-form-container">
        <HeaderFormLogo icon="fa-solid fa-user" />
        <SubHeader icon="fa-solid fa-lock" text="login" />
        <PostForm @submit.prevent="sendAuth">
            <InputTextFormGroup label='email' name="user" type="email" @returnValue="getValues" />
            <InputTextFormGroup label='password' name="password" type="password" @returnValue="getValues" />
            <SubmitFormButton value="Entrar" />
        </PostForm>
        <router-link :to="{name:'password-recovery'}">
            <LittleInfo text="¿Has olvidado tu contraseña?"/>
        </router-link>
        
        <SocialLogin />
        <div class="flex-col">
            <LittleInfo text="¿No tienes cuenta?"/>
            <router-link :to="{name:'register'}">
                <LittleInfo accent="true" text="Crea una ahora mismo"/>
            </router-link>
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import HeaderFormLogo from "@/components/forms/HeaderFormLogo.vue";
import SubHeader from "@/components/forms/SubHeader.vue";
import PostForm from "@/components/forms/PostForm.vue";
import InputTextFormGroup from "@/components/forms/InputTextFormGroup.vue";
import { ref, Ref } from "vue";
import SubmitFormButton from "@/components/forms/SubmitFormButton.vue";
import LittleInfo from "@/components/forms/LittleInfo.vue";
import SocialLogin from "@/components/forms/SocialLogin.vue";
import { IloginRequest } from "@/interfaces/auth";


// const store = useAuthStore()
let array: Array<string> = Array(2)
let loginRequest:IloginRequest = {
    user: '',
    password: ''
}
let user = ''
let password = ''
function getValues(input: any) {

    for (let index = 0; index < array.length; index++) {
        if (input.name == "user") {

            user = input.value
        }
        if (input.name == "password") {
            password = input.value
        }
    }
    array = [user, password]
    
    loginRequest.user =array[0]
    loginRequest.password =array[1]
    console.log(loginRequest)

}
const sendAuth = () => {
    console.log("petición de acceso", loginRequest)
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
      box-shadow:0px 0px 0px 0px;
    }
  }
</style>
