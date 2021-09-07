<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <main>
      <Showcase/>
      <Highlights/>
      <Destinations/>
      <Discover/>
      <Aparthotels/>
      <Stay-decide/>
      <Subscribe/>
      <Destinations-we-love/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Showcase from './components/Showcase.vue';
import Highlights from './components/Highlights.vue';
import Destinations from './components/Destinations.vue';
import Discover from './components/Discover.vue';
import Aparthotels from './components/Aparthotels.vue';
import StayDecide from './components/StayDecide.vue';
import Subscribe from './components/Subscribe.vue';
import DestinationsWeLove from './components/DestinationsWeLove';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { 
    Header,
    Navigation,
    Showcase,
    Highlights,
    Destinations,
    Discover,
    Aparthotels,
    StayDecide,
    Subscribe,
    DestinationsWeLove,
    Footer
  },
}
</script>

,
    StayDecide<style lang="scss">

</style>
