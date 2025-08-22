<template>
 <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon 
        name="fas fa-chevron-left" 
        size="23px" 
        class="absolute-left q-ma-lg"
        color="grey"></q-icon>
    <div class="full-width column items-center justify-center">
         <q-img 
            class="logo q-mb-lg" 
            src="../../assets/instadev-logo.svg" 
        />
        <q-form class="full-width" @submit="onSubmit">

            <q-input filled v-model="credencial" 
                    label="E-mail ou usuário" class="full-width q-mb-md" 
            />

            <q-input filled v-model="userName" 
                    label="UserName" class="full-width q-mb-md" 
            />

            <q-input filled v-model="password" label="Password" 
                    type="password" class="full-width q-mb-md"
            />

            <q-input 
                filled v-model="confirmPassword" 
                label="confirm Password" 
                type="password" 
                class="full-width"
            />

            <q-btn
                type="submit" 
                color="primary" 
                :disable="!credencial || !password || !userName  || !confirmPassword" 
                label="Sign up" 
                class="sign-in-button full-width q-mt-lg" 
            />
        </q-form>

        <div class="full-width row items-center justify-center q-my-xl">
            <q-separator class="separator" inset/>
            OR
            <q-separator class="separator" inset/>
        </div>
        <div class="full-width row items-center justify-center">
           <span class="text-black-opacity">
                Already have an account?
           </span>  
           <a href="" 
            class="link q-ml-xs">
                Sign In.
           </a>
        </div>

    </div>
    <div class="full-width column items- absolute-bottom">
        <q-separator class="full-width " />
            <div class="q-my-lg">
                <span class="text-black-opacity">Instagram ot Facebook</span>
            </div>
    </div>
        
  </q-page>
</template>

<script>

export default {
  name: 'Sign-Up',
  data() {
    return {
      credencial: 'rmscontato@gmail.com',
      userName: '',
      password: 'rms-1907',
      confirmPassword: '',
    };
  },
  methods: {
    async onSubmit() {
      const response = await this.$axios.post('/auth', {
        credencial: this.credencial,
        userName: this.userName,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
        console.log(response);
        this.$router.push({ path: 'my-area'});
    }, 
   },
};
</script>
<style lang="scss" scoped>
.logo {
    height: 49px;
    width: 182px;
}
.sign-in-button {
    height: 44px;
    border-radius: 5px;
    background-color: $instablue;
    
}
.facebook-icon {
    height: 17px;
    width: 17px;
}

.separator{
    width: 35px;
}
</style>
