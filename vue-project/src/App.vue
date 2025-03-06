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
    <Guestbook />
    <Contact />
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
import Contact from './components/Contact.vue';

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
    Contact
  }
}
</script>

<style>
/* Global styles can go here */
</style>