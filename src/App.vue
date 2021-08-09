<template>
  <div id="app">
    <h1>Тестовое задание для <a href="https://bolshayastrana.com/">bolshayastrana.com</a></h1>
    <AddComment
        class="addCommentForm"
        @add-comment="addComment"
    />
    <div>
      <button
          type="button"
          v-if="page !== 1"
          @click="page--"
      >
        Туда
      </button>
      <button
          type="button"
          v-for="pageNumber in pages.slice(page-1, page+5)"
          :key="pageNumber"
          @click="page = pageNumber"
      >
        {{pageNumber}}
      </button>
      <button
          type="button"
          @click="page++"
          v-if="page < pages.length"
      >
        Сюда
      </button>
    </div>
    <Loader v-if="loading" />
    <CommentsList
        v-else-if="displayedComments.length"
        v-bind:comments="displayedComments"
    />
    <p v-else>Нет комментариев.</p>
  </div>
</template>

<script>

import CommentsList from '@/components/CommentsList'
import AddComment from "@/components/AddComment";
import Loader from '@/components/Loader'
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      comments: [],
      baseUrl: '//bigcountry-task.vercel.app/',
      page: 1,
      perPage: 20,
      pages: [],
      loading: true
    }
  },
  methods: {
    getPosts() {
      axios.get(this.baseUrl+'comments.json')
          .then(response => {
            this.comments = response.data;
            this.loading = false
          })
          .catch(response => {
            console.log(response);
          });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.comments.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(comments) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  comments.slice(from, to);
    },
    addComment(comment) {
      this.comments.unshift(comment)
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    comments () {
      this.setPages();
    }
  },
  computed: {
    displayedComments() {
      return this.paginate(this.comments);
    }
  },
  components: {
    AddComment,
    CommentsList,
    Loader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.addCommentForm {
  margin: 1%
}
</style>
