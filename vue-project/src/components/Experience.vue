<template>
  <section id="experience">
    <div class="text-center">
      <h2><i class="fas fa-code"></i> IT Experience</h2>
      <p>Here are the tools and languages I have experience with so far:</p>

      <!-- Programming Languages -->
      <div class="category">
        <h3>Programming Languages</h3>
        <div class="skills">
          <span class="skill">Python</span>
          <span class="skill">Java</span>
          <span class="skill">JavaScript</span>
          <span class="skill">PHP</span>
          <span class="skill">SQL</span>
        </div>
      </div>


 <div class="category">
        <h3>Scripting</h3>
        <div class="skills">
          <span class="skill">Bash</span>
          <span class="skill">Powershell</span>
        </div>
      </div>

      <!-- Web Development -->
      <div class="category">
        <h3>Web Development</h3>
        <div class="skills">
          <span class="skill">HTML</span>
          <span class="skill">CSS</span>
          <span class="skill">Vue.js</span>
        </div>
      </div>

      <!-- Operating Systems -->
      <div class="category">
        <h3>Operating Systems</h3>
        <div class="skills">
          <span class="skill">Linux</span>
          <span class="skill">Ubuntu</span>
          <span class="skill">SUSE</span>
          <span class="skill">Windows Server</span>
        </div>
      </div>

      <!-- Networking Tools -->
      <div class="category">
        <h3>Networking Tools</h3>
        <div class="skills">
          <span class="skill">Cisco Packet Tracer</span>
          <span class="skill">Nmap</span>
          <span class="skill">Wireshark</span>
          <span class="skill">Metasploit</span>
          <span class="skill">Burp Suite</span>
          <span class="skill">Kali Linux</span>
        </div>
      </div>

      <!-- Database Tools -->
      <div class="category">
        <h3>Database Tools</h3>
        <div class="skills">
          <span class="skill">MySQL</span>
          <span class="skill">PostgreSQL</span>
          <span class="skill">phpMyAdmin</span>
        </div>
      </div>

      <!-- Development Tools -->
      <div class="category">
        <h3>Development Tools</h3>
        <div class="skills">
          <span class="skill">VM Box</span>
          <span class="skill">GitHub</span>
          <span class="skill">Vercel</span>
          <span class="skill">Postman</span>
          <span class="skill">Android Studio</span>
          <span class="skill">Docker</span>
          <span class="skill">PycCharm</span>
          <span class="skill">Jupyter</span>
          <span class="skill">Eclipse</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience'
};
</script>

<style scoped>
.category {
  margin-bottom: 30px;
}

.category h3 {
  color: #6a11cb; 
  margin-bottom: 15px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill {
  background-color: #6a11cb;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.skill:hover {
  background-color: #2575fc;
}
</style>