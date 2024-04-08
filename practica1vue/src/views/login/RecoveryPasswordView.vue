<template>
    <div id="login-form-container">
        <HeaderFormLogo icon="fa-solid fa-key" />
        <SubHeader icon="fa-solid fa-unlock-keyhole" text="Password Recovery" />
        <PostForm @submit.prevent="recoveryPetition">
            <InputTextFormGroup label='email' name="user" type="email" @returnValue="getValues" />
            <LittleInfo text="Ingresa tu email y te enviaremos un correo con las instrucciones para reestablecer tu contraseña" />
            <SubmitFormButton value="Recuperar" />
        </PostForm>
        <router-link :to="{ name: 'login' }">
            <LittleInfo text="Ir al login" />
        </router-link>

        <SocialLogin />
        <div class="flex-col">
            <LittleInfo text="¿No tienes cuenta?" />
            <router-link :to="{ name: 'register' }">
                <LittleInfo accent="true" text="Crea una ahora mismo" />
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
import { IRecoveryRequest } from "@/interfaces/auth";


// const store = useAuthStore()
let array: Array<string> = Array(1)
let recoveryRequest:IRecoveryRequest = {
    email: '',
}
let email = ''

function getValues(input: any) {

    for (let index = 0; index < array.length; index++) {
        if (input.name == "user") {

            email = input.value
        }
        
    }
    array = [email]
    
    recoveryRequest.email =array[0].value
   
    console.log(recoveryRequest)
    

}
const recoveryPetition = () => {
    console.log("petición de recuperación", recoveryRequest)
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