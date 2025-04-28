<template>
  <div :class="['hero', theme]">
    <Header v-model="theme" />
    <main class="main" id="home">
      <section class="section_home">
        <About />
      </section>
      <section class="section_skills" id="skills">
        <Skills />
      </section>
      <section class="section_project" id="project">
        <Projects />
      </section>
    </main>
    <Footer id="contacts" />
    <BackTop v-show="visibleBackTop" @click="goToTop" />
  </div>
</template>

<script setup>
  import About from '../components/About.vue'
  import Skills from '../components/Skills.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import BackTop from '../components/BackTop.vue'
  import Projects from '../components/Projects.vue'

  import { ref, onMounted, onUnmounted, watch } from 'vue'

  const theme = ref(localStorage.getItem('theme') || 'theme_light')
  const visibleBackTop = ref(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    visibleBackTop.value = scrollTop > 180
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss">
  .section_home {
    position: relative;
    height: 100vh;
    background: var(--bg-color-primary);
    min-height: 415px;
    overflow: hidden;
  }

  #home,
  #skills,
  #project,
  #contacts {
    scroll-margin-top: 68px;
  }
</style>
