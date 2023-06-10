<template>
  <div>
    <ArticleHeader />
    <hr />
    <ArticleBody />
    <hr />
    <ArticleComment />
    <hr />
    <ArticleFooter />
  </div>
</template>

<script>
import ArticleHeader from "@/components/Article/ArticleHeader.vue";
import ArticleFooter from "@/components/Article/ArticleFooter.vue";
import ArticleComment from "@/components/Article/ArticleComment.vue";
import ArticleBody from "@/components/Article/ArticleBody.vue";
export default {
  components: {
    ArticleHeader,
    ArticleBody,
    ArticleComment,
    ArticleFooter,
  },
};
</script>

<style></style>
