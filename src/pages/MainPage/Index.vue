<template>
  <q-page class="flex flex-center ">
    <div class="full-width">
       <TopBar class="q-mb-lg"/>
       <q-separator class="full-width" />
    </div>
  </q-page>
</template>

<script>
import TopBar from 'src/components/TopBar/Index.vue'
export default {
  name: 'MainPage',
  components: {
    TopBar,
  },
};
</script>
