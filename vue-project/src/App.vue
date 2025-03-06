<template>
  <div class="bg-dark text-light min-vh-100">
    <NavBar />
    <Header />
    <div class="container">
      <AboutMe />
      <div class="row g-4 my-4">
        <div class="col-md-6">
          <Education />
        </div>
        <div class="col-md-6">
          <Course />
        </div>
      </div>
      <div class="row g-4 my-4">
        <div class="col-md-6">
          <Experience />
        </div>
        <div class="col-md-6">
          <Hobbies />
        </div>
      </div>
      <Goals />
      <Gallery />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import Education from './components/Education.vue';
import Course from './components/Course.vue';
import Experience from './components/Experience.vue';
import Hobbies from './components/Hobbies.vue';
import Goals from './components/Goals.vue';
import Gallery from './components/Gallery.vue';

export default {
  components: {
    NavBar,
    Header,
    AboutMe,
    Education,
    Course,
    Experience,
    Hobbies,
    Goals,
    Gallery
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
}
</style>