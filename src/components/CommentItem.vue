<template>
  <li>
    <span>
      <strong>{{ comment.id }}</strong>
    </span>
    <span>
      <i>{{ comment.body }}</i>
    </span>
    <span>{{ comment.created_at }}</span>
    <span>{{ comment.author.name }}</span>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
</style>