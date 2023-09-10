<template>
  <div id="app">
    <HeaderWeb />
    <Nuxt />
    <FeatureSection />
    <FooterWeb />
  </div>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderWeb from '@/components/HeaderWeb.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import FooterWeb from '@/components/FooterWeb.vue'
export default {
  // Dideklarasikan agar dapat diakses oleh template
  components: {
    HeaderWeb,
    FeatureSection,
    FooterWeb,
  },
}
</script>
<style>
</style>
