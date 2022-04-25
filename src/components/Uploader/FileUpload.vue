<template>
  <form @submit.prevent="uploadFile">
    <div class="mb-4">
      <label for="file" class="sr-only">
        {{ label }}
      </label>
      <input type="file" name="image" :accept="fileTypes" @change="fileChange" id="file" />
    </div>
    <BaseBtn text="Upload" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"/>
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/Base/BaseBtn";
import FileService from "@/services/FileService";
import FlashMessage from "@/components/Messages/FlashMessage";
import { mapGetters } from 'vuex';

export default {
  name: "FileUpload",
  props: {
    fileTypes: {
      type: Array,
      default: null,
    },
    endpoint: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      file: null,
      message: null,
      error: null,
    };
  },

  async created() {
    // await this.$store.dispatch('ads/getAd', this.ads[this.ads.length - 1])
    // console.log('Where is my fucking ad?', this.ads[this.ads.length - 1])
  },

  methods: {
    clearMessage() {
      this.error = null;
      this.message = null;
    },
    fileChange(event) {
      this.clearMessage();
      this.file = event.target.files[0];
      console.log("file", this.file)
    },
    uploadFile() {
      const payload = {};
      const formData = new FormData();
      formData.append("file", this.file);
      console.log("file", formData)
      payload.image = formData;
      payload.endpoint = this.endpoint;
      console.log('endpoint', payload.endpoint, payload.image)
      this.clearMessage();
      FileService.uploadFile(payload)
        .then(() => {
          this.message = "File uploaded.";
          this.$emit("fileUploaded");
        })
        .catch((error) => (this.error = getError(error)));
    },
  },

  computed: {
    ...mapGetters('ads', [ 'ads' ])
  }
};
</script>