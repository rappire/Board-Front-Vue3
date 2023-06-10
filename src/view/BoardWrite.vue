<template>
  <div>
    <WriteHeader />
    <WriteBody />
    <WriteFooter />
  </div>
</template>

<script>
import WriteHeader from "@/components/Write/WriteHeader.vue";
import WriteBody from "@/components/Write/WriteBody.vue";
import WriteFooter from "@/components/Write/WriteFooter.vue";

export default {
  components: {
    WriteHeader,
    WriteBody,
    WriteFooter,
  },
};
</script>

<style></style>
