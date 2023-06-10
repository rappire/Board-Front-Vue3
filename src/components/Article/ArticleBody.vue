<template>
  <div class="post-body">
    {{ post.contents }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getArticle", this.id);
  },
  computed: {
    post() {
      return this.$store.getters.getArticle;
    },
  },
};
</script>

<style scoped>
.post-body {
  margin-bottom: 10px;
}
</style>
