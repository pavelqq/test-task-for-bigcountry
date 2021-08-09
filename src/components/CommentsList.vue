<template>
  <div>
    <ul>
      <CommentItem
        v-for="comment of comments"
        v-bind:comment="comment"
        :key="comment.id"
        v-on:add-comment="addComment"
      />
    </ul>
  </div>
</template>

<script>

import CommentItem from '@/components/CommentItem'

export default {
  props: ['comments'],
  components: {
    CommentItem
  },
  methods: {
    addComment(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 1%;
    padding: 0;
  }
</style>