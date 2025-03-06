<template>
    <section id="gallery">
      <div class="text-center">
        <h2><i class="fas fa-images"></i> Picture Gallery</h2>
        <div class="gallery">
          <img v-for="(url, index) in imageUrls" :key="index" :src="url" alt="Gallery Image" class="gallery-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Gallery',
    data() {
      return {
        imageUrls: [
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20w%20cousins.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousisns%202.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousins%203.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/me%20n%20mary%20pk.jpg?raw=true"
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .gallery-image {
    width: 200px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>