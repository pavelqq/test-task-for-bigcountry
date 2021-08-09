<template>
  <Loader v-if="loading" />
  <div
      v-else-if="displayedComments.length"
  >
    <AddComment
        class="addCommentForm"
        @add-comment="addComment"
    />
    <div>
      <button type="button" v-if="pageNum !== 1" @click="pageNum--">
        <router-link :to="{ name: 'comments', query: { page: pageNum-1 }}">
          Назад
        </router-link>
      </button>
      <button class="page-number" type="button" v-for="pageNumber in pages.slice(pageNum-1, pageNum+10)"
          :key="pageNumber" @click="pageNum = pageNumber">
        <router-link :to="{ name: 'comments', query: { page: pageNumber }}">
          {{pageNumber}}
        </router-link>
      </button>
      <button type="button" v-if="pageNum < pages.length" @click="pageNum++">
        <router-link :to="{ name: 'comments', query: { page: +pageNum+1 }}">
          Далее
        </router-link>
      </button>
    </div>
    <CommentsList
        v-bind:comments="displayedComments"
    />
  </div>
  <p v-else class="loading-error">Нет комментариев.</p>
</template>

<script>

import CommentsList from '@/components/CommentsList'
import AddComment from "@/components/AddComment";
import Loader from '@/components/Loader'
import axios from "axios";

export default {
  data() {
    return {
      comments: [],
      baseUrl: '//bigcountry-task.vercel.app/',
      pageNum: this.$route.query['page'] ? this.$route.query['page'] : 1,
      perPage: 20,
      pages: [],
      loading: true
    }
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
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
      let pageNum = this.pageNum;
      let perPage = this.perPage;
      let from = (pageNum * perPage) - perPage;
      let to = (pageNum * perPage);
      return  comments.slice(from, to);
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
.addCommentForm {
  margin: 1%
}
.page-number, .loading-error {
  margin: 0.7%;
}
</style>
