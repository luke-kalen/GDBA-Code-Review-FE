<template>
<div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>CREATE NEW PROOF</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-title></v-card-title>

      <v-card-actions>
      <form enctype="multipart/form-data">
        <!-- <v-select
          :items="items"
          standard
          class="pl-10 mx-auto"
          type="text"
          label="TYPE"
          name="type"
          v-model="type"
          space-around
        ></v-select> -->
        <v-text-field
          class="pl-10 mx-auto"
          type="text"
          label="NAME"
          name="name"
          v-model="name"
          space-around
        ></v-text-field>
        <v-text-field
          class="pl-10 mx-auto"
          type="text"
          label="DESCRIPTION"
          name="description"
          v-model="description"
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
        <input class="pl-10 mx-auto mt-4" type="file" :accept="fileTypes" endpoint="/ads" @change="fileChange" id="file" />
        <div >
          <br>
          <div>
            <v-btn 
              class="white ma-5"
              color="primary"
              dark
              elevation="24"
              @click.prevent="handleSubmit"
            >CREATE</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
      </form>
      <!-- <FileUpload 
        label="Upload Image"
        :fileTypes="['image/*']"
        endpoint="/image-upload"
      /> -->
      </v-card-actions>
    </v-card>    
  </div>
</template>

<script>
  // import axios from 'axios';
  // import MultipleFiles from '@/components/Uploader/MultipleFiles'
  // import FileUpload from '@/components/Uploader/FileUpload'
  // import FileService from '@/services/FileService'
  import { getError } from "@/utils/helpers";
  import { mapGetters } from 'vuex';
  export default {
    name: 'ProofCreate',
    components: {
      // MultipleFiles,
      // FileUpload
    },
    props: {
      fileTypes: {
        type: Array,
        default: null,
      },
      // endpoint: {
      //   type: String,
      //   required: true,
      // },
      // label: {
      //   type: String,
      //   default: "",
      // },
    },
    data: () => ({
      proofSet: '',
      name: '',
      description: '',
      url: '',
      file: null,
    }),

    async created() {
      // await this.$store.dispatch('adset/getAdset', this.$route.params.id);
      // await this.$store.dispatch('campaign/getCampaign', this.$route.params.id)
    },

    computed: {
      ...mapGetters('ads', ['ad'])
    },

    methods: {
      handleSubmit() {
        const payload = {};
        const formData = new FormData();
        formData.append('proof_set_id', this.$route.params.id);
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('status', this.status);
        formData.append('comment', this.comment);
        formData.append("adfile", this.url, this.url.name);
        console.log('formdata', formData.get('adfile'));
        payload.url = formData;
        payload.endpoint = this.endpoint;
        this.clearMessage();
        console.log(payload)
        this.addProof(payload)
      },

      async addProof(ad) {
        try {          
          await this.$store.dispatch("proof/addProof", ad);
          await this.$router.push({ name: 'ProofList', params: { id: this.$route.params.id } })
          console.log(ad)
        } catch (err) {
          this.error = getError(err)
        }
      },

      clearMessage() {
        this.error = null;
        this.message = null;
      },
      fileChange(event) {
        this.clearMessage();
        this.url = event.target.files[0];
        console.log(this.url)
      },
      // uploadFile() {
      //   const payload = {};
      //   const formData = new FormData();
      //   formData.append("file", this.url);
      //   payload.file = formData;
      //   payload.endpoint = this.endpoint;
      //   this.clearMessage();
      //   FileService.uploadFile(payload)
      //     .then(() => {
      //       this.message = "File uploaded.";
      //       this.$emit("fileUploaded");
      //     })
      //     .catch((error) => (this.error = getError(error)));
      // },
    },
  }
</script>