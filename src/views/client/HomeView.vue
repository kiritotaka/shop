<template>
  <BannerSectionVue />
  <IconSectionVue />
  <CollectionSectionVue />
  <ReviewSectionVue />
  <CommentSectionVue />
  <BlogSectionVue />
</template>

<script>
import BannerSectionVue from './Sections/BannerSection.vue'
import BlogSectionVue from './Sections/BlogSection.vue'
import CollectionSectionVue from './Sections/CollectionSection.vue'
import CommentSectionVue from './Sections/CommentSection.vue'
import IconSectionVue from './Sections/IconSection.vue'
import ReviewSectionVue from './Sections/ReviewSection.vue'
export default {
  name: 'HomePage',
  components: {
    BannerSectionVue,
    IconSectionVue,
    CollectionSectionVue,
    ReviewSectionVue,
    CommentSectionVue,
    BlogSectionVue,
  },
}
</script>

<style>
</style>
