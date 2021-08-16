<template>
  <v-form v-model="valid" @submit.prevent="onSubmit" class="commentary-form">
    <v-textarea
        v-model="body"
        :rules="commentaryRules"
        :counter="1000"
        clearable
        filled
        label="Новый комментарий"
        append-icon="mdi-script-text"
        required
    ></v-textarea>
    <v-btn
        elevation="0"
        type="submit"
        block
    >
      Отправить
    </v-btn>
  </v-form>
</template>

<script>

import { uuid } from 'vue-uuid';
import {user} from "@/service/Auth";

export default {
  data() {
    return {
      body: '',
      valid: false,
      commentaryRules: [
        v => !!v || 'Нельзя отправить пустое поле',
        v => v.length <= 1000 || 'Комментарий не длиннее 1000 символов',
        v => v.split(' ').filter(function (n) {return n !== ''}).length > 2 || 'Не меньше 3 слов в комментарии'
      ],
    }
  },
  methods: {
    onSubmit() {
      if(this.valid) {
        const newComment = {
          id: uuid.v4(),
          created_at: new Date().toISOString(),
          body: this.body,
          author: {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            company: user.company
          }
        }

        this.$emit('add-comment', newComment)
        this.body = '';
      } else {
        alert(`Ошибка! Сообщение содержит меньше 3 слов или длина сообщения больше 1000 символов!`)
      }
    }
  }
}
</script>

<style scoped>
  .commentary-form {
    margin: 2em auto;
    width: 35%;
    min-width: 320px;
  }
</style>