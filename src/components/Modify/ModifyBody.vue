<template>
  <div>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <table>
        <tr>
          <td>카테고리: {{ article.category }}</td>
          <td>등록일시: {{ article.regDate }}</td>
          <td>수정일시: {{ article.editDate }}</td>
          <td>
            <label for="writer">작성자:</label>
            <input type="text" name="writer" id="writer" v-model="form.writer" required />
          </td>
          <td>
            <label for="title">제목:</label>
            <input type="text" name="title" id="title" v-model="form.title" required />
          </td>
          <td>
            <label for="password">비밀번호:</label>
            <input type="password" name="password" id="password" v-model="form.password" placeholder="비밀번호" required />
          </td>
          <td>
            <p>내용:</p>
            <textarea name="contents" v-model="form.contents" required></textarea>
          </td>
          <!-- <td>
            <template v-if="fileCheck">
              <a :href="`/download/${file.id}`">{{ file.fileName }}</a>
            </template>
            <template v-else>
              <label for="file">첨부 파일:</label>
              <input type="file" name="file" id="file" />
            </template>
          </td> -->
        </tr>
      </table>
      <div>
        <input type="submit" value="수정" />
        <input type="button" value="취소" @click="cancel" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      file: {
        id: "",
        fileName: "",
      },
      form: {
        id: 0,
        writer: "",
        title: "",
        password: "",
        contents: "",
      },
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.form.id = this.id;
    this.$store.dispatch("getArticle", this.id);
    this.form.contents = this.article.contents;
    this.form.writer = this.article.writer;
    this.form.title = this.article.title;
  },
  computed: {
    article() {
      return this.$store.getters.getArticle;
    },
  },
  methods: {
    submitForm() {
      this.$store.dispatch("putArticle", this.form);
    },
    cancel() {
      this.$router.push("/boards/free/list");
      // 취소 버튼 클릭 시 이전 페이지로 돌아가는 로직을 구현하세요.
      // 예를 들어, 라우터의 push 메서드를 사용하여 이동할 수 있습니다.
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

label,
td {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

textarea {
  width: 600px;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="file"] {
  margin-top: 5px;
}
input[type="submit"],
input[type="button"] {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
