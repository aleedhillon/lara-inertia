<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" href="/">Lara Inertia</Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-item nav-link" :class="{ 'active': $page.url === '/' }" href="/">Home</Link>
        <Link class="nav-item nav-link" :class="{ 'active': $page.url === route('products.index') }" :href="route('products.index')">Products</Link>
      </div>
    </div>
  </nav>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
    components: {
        Link
    }
}
</script>