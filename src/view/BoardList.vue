<template>
  <div>
    <ListHeader />
    <ListBody />
    <ListFooter />
  </div>
</template>

<script>
import ListHeader from "@/components/List/ListHeader.vue";
import ListBody from "@/components/List/ListBody.vue";
import ListFooter from "@/components/List/ListFooter.vue";

export default {
  components: {
    ListHeader,
    ListBody,
    ListFooter,
  },
};
</script>

<style></style>
