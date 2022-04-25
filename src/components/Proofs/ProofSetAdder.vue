<template>
<div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>CREATE NEW SET</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-title></v-card-title>

      <v-card-actions>
      <form >
        <!-- <v-text-field
          class="pl-10 ml-10"
          type="text"
          label="PROJECT"
          name="project"
          v-model="project"
          space-around
        ></v-text-field> -->
        <v-select
          :items="items"
          standard
          class="pl-10 ml-10"
          type="text"
          label="TYPE"
          name="type"
          v-model="type"
          space-around
        ></v-select>
        <v-text-field
          class="pl-10 ml-10"
          type="text"
          label="NAME"
          name="name"
          v-model="name"
          space-around
        ></v-text-field>
        <v-text-field
          class="pl-10 ml-10"
          type="text"
          label="NOTES"
          name="notes"
          v-model="notes"
          space-around
        ></v-text-field>
        <!-- <v-text-field
          class="pl-10 ml-10"
          type="text"
          label="DESCRIPTION"
          name="description"
          v-model="description"
          space-around
        ></v-text-field> -->
        <!-- <FileUpload class="pl-10 ml-16"/> -->
        <div >
          <br>
          <div>
            <v-btn 
              class="white mr-5"
              color="primary"
              dark
              elevation="24"
              @click.prevent="handleSubmit"
            >CREATE</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
      </form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  // import FileUpload from '@/components/Uploader/FileUpload'
  export default {
    name: 'ProofSetAdder',
    components: {
      // FileUpload,
    },
    data: () => ({
      items: ['SOCIAL', 'DIGITAL', 'VIDEO', 'PRINT'],
      type: '',
      name: '',
      notes: '',
    }),

    async created() {
      // await this.$store.dispatch('adset/getAdset', this.$route.params.id);
      // await this.$store.dispatch('project/getProject', this.$route.params.id)
    },

    methods: {
      handleSubmit() {
        const payload = {
          // id: this.$route.params.id,
          project_id: this.$route.params.id,
          name: this.name,
          notes: this.notes,
          type: this.type.toLowerCase(),
          status: 'pending',
        }
        console.log(payload)
        this.addProofSet(payload)
      },

      addProofSet(ad) {
        try {
          this.$store.dispatch("proofSet/addProofSet", ad)
          this.$router.back(this.$route.params)
          console.log(ad)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>