<template>
    <div id="guestbook" class="container mb-5">
      <div class="p-4 bg-dark-subtle text-dark rounded-3 shadow">
        <h3 class="fw-bold text-info"><i class="fas fa-book"></i> Guestbook</h3>
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
        <div v-if="entries.length > 0">
          <h4 class="fw-bold">Entries</h4>
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
  </template>
  
  <script>
  import { supabase } from '../supabase';
  
  export default {
    name: 'Guestbook',
    data() {
      return {
        name: '',
        message: '',
        entries: []
      };
    },
    async created() {
      await this.fetchEntries();
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
          this.name = '';
          this.message = '';
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
  }
  </style>