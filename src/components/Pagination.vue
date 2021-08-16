<template>
  <div>
    <button
        type="button"
        v-if="pageNum !== 1"
        @click="changePageNum(pageNum-1)"
    >
      <router-link
          :to="{ name: 'comments', query: { page: +pageNum-1 }}"
      >
        <p>
          Назад
        </p>
      </router-link>
    </button>
    <button
        class="page-number"
        type="button"
        v-for="pageNum in pages.slice(pageNum-1, +pageNum+10)"
        :key="pageNum"
        @click="changePageNum(pageNum)"
    >
      <router-link
          :to="{ name: 'comments', query: { page: pageNum }}"
      >
        <p>
          {{pageNum}}
        </p>
      </router-link>
    </button>
    <button
        type="button"
        v-if="pageNum < pages.length"
        @click="changePageNum(pageNum+1)"
    >
      <router-link
          :to="{ name: 'comments', query: { page: +pageNum+1 }}"
      >
        <p>
          Далее
        </p>
      </router-link>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    perPage: {
      type: Number
    },
    itemsCount: {
      type: Number
    },
    pageNum: {
      type: Number
    },
    pages: {
      type: Array
    }
  },
  model: {
    prop: 'pageNum',
    event: `changePageNum`
  },
  methods: {
    changePageNum(newPageNum) {
      this.$emit("changePageNum", newPageNum);
    },
  },
}
</script>