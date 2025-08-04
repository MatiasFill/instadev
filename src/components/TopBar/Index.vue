<template>
  <div class="full-width row justify-between ">
    <q-img class="camera q-ml-sm" src="../../assets/camera.svg"></q-img>
    <q-img class="logo" src="../../assets/instadev-logo.svg"></q-img>
    <div>
      <q-img class="reels q-mr-lg" src="../../assets/reels.svg"></q-img>
      <q-img class="direct q-mr-sm" src="../../assets/direct.svg"></q-img>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.camera {
  width: 29px;
  height: 26px;
}
.logo {
  width: 115px;
  height: 30px;
}
.reels {
  width: 24px;
}
.direct {
  width: 24px;
}
.q-img {
  cursor: pointer;
}

</style>
