<template>
  <v-card
    class="mx-auto ma-5 pa-5"
    max-width="344"
    elevation="24"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ organization }}
      </p>
      <div class="text--primary">
        {{ title }}
      </div>
      <div class="text--primary">
        {{ description }}
      </div>
      <v-divider></v-divider>
      <v-btn color="primary">View Adsets</v-btn>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Continue...
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            SAMPLE PROOF 
          </p>
          <p>... And hopefully this could be where we show the output of said proof</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'Proofs',
    props: [ 'title', 'type', 'description', 'organization' ],
    data: () => ({
      reveal: false,
    }),
  }
</script>

<style>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>