<template>
  <section id="hobbies">
    <div class="text-center">
      <h1><i class="fas fa-gamepad"></i> Hobbies & Interests</h1>
      <p>Here are some of my favorite books, TV series, and movies:</p>

      <!-- Top 3 Books -->
      <div class="category">
        <h3>Top 3 Books</h3>
        <div class="hobby-grid">
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/the%20unbearable%20lightness%20of%20being%20book%20cover.jpg?raw=true" alt="The Unbearable Lightness of Being" class="hobby-image" />
            <p class="hobby-title">The Unbearable Lightness of Being</p>
            <p class="hobby-author">by Milan Kundera</p>
          </div>
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/almond%20book%20cover.jpg?raw=true" alt="Almond" class="hobby-image" />
            <p class="hobby-title">Almond</p>
            <p class="hobby-author">by Sohn Won-pyung</p>
          </div>
          <div class="hobby-card">
            <img src="https://raw.githubusercontent.com/kporoceo/webprog-image-repo/refs/heads/main/before%20the%20coffee%20gets%20cold%20book%20cover.webp" alt="Before the Coffee Gets Cold" class="hobby-image" />
            <p class="hobby-title">Before the Coffee Gets Cold</p>
            <p class="hobby-author">by Toshikazu Kawaguchi</p>
          </div>
        </div>
      </div>

      <!-- Top 3 TV Series -->
      <div class="category">
        <h3>Top 3 TV Series</h3>
        <div class="hobby-grid">
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/parks%20and%20recreation%20poster.jpg?raw=true" alt="Parks and Recreation" class="hobby-image" />
            <p class="hobby-title">Parks and Recreation</p>
          </div>
          <div class="hobby-card">
            <img src="https://raw.githubusercontent.com/kporoceo/webprog-image-repo/refs/heads/main/schitt's%20creek.webp" alt="Schitt's Creek" class="hobby-image" />
            <p class="hobby-title">Schitt's Creek</p>
          </div>
          <div class="hobby-card">
            <img src="https://raw.githubusercontent.com/kporoceo/webprog-image-repo/refs/heads/main/the%20walking%20dead%20poster.webp" alt="The Walking Dead" class="hobby-image" />
            <p class="hobby-title">The Walking Dead</p>
          </div>
        </div>
      </div>

      <!-- Top 3 Movies -->
      <div class="category">
        <h3>Top 3 Movies</h3>
        <div class="hobby-grid">
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/little%20miss%20sunshine%20poster.jpg?raw=true" alt="Little Miss Sunshine" class="hobby-image" />
            <p class="hobby-title">Little Miss Sunshine</p>
          </div>
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/hereditary%20poster.jpg?raw=true" alt="Hereditary" class="hobby-image" />
            <p class="hobby-title">Hereditary</p>
          </div>
          <div class="hobby-card">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/exhuma%20poster.jpg?raw=true" alt="Exhuma" class="hobby-image" />
            <p class="hobby-title">Exhuma</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hobbies'
};
</script>

<style scoped>
.category {
  margin-bottom: 40px;
}

.category h3 {
  color: #9ccc65; /* sage green */
  margin-bottom: 20px;
}

.hobby-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.hobby-card {
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hobby-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hobby-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.hobby-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #e0e0e0;
}

.hobby-author {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}
</style>