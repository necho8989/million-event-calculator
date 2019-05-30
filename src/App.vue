<template>
  <div id="app">
		<b-navbar type="dark" variant="info">
			<b-navbar-brand>プラチナスターシアターイベ計算機</b-navbar-brand>
		</b-navbar>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
