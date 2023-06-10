<template>
  <div>
    <h1>글 삭제</h1>
    <form @submit.prevent="deleteArticle">
      <label for="password">비밀번호:</label>
      <input type="password" v-model="password" required />
      <button type="submit">삭제</button>
      <button type="button" @click="cancel">취소</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    deleteArticle() {
      const id = this.$route.params.id;
      this.$store.dispatch("deleteArticle", { id: id, password: this.password });
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style>
/* 삭제 페이지의 스타일 */
</style>
