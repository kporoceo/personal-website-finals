<template>
<div id ="about" class="container mb-4">
    <div class="container mb-4">
      <div class="row">
        <div class="col bg-gradient bg-info p-4 rounded-3 text-dark shadow-lg">
          <h3 class="fw-bold"><i class="fas fa-user"></i> About Me</h3>
          <p>
            I am a co-owner of <span class="fw-bold text-dark">PETKINGDOM PH</span> at San Lorenzo Place Mall in Chino Roces.
            This is a family business that I started alongside my siblings and cousins during the pandemic. Thankfully, we are still in operation to this day.
          </p>
          <p>Check us out on:
            <a href="https://www.facebook.com/PETKINGDOMPH" target="_blank" class="text-dark fw-bold"><i class="fab fa-facebook"></i> Facebook</a>,
            <a href="https://www.instagram.com/petkingdomph/" target="_blank" class="text-dark fw-bold"><i class="fab fa-instagram"></i> Instagram</a>,
            <a href="https://shopee.ph/petkingdomph" target="_blank" class="text-dark fw-bold"><i class="fas fa-shopping-cart"></i> & Shopee</a>.
          </p>
        </div>
      </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    name: 'AboutMe'
  };
  </script>
  
  <style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-3 {
  border-radius: 1rem;
}
  </style>