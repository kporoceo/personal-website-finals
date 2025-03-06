<template>
  <section id="hobbies">
    <div class="text-center">
      <h2><i class="fas fa-gamepad"></i> Hobbies & Interests</h2>
      <p>Here are some of my favorite books, TV series, and movies:</p>

      <!-- Top 3 Books -->
      <div class="category">
        <h3>Top 3 Books</h3>
        <div class="hobby-grid">
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="The Unbearable Lightness of Being" class="hobby-image" />
            <p class="hobby-title">The Unbearable Lightness of Being</p>
            <p class="hobby-author">by Milan Kundera</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81Z5Z+5Z5ZL._AC_UF1000,1000_QL80_.jpg" alt="Almond" class="hobby-image" />
            <p class="hobby-title">Almond</p>
            <p class="hobby-author">by Sohn Won-pyung</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Before the Coffee Gets Cold" class="hobby-image" />
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
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Parks and Recreation" class="hobby-image" />
            <p class="hobby-title">Parks and Recreation</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Schitt's Creek" class="hobby-image" />
            <p class="hobby-title">Schitt's Creek</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="The Walking Dead" class="hobby-image" />
            <p class="hobby-title">The Walking Dead</p>
          </div>
        </div>
      </div>

      <!-- Top 3 Movies -->
      <div class="category">
        <h3>Top 3 Movies</h3>
        <div class="hobby-grid">
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Little Miss Sunshine" class="hobby-image" />
            <p class="hobby-title">Little Miss Sunshine</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Hereditary" class="hobby-image" />
            <p class="hobby-title">Hereditary</p>
          </div>
          <div class="hobby-card">
            <img src="https://m.media-amazon.com/images/I/81XQ7+xMZYL._AC_UF1000,1000_QL80_.jpg" alt="Exhuma" class="hobby-image" />
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
/* Add component-specific styles here */
.category {
  margin-bottom: 40px;
}

.category h3 {
  color: #6a11cb; /* Gradient color for headings */
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
  color: #fff;
}

.hobby-author {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}
</style>