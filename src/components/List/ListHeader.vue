<template>
  <header>
    <input type="text" placeholder="검색어 입력" />
    <button @click="search">검색</button>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
}
input {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
