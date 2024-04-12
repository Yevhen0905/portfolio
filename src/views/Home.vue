<template>
  <div :class="['hero', theme]">
    <Header v-model="theme" />
    <main class="main">
      <section class="section_home" id="home">
        <About />
      </section>
      <section class="section_skills" id="skills">
        <Skills />
      </section>
      <section class="section_project" id="project">
        <Projects />
      </section>
    </main>
    <Footer />
    <BackTop v-show="visibleBackTop" @click="goToTop" />
  </div>
</template>

<script setup>
  import About from '../components/About.vue';
  import Skills from '../components/Skills.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import BackTop from '../components/BackTop.vue';
  import Projects from '../components/Projects.vue';

  import {ref, onMounted, onUnmounted, watch} from 'vue';

  const theme = ref(localStorage.getItem('theme') || 'theme_light');
  const visibleBackTop = ref(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    visibleBackTop.value = scrollTop > 300;
  };

  const goToTop = () => {
    const header = document.querySelector('#header');
    header.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
  });

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style lang="scss">
  .section_home {
    height: calc(100vh - var(--header-height));
    background: var(--bg-color-primary);
    min-height: 415px;
  }
</style>
