<template>
  <div>
    <h1>등록</h1>
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
          <input type="file" ref="fileInput" @change="handleFileChange" />
          <!-- 등록된 파일 목록 -->
          <ul>
            <li v-for="(file, index) in uploadedFiles" :key="index">
              {{ file.name }}
              <button @click="removeFile(index)">삭제</button>
            </li>
          </ul>
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
import restApi from "@/api/restApi";

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
      categories: {},
      uploadedFiles: [],
    };
  },
  async created() {
    const result = await restApi.get(`/category`);
    this.categories = result.category;
  },
  computed: {},
  methods: {
    async submitForm() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      // try {
      const formData = new FormData();
      for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("files", this.uploadedFiles[i]);
      }

      formData.append("article", new Blob([JSON.stringify(this.form)], { type: "application/json" }));
      console.log(formData);
      await restApi.post(`/article`, formData, headers);
      this.$router.push("/boards/free/list");
      // } catch {
      //   alert("실패");
      // }
    },
    cancel() {
      this.$router.push("/boards/free/list");
    },
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1); // 해당 인덱스의 파일을 배열에서 제거합니다.
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
