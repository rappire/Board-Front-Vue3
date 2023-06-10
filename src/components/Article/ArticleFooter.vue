<template>
  <div class="post-footer">
    <button @click="goToList" class="post-button">목록</button>
    <button @click="goToEdit" class="post-button">수정</button>
    <button @click="goToDelete" class="post-button">삭제</button>
  </div>
</template>

<script>
export default {
  data() {
    return { id: 0 };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    goToList() {
      this.$router.push("/boards/free/list");
    },
    goToEdit() {
      console.log(`/board/free/modify/${this.id}`);
      this.$router.push(`/board/free/modify/${this.id}`);
    },
    goToDelete() {
      this.$router.push(`/board/free/delete/${this.id}`);
    },
  },
};
</script>

<style>
.post-footer {
  display: flex;
  justify-content: flex-end;
}
.post-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
