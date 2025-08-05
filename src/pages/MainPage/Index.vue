<template>
  <q-page class="flex flex-center ">
    <div class="full-width absolute-top q-mt-lg">
       <TopBar/>
       <q-separator class="full-width q-md-sm" />
    </div>
     <div class="container-bottom full-width absolute-bottom q-pb-lg">
       <q-separator class="full-width q-mb-sm" />
       <BottomBar/>
    </div>
  </q-page>
</template>

<script>
import TopBar from 'src/components/TopBar/Index.vue';
import BottomBar from 'src/components/BottomBar/Index.vue';
export default {
  name: 'MainPage',
  components: {
    TopBar,
    BottomBar,
  },
};
</script>
<style lang="scss" scoped>
  .container-bottom {
    background-color: #FAFAFA;
  }  
</style>