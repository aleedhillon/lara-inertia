<template>
  <div class="container">
    <Head title="Products" />
    <h2 class="display-2">Products</h2>
    <Alert v-if="message" :message="message"></Alert>

    <div class="container">
      <button @click="openProductModal" class="btn btn-success">
        Create Product
      </button>
      <div id="create-product-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Enter the product details</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="submit">
              <div class="modal-body">
                <div>
                  <label for="name" class="form-label">Name</label>
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    v-model="product.name"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <div class="mb-3">
                  <input type="submit" value="Save" class="btn btn-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!products.length" class="container">No product yet.</div>
    <div class="container row">
      <div
        class="card col-md-3 mx-2 my-2"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ product.id + " " + product.name }}</h5>
          <p class="card-text">{{ getLocalDateTime(product.created_at) }}</p>
          <button
            @click="deleteProduct(product.id)"
            class="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Main from "./../../Layouts/Main.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Alert from "./../../Componets/Alert.vue";
import Fixed from "./../../Componets/Fixed.vue";
export default {
  // layout: Main,
  components: {
    Link,
    Alert,
    Main,
    Head,
  },
  props: {
    products: Array,
    message: String,
  },
  data() {
    return {
      product: this.$inertia.form({
        name: "",
        createProductModal: null,
      }),
    };
  },
  methods: {
    getLocalDateTime(UTCDateTime) {
      return new Date(UTCDateTime).toLocaleString();
    },
    deleteProduct(productId) {
      this.$inertia.delete(route("products.destroy", [productId]));
    },
    openProductModal() {
      this.createProductModal.show();
    },
    submit() {
      this.product.post("/products", {
        onFinish: () => {
          this.product.name = "";
          this.createProductModal.hide();
        },
      });
    },
  },
  mounted() {
    this.createProductModal = new bootstrap.Modal(
      document.getElementById("create-product-modal"),
      {
        focus: true,
      }
    );
  },
};
</script>