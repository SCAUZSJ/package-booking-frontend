<template>
  <div id="app">
    <div id="nav">
      <a-row type="flex" justify="center"> 
         <router-link to="/user">用户界面</router-link> |
      <router-link to="/manager">管理界面</router-link>
      </a-row>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
