<template>
  <div>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <table>
        <tr>
          <label for="selectedCategory">선택 항목:</label>
          <td>
            <select v-model="form.categoryId" id="selectedCategory">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.category }}</option>
            </select>
          </td>
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
        <input type="submit" value="등록" />
        <input type="button" value="취소" @click="cancel" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: {
        id: "",
        fileName: "",
      },
      form: {
        categoryId: 0,
        id: 0,
        writer: "",
        title: "",
        password: "",
        contents: "",
        view: 0,
      },
    };
  },
  created() {
    this.$store.dispatch("getCategory");
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
  },
  methods: {
    submitForm() {
      this.$store.dispatch("postArticle", this.form);
    },
    cancel() {
      this.$router.push("/boards/free/list");
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
