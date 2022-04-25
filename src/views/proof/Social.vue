<template>
  <div class="backdrop" @click.self="closeModalS">
    <div class="modal" @click.self="closeModalS">
      <v-card align=center class="black">
        <img :src="proof.url" alt="sample" />
        <p class="white--text">Description:</p>
        <p class="white--text">
          {{ proof.description }}
        </p>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Social",
  data() {
    return {
      url: ''
    }
  },
  props: ["files"],
  async created() {
    await this.$store.dispatch('proof/getProof', this.$route.params.id);
    // await this.$store.dispatch("proof/getImage", this.$route.params.id);
    // await this.$store.dispatch('ads/getImage', this.$route.params.id)
  },
  methods: {
    closeModalS() {
      this.$emit("shut");
    },

    // async getImage() {
    //   var result = await this.$store.dispatch("proof/getImage", this.$route.params.id);
    //   this.url = result;
    // }
  },

  computed: {
    ...mapGetters('proof', ['proof'])
  }
};
</script>

<style>
.modal {
  vertical-align: middle;
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
}
</style>