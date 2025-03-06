<template>
    <div class="container mb-5">
      <div class="p-4 bg-dark-subtle text-dark rounded-3 shadow">
        <h3 class="fw-bold text-info"><i class="fas fa-images"></i> Picture Gallery</h3>
        <p>📸 Work in Progress...</p>
        <div class="gallery">
          <img v-for="(url, index) in imageUrls" :key="index" :src="url" alt="Gallery Image" class="gallery-image" />
        </div>
      </div>
    </div>
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
    margin-top: 20px;
  }
  
  .gallery-image {
    width: 200px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>