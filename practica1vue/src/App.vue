<template>
  <nav>
    <router-link :to="{name:'home'}">Not protected View</router-link> |
    <router-link :to="{name:'protected-url'}">Protected View</router-link> |
    <router-link :to="{name:'login'}">Login</router-link> |
    <router-link :to="{name:'register'}">Register</router-link> |
    <router-link :to="{name:'password-recovery'}">Password Recovery</router-link>
    
  </nav>
  <div class="container">
    <router-view/>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  height: 5vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/**************General**************/
:root {
    --dark-primary-color: #E64A19;
    --light-primary-color: #FFCCBC;
    --primary-color: #FF5722;
    --accent-color: #FF5722;
    --primary-text: #212121;
    --secondary-text: #757575;
    --divider-color: #BDBDBD;
}

* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

#app {
    height: 95vh;
    width: 100%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    accent-color: var(--accent-color);
}

a{
    text-decoration: none;
    transition: color 0.5s;
    &:hover{
        color: var(--dark-primary-color);
    }
}
a:hover{
    color: var(--dark-primary-color);
}
.container {
    background: linear-gradient(0.25turn, var(--primary-color), var(--light-primary-color), var(--primary-color));
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
}
.accent-text{
    font-weight: 900;
    color: var(--primary-color) !important;
    transition: text-decoration 2s;
   
}

.accent-text:hover{
    text-decoration: underline;
}

.flex-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
/**************Media Queries**************/
@media screen and (max-width: 600px) {
    /* Estilos específicos para tabletas */
   
    #login-form-container {
      width: 100%;
      box-shadow:0px 0px 0px 0px;
    }
  }
</style>
