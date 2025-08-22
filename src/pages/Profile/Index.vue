<template>
  <q-page class="flex">
    <div class="full-width row items-center justify-between bg-grey-2">
      <q-btn flat color="grey-9" label="Cancel" />
      <strong>Edit Profile</strong>
      <q-btn flat color="primary" label="Done" />
    </div>
    <div class="full-width column items-center justify-center">
       <q-avatar size="95px">
          <img src="https://cdn.quasar.dev/img/avatar.png">
       </q-avatar>
       <q-btn flat color="primary" label="Change Profile Photo" />
    </div>
      <div class="full-width column q-px-sm">
        <div class="container-input row justify-center items-center">
          <span>Name</span>
          <q-input v-model="tab" placeholder=" name" />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Username</span>
          <q-input v-model="tab" placeholder="user name" />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Website</span>
          <q-input v-model="tab" placeholder=" website" />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Bio</span>
          <q-input v-model="tab" autogrow placeholder="bio" />
        </div>
      </div>
      <div class="full-width column items-start q-px-sm">
        <q-separator class="full-width q-my-sm"/>
        <q-btn flat color="primary" label="Switch to Professional Account" />
        <strong class="q-ml-md q-my-md">Private Information</strong>

        <div class="full-width">
          <div class="container-input row justify-center items-center">
            <span>Email</span>
            <q-input v-model="tab" autogrow placeholder=" email" />
          </div>

          <div class="container-input row justify-center items-center">
            <span>Phone</span>
            <q-input v-model="tab" autogrow placeholder=" cellphone" />
          </div>  
          <div class="container-input row justify-center items-center">
            <span>Gender</span>
            <q-input v-model="tab" autogrow placeholder=" gender" />
          </div> 
        </div>
      </div>  
  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      tab: 'grid',
    };
  },
};
</script>
<style lang="scss" scoped>
.container-input {
  font-size: 15px;
  span {
    width: 22%;
  }
  .q-textarea,
  .q-input {
    width: 70%;
  }
  strong {
    font-size: 16px;
  }
  .q-btn {
    text-transform: none;
    font-size: 16px;
  }
} 
</style>