<template>
    <section id="contact">
      <div class="text-center">
        <h1><i class="fas fa-envelope"></i> Contact Me</h1>
        <p class="lead">Feel free to reach out to me on any of these platforms:</p>
        <div class="social-links">
          <a href="https://www.facebook.com/kathryn.oroceo" target="_blank" class="social-link">
            <i class="fab fa-facebook"></i> 
          </a>
          <a href="https://www.instagram.com/oreoceo" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i> 
          </a>
          <a href="https://github.com/kporoceo" target="_blank" class="social-link">
            <i class="fab fa-github"></i> 
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactMe'
  };
  </script>
  
  <style scoped>
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .social-link {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #95a688;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .social-link:hover {
    background-color: #a8b999;
  }
  
  .social-link i {
    margin-right: 10px;
  }
  </style>