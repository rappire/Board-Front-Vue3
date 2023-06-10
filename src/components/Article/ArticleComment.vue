<template>
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{ comment.writer }}</span>
        <p>{{ comment.contents }}</p>
      </li>
    </ul>

    <form @submit.prevent="submitComment">
      <textarea v-model="newComment.contents" rows="1" cols="50" placeholder="댓글 내용"></textarea>
      <button type="submit">댓글 작성</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: {
        // 새로 작성할 댓글
        writer: "",
        contents: "",
        articleId: this.$route.params.id,
      },
    };
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
      const currentTime = new Date();

      this.newComment.writer = this.dayToInt(currentTime);
      const payload = {
        id: this.$route.params.id,
        comment: this.newComment,
      };
      this.$store.dispatch("postComment", payload);
      // 예시에서는 comments 배열에 새로운 댓글을 추가합니다.
      this.comments.push({ ...this.newComment });
      // 새로운 댓글 작성 후 폼을 초기화합니다.
      this.newComment.contents = "";
      this.newComment.writer = "";
    },
  },
  computed: {
    comments() {
      let temp = this.$store.getters.getComment;
      if (temp === undefined) {
        temp = [];
      }
      return temp;
    },
  },
};
</script>
<style scoped>
.comment-container {
  margin-bottom: 20px;
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
  padding: 10px;
  border-radius: 4px;
}

.comment-container li span {
  font-weight: bold;
  margin-right: 10px;
}

.post-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.post-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
}
</style>
