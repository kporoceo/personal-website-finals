<template>
  <section id="guestbook">
    <div class="text-center">
      <h2><i class="fas fa-book"></i> Guestbook</h2>
      <form @submit.prevent="submitEntry" class="mb-4">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea v-model="message" class="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <!-- Confirmation Message -->
      <div v-if="showConfirmation" class="alert alert-success mt-3">
        Thank you for signing the guestbook!
      </div>

      <!-- Display Guestbook Entries -->
      <div v-if="entries.length > 0">
        <h3>Entries</h3>
        <div v-for="entry in entries" :key="entry.id" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ entry.name }}</h5>
            <p class="card-text">{{ entry.message }}</p>
            <p class="card-text"><small class="text-muted">{{ formatDate(entry.created_at) }}</small></p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No entries yet. Be the first to leave a message!</p>
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from '../supabase'; // Import the Supabase client

export default {
  name: 'Guestbook',
  data() {
    return {
      name: '',
      message: '',
      entries: [],
      showConfirmation: false // Track whether to show the confirmation message
    };
  },
  async created() {
    await this.fetchEntries(); // Fetch entries when the component is created
  },
  methods: {
    async fetchEntries() {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) this.entries = data;
      if (error) console.error('Error fetching entries:', error);
    },
    async submitEntry() {
      const { data, error } = await supabase
        .from('guestbook')
        .insert([{ name: this.name, message: this.message }]);
      if (data) {
        this.entries.unshift(data[0]); // Add the new entry to the top of the list
        this.name = ''; // Clear the name field
        this.message = ''; // Clear the message field
        this.showConfirmation = true; // Show the confirmation message

        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
          this.showConfirmation = false;
        }, 3000);
      }
      if (error) console.error('Error submitting entry:', error);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString(); // Format the date as needed
    }
  }
};
</script>

<style scoped>
/* Add component-specific styles here */
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #000;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
  padding: 10px;
  border-radius: 5px;
}
</style>