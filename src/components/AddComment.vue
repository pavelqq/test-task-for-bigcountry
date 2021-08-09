<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="body">
    <button type="submit">Отправить</button>
  </form>
</template>

<script>

import { uuid } from 'vue-uuid';

export default {
  data() {
    return {
      body: '',
    }
  },
  methods: {
    onSubmit() {
      if(
          this.body.trim()
          && this.body.length < 1000
          && (this.body.split(' ').filter(function (n) {return n !== ''}).length) > 2
      ) {
        const newComment = {
          id: uuid.v4(),
          created_at: new Date().toISOString(),
          body: this.body,
          author: {
            id: 16,
            name: "John Doe",
            avatar: "http://placeimg.com/640/480/business",
            company: "BigCountry"
          }
        }

        this.$emit('add-comment', newComment)
        this.body = '';
      } else {
        console.log(`Ошибка! Сообщение содержит меньше 3 слов или длина сообщения больше 1000 символов!`)
      }
    }
  }
}
</script>

<style scoped>
  input {
    width: 50%;
    min-width: 200px;
    height: 30px;
    border: 1px solid #ccc;
  }
  button {
    border: 1px solid #ccc;
    height: 30px;
    width: 10%;
    min-width: 100px;
  }
</style>