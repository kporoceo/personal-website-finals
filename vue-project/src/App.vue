<template>
  <div class="min-vh-100">
      <NavBar />
      <Header />
      <div class="container">
          <AboutMe />
          <Education />
          <Course />
          <Experience />
          <Hobbies />
          <Goals />
          <Gallery />
          <Guestbook />
          <ContactMe />
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
import Guestbook from './components/Guestbook.vue';
import ContactMe from './components/ContactMe.vue';

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
      Guestbook,
      ContactMe
  }
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-size: 16px;
}

section {
    padding: 100px 0; /* Reduced to 60px from 80px */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

h1, h2, h3 {
  color: #a8b999;
}

.skill {
  background-color: #a8b999;
}

.skill:hover {
  background-color: #c2d3b2;
}

.social-link {
  background-color: #a8b999;
}

.social-link:hover {
  background-color: #c2d3b2;
}

.hobby-card {
  background-color: #333333;
}

.table {
  color: black;
}

.navbar {
  opacity: 0; /* Initially hide the navbar */
  transition: opacity 0.3s ease; /* Add a transition for a smooth effect */
}

.navbar:hover {
  opacity: 1; /* Show the navbar on hover */
}
</style>