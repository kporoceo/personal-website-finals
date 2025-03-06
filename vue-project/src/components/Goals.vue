<template>
<div id="goals" class="container mb-4">
    <div class="container mb-4">
      <div class="p-4 bg-gradient bg-info text-dark rounded-3 shadow">
        <h3 class="fw-bold"><i class="fas fa-bullseye"></i> Goals in Life</h3>
        <table class="table table-bordered table-hover text-center bg-light">
          <thead class="table-dark">
            <tr>
              <th>2025</th>
              <th>2026</th>
              <th>2027</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TOPIK Certification 🇰🇷</td>
              <td>Part-time Job (Internship Shortcut 🤔)</td>
              <td>Graduation! (Super Delayed 🥶)</td>
            </tr>
            <tr>
              <td>Cybersecurity Credentials</td>
              <td>More Credentials</td>
              <td>Professionally enter the IT Industry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    name: 'Goals'
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