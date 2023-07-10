<script setup>
import { RouterView } from 'vue-router'
// 这个配置项只是提供别名提
</script>

<template>
  <!-- 一级路由出口文件 -->
  <RouterView />
  <div class="test">
    test scss
  </div>
</template>

<style scoped lang="scss">
.test {
  color: $sucColor;
}
</style>
