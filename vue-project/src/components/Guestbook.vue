<template>
  <section id="guestbook">
    <div class="container text-center">
      <h1><i class="fas fa-book"></i> Guestbook</h1>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <!-- Form for new entries -->
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

          <!-- Success & Error Alerts -->
          <div v-if="showConfirmation" class="alert alert-success mt-3">
            Thank you for signing the guestbook!
          </div>
          <div v-if="showError" class="alert alert-danger mt-3">
            An error occurred. Please try again.
          </div>

          <!-- Guestbook Entries -->
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
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from '../supabase';

export default {
  name: 'Guestbook',
  data() {
    return {
      name: '',
      message: '',
      entries: [],
      showConfirmation: false,
      showError: false,
    };
  },
  async created() {
    await this.fetchEntries();
  },
  methods: {
    async fetchEntries() {
      try {
        const { data, error } = await supabase
          .from('guestbook')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        this.entries = Array.isArray(data) ? data : [];
      } catch (err) {
        console.error('Error fetching entries:', err.message);
        this.showError = true;
        setTimeout(() => (this.showError = false), 3000);
      }
    },
    async submitEntry() {
      if (!this.name || !this.message) {
        console.error('Name and message are required');
        this.showError = true;
        setTimeout(() => (this.showError = false), 3000);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('guestbook')
          .insert([{ name: this.name, message: this.message }])
          .select('*'); // Request the inserted data

        if (error) throw error;

        if (data && data.length > 0) {
          this.entries.unshift(data[0]); // Add new entry to the list
          this.name = ''; // Clear name field
          this.message = ''; // Clear message field
          this.showConfirmation = true;

          setTimeout(() => (this.showConfirmation = false), 3000);
        }
      } catch (err) {
        console.error('Error submitting entry:', err.message);
        this.showError = true;
        setTimeout(() => (this.showError = false), 3000);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #e0e0e0;
}

.alert-success {
  background-color: #4caf50;
  color: white;
  border-color: #388e3c;
  padding: 10px;
  border-radius: 5px;
}

.alert-danger {
  background-color: #f44336;
  color: white;
  border-color: #d32f2f;
  padding: 10px;
  border-radius: 5px;
}
</style>
