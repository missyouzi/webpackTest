<template>
  <div >
      <h1 :class="$style.home">
          home
        <p class="title">title</p>

      </h1>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
    @import "../../css/reset.scss";
    .home{
        color: red;
        font-size: 80px;
    }
</style>