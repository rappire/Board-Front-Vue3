<template>
  <div>
    <table class="post-table">
      <thead>
        <tr>
          <th>카테고리</th>
          <!-- <th></th> -->
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>등록 일시</th>
          <th>수정 일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postList" v-bind:key="post.id">
          <td>{{ post.category }}</td>
          <td>
            <router-link v-bind:to="`/board/free/view/${post.id}`">{{ post.title }}</router-link>
          </td>
          <td>{{ post.writer }}</td>
          <td>{{ post.views }}</td>
          <td>{{ post.regDate }}</td>
          <td>{{ post.editDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("getArticleList");
  },
  computed: {
    postList() {
      return this.$store.getters.getDisplayedArticleList;
    },
  },
};
</script>

<style scoped>
.post-table {
  width: 100%;
  border-collapse: collapse;
}

.post-table th,
.post-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.post-table th {
  background-color: #f5f5f5;
  text-align: center;
}

.post-table td {
  text-align: center;
}
</style>
