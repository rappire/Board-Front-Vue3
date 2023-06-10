<template>
  <div>
    <ModifyHeader />
    <ModifyBody />
    <ModifyFooter />
  </div>
</template>

<script>
import ModifyHeader from "@/components/Modify/ModifyHeader.vue";
import ModifyBody from "@/components/Modify/ModifyBody.vue";
import ModifyFooter from "@/components/Modify/ModifyFooter.vue";
export default {
  components: {
    ModifyHeader,
    ModifyBody,
    ModifyFooter,
  },
};
</script>

<style scoped></style>
