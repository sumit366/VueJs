<template>
  <div>
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
