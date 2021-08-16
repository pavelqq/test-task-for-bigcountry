<template>
  <Loader v-if="loading" />
  <div
      v-else-if="displayedComments.length"
  >
    <AddComment
        class="addCommentForm"
        @add-comment="addComment"
    />
    <Pagination
        v-model="pageNum"
        :per-page="perPage"
        :items-count="comments.length"
        :pages="pages"
    />
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
import Pagination from "@/components/Pagination";

import {getCommentsRequest} from "@/service/Api";

export default {
  data() {
    return {
      pageNum: +this.$route.query['page'] ? +this.$route.query['page'] : 1,
      perPage: 20,
      comments: [],
      pages: [],
      loading: true
    }
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    async getComments() {
      try {
        const res = await getCommentsRequest()
        this.comments = res.data
        this.loading = false
      } catch (e) {
        alert('Ошибка: ' + e)
      }
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
      return comments.slice(from, to);
    },
  },
  mounted() {
    this.getComments();
  },
  watch: {
    comments() {
      this.setPages();
    }
  },
  computed: {
    displayedComments() {
      return this.paginate(this.comments);
    },
  },
  components: {
    AddComment,
    CommentsList,
    Loader,
    Pagination
  }
}
</script>

<style>
.addCommentForm {
  margin: 1%
}
.loading-error {
  margin: 0.7%;
}
</style>