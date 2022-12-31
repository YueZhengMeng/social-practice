<template>
  <div class="hello">
    <div class="container-fluid">
      <Navbar />

      <div class="row p-5">

        <div class="col-md-3">
          <ListGroup/>
        </div>

        <div class="col-md-9 p-3">
          <router-view/>
        </div>

      </div>

      <div class="row" id="footer">
        <div class="col-md-12">
          <Footer/>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  position:fixed;
  bottom:5px;
}
</style>
<script>
import Navbar from '@/components/Navbar'
import ListGroup from '@/components/ListGroup'
import Footer from '@/components/Footer'
export default {
  components: {Footer, ListGroup, Navbar}
}
</script>
