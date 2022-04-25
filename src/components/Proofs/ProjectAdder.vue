<template>
<div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>CREATE NEW PROJECT</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-title></v-card-title>

      <v-card-actions>
        <v-card >
          <v-form class=" mx-auto">
          <!-- <v-select
            :items="items"
            standard
            class="pl-10 ml-10"
            type="text"
            label="TYPE"
            name="type"
            v-model="type"
            space-around
          ></v-select> -->
          <v-select
            class=" mx-auto"
            label="ORGANIZATION"
            v-model="organization"
            :items="orgs"
            space-around
          ></v-select>
          <v-text-field
            class=" mx-auto"
            type="text"
            label="TITLE"
            name="title"
            v-model="title"
            space-around
          ></v-text-field>
          <v-text-field
            class=" mx-auto"
            type="text"
            label="DESCRIPTION"
            name="description"
            v-model="description"
            space-around
          ></v-text-field>
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
      </v-form>
        </v-card>
      
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  // import FileUpload from '@/components/Uploader/FileUpload'
  export default {
    name: 'ProjectAdder',
    components: {
      // FileUpload,
    },
    data: () => ({
      organization: '',
      title: '',
      description: '',
      orgs: [],
    }),

    async created() {
      // await this.$store.dispatch('project/getProject', this.$route.params.name)
      console.log('Store State: ', this.$store.state)
      this.organization = this.$route.params.id
      this.orgs = await this.$store.state.org.organizations.map(company => {
        const { id, name } = company;
        return [ id, name ]
      })
      if (!this.$route.params.id) {
        this.organization = ''
      }
    },

    methods: {
      handleSubmit() {
        const payload = {
          org_id: this.organization[0],
          title: this.title,
          description: this.description,
          
        }
        console.log(payload)
        this.addProject(payload)
      },

      async addProject(project) {
        try {
          await this.$store.dispatch("project/addProject", project)
          this.$router.push({ name: 'profile', params: {id: this.$route.params.id} })
          console.log(project)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>