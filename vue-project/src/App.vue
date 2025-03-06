<template>
  <div class="bg-dark text-light min-vh-100">
    <NavBar />
    <Header />
    <AboutMe />
    <Education />
    <Course />
    <Experience />
    <Hobbies />
    <Goals />
    <Gallery />
    <Guestbook />
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
    Guestbook
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* Smooth scrolling */
}

section {
  padding: 80px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

h1, h2, h3 {
  color: #6a11cb; /* Gradient color for headings */
}

.bg-gradient {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>