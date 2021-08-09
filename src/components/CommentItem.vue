<template>
  <v-card
      max-width="100%"
      class="mx-auto card-item"
  >
    <v-list-item>
      <v-list-item-avatar color="grey">
        <img
            :src='comment.author.avatar'
            :alt='comment.author.name'
        >
      </v-list-item-avatar>
      <v-list-item-content>
        <v-container>
          <v-row no-gutters class="author">
            <v-col md="6" class="author-bio">
              <v-list-item-title class="author-name">{{ comment.author.name }}</v-list-item-title>
              <v-list-item-subtitle class="author-company">{{ comment.author.company }}</v-list-item-subtitle>
            </v-col>
            <v-col md="6" class="commentary-date" >
              <v-list-item-subtitle class="overline">{{ comment.created_at | moment }}</v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <p class="font-weight-light">{{ comment.body }}</p>
    </v-card-text>
  </v-card>
</template>

<script>

import moment from 'moment';

export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('LLL');
    }
  }
}
</script>

<style scoped>
  .card-item {
    margin: 2em auto;
    width: 30%;
    min-width: 300px;
  }
  .author {
    justify-content: flex-start;
  }
  .author-name, .author-company {
    text-align: left;
  }
  .commentary-date {
    text-align: right;
  }
</style>