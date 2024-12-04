<template>
  <BannerSectionVue />
  <IconSectionVue />
  <CollectionSectionVue />
  <ReviewSectionVue />
  <CommentSectionVue />
  <BlogSectionVue />
  <TimelineSectionVue />
</template>

<script>
import BannerSectionVue from './Sections/BannerSection.vue'
import BlogSectionVue from './Sections/BlogSection.vue'
import CollectionSectionVue from './Sections/CollectionSection.vue'
import CommentSectionVue from './Sections/CommentSection.vue'
import IconSectionVue from './Sections/IconSection.vue'
import ReviewSectionVue from './Sections/ReviewSection.vue'
import TimelineSectionVue from './Sections/TimelineSection.vue'
export default {
  name: 'HomePage',
  components: {
    BannerSectionVue,
    IconSectionVue,
    CollectionSectionVue,
    ReviewSectionVue,
    CommentSectionVue,
    BlogSectionVue,
    TimelineSectionVue,
  },
}
</script>

<style>
</style>
