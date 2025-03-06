<template>
  <div class="bg-dark text-light">
    <NavBar />
    <Header />
    <AboutMe />
    <Education />
    <Course />
    <Experience />
    <Hobbies />
    <Goals />
    <Gallery />
   
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
    Gallery,

  }
}
</script>

<style>
/* Global styles can go here */
</style>