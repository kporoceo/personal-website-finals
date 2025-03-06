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
    <ContactMe />
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
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* Smooth scrolling */
  background-color: #1a1a1a; /* Dark background */
  color: #e0e0e0; /* Light text */
}

section {
  padding: 80px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

h1, h2, h3, h4 {
  color: #9ccc65; /* Sage green for headings */
}

a {
  color: #9ccc65; /* Sage green for links */
  text-decoration: none;
}

a:hover {
  color: #7cb342; /* Darker sage green for hover */
}

.bg-gradient {
  background: linear-gradient(135deg, #9ccc65, #7cb342); /* Sage green gradient */
  color: white;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>