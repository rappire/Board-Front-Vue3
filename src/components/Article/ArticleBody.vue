<template>
  <div>
    <header>
      <div class="header-item">{{ this.article.category }}</div>
      <div class="header-item">{{ this.article.title }}</div>
      <div class="header-item">등록일시: {{ this.article.regDate }}</div>
      <div class="header-item">수정일시: {{ this.article.editDate }}</div>
      <div class="header-item">조회수: {{ this.article.views }}</div>
      <div class="header-item">작성자: {{ this.article.writer }}</div>
    </header>

    <body class="post-body">
      {{ this.article.contents }}
    </body>

    <div class="comment-container">
      <ul>
        <li v-for="comment in this.comments" :key="comment.id">
          <span>{{ comment.writer }}</span>
          <p>{{ comment.contents }}</p>
        </li>
      </ul>
      <form @submit.prevent="submitComment">
        <textarea v-model="newComment.contents" rows="1" cols="50" placeholder="댓글 내용"></textarea>
        <button type="submit">댓글 작성</button>
      </form>
    </div>

    <footer>
      <button @click="goToList" class="button">목록</button>
      <button @click="goToEdit" class="button">수정</button>
      <button @click="goToDelete" class="button">삭제</button>
    </footer>
  </div>
</template>

<script>
import restApi from "@/api/restApi";

export default {
  data() {
    return {
      newComment: {
        // 새로 작성할 댓글
        writer: "",
        contents: "",
        articleId: 0,
      },
      article: {
        category: "",
        title: "",
        regDate: "",
        editDate: "",
        views: "",
        writer: "",
        contents: "",
      },
      comments: [
        {
          writer: "",
          contents: "",
        },
      ],
      payload: 0,
    };
  },
  async created() {
    this.payload = this.$route.params.id;
    this.newComment.articleId = this.payload;
    this.id = this.$route.params.id;

    // article 및 comments 불러와서 초기화
    const returnObj = await restApi.get(`/article/${this.payload}`);
    this.article = returnObj.article;
    this.comments = returnObj.comment;
  },
  methods: {
    dayToInt(date) {
      const year = date.getFullYear();
      const month = `0${1 + date.getMonth()}`.slice(-2);
      const day = `0${date.getDate()}`.slice(-2);
      return Number(`${year}${month}${day}`);
    },

    submitComment() {
      // 댓글을 추가하거나 서버로 전송하는 로직을 수행합니다.
      this.newComment.writer = this.dayToInt(new Date());
      restApi.post(`/comment/${this.payload}`, this.newComment);
      this.comments.push({ ...this.newComment });

      // 새로운 댓글 작성 후 폼을 초기화합니다.
      this.newComment.contents = "";
      this.newComment.writer = "";
    },
    goToList() {
      this.$router.push("/boards/free/list");
    },
    goToEdit() {
      this.$router.push(`/board/free/modify/${this.id}`);
    },
    goToDelete() {
      this.$router.push(`/board/free/delete/${this.id}`);
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

body {
  font-size: 20px;
  margin-bottom: 10px;
}
.comment-container {
  margin-bottom: 10px;
  text-align: left;
}

.comment-container h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.comment-container ul {
  list-style-type: none;
  padding: 0;
}

.comment-container li {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
}

.comment-container li span {
  font-weight: bold;
  margin-right: 10px;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
