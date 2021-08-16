<template>
  <div>
    <ul>
      <CommentItem
        v-for="comment of comments"
        v-bind:comment="comment"
        :key="comment.id"
      />
    </ul>
  </div>
</template>

<script>

import CommentItem from '@/components/CommentItem'

export default {
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    CommentItem
  },
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 1%;
    padding: 0;
  }
</style>