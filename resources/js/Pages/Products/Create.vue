<template>
  <div class="container">
    <div class="container">
      <h2 class="display-2">Create new Product</h2>
    </div>
    <div class="container">
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: this.$inertia.form({
        name: "",
      }),
    };
  },
  methods: {
    submit() {
      this.product.post("/products", {
        onFinish: () => this.product.reset(),
      });
    },
  },
};
</script>