<template>
  <HeaderComponentVue />
  <div class="max-w-[85rem] min-h-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
    <router-view></router-view>
  </div>
  <FooterComponentVue />
</template>

<script>
import FooterComponentVue from '../../components/client/FooterComponent.vue'
import HeaderComponentVue from '../../components/client/HeaderComponent.vue'
export default {
  name: 'Homepage',
  components: {
    FooterComponentVue,
    HeaderComponentVue,
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>
