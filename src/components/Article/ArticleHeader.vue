<template>
  <header>
    <div class="header-item">{{ post.category }}</div>
    <div class="header-item">{{ post.title }}</div>
    <div class="header-item">등록일시: {{ post.regDate }}</div>
    <div class="header-item">수정일시: {{ post.editDate }}</div>
    <div class="header-item">조회수: {{ post.views }}</div>
    <div class="header-item">작성자: {{ post.writer }}</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  computed: {
    post() {
      return this.$store.getters.getArticle;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}

.header-item {
  margin-right: 10px;
}
</style>
