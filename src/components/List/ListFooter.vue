<template>
  <footer class="footer">
    <div class="footer-buttons">
      <button class="footer-button" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">이전</button>
      <div class="pagination">
        <span
          v-for="pageNumber in displayedPages"
          :key="pageNumber"
          class="footer-button"
          :class="{ active: currentPage === pageNumber }"
          @click="goToPage(pageNumber)"
          >{{ pageNumber }}</span
        >
      </div>
      <button class="footer-button" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">다음</button>
    </div>
    <button class="footer-button" @click="goToCreatePost">등록</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // 현재 페이지 번호
      displayedPages: [], // 화면에 표시될 페이지 번호 배열
      displayOffset: 5, // 화면에 표시할 페이지 번호 개수의 절반
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.updateDisplayedPages();
    //   this.updateDisplayArticle();
    //   this.displayOffset = this.$store.getters.displayOffset;
    // });
  },
  computed: {
    totalPages() {
      return parseInt(this.$store.getters.getArticleNum / 10);
    },
  },
  methods: {
    goToPage(pageNumber) {
      // 페이지 번호를 클릭했을 때 실행되는 메서드입니다.
      this.currentPage = pageNumber;
      this.updateDisplayedPages();
      // 페이지 이동 로직 추가...
    },
    updateDisplayArticle() {
      const articleList = this.$store.getters.getArticleList;
      const tempList = [];
      for (let i = this.currentPage - 1; i < this.currentPage - 1 + this.displayOffset * 2; i++) {
        tempList.push(articleList[i]);
        console.log(i);
      }
      this.$store.commit("setDisplayedArticleList", articleList);
    },
    updateDisplayedPages() {
      // 현재 페이지를 중심으로 화면에 표시할 페이지 번호 배열을 업데이트합니다.
      const startPage = Math.max(1, this.currentPage - this.displayOffset);
      this.displayedPages = [];
      for (let i = startPage; i <= this.currentPage + this.displayOffset; i++) {
        if (this.totalPages < i) {
          break;
        }
        this.displayedPages.push(i);
      }
    },
    goToCreatePost() {
      // 등록 버튼을 클릭했을 때 실행되는 메서드입니다.
      this.$router.push("/board/free/write");
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 10px;
  background-color: #f5f5f5;
}

.footer-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.footer-button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.footer-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-button.active {
  background-color: #0056b3;
}
</style>
