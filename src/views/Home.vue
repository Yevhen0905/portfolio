<template>
  <div class="hero">
    <header class="header" id="header">
      <div class="container">
        <nav class="nav">
          <ul class="list">
            <li class="list_item">
              <a class="list_item_link" href="#home">Home</a>
            </li>
            <li class="list_item">
              <a class="list_item_link" href="#skills">Skills</a>
            </li>
            <li class="list_item">
              <a class="list_item_link" href="#project">Project</a>
            </li>
            <li class="list_item">
              <a class="list_item_link" href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <section class="section_home" id="home">
        <About />
      </section>
      <section class="section_skills" id="skills">
        <Skills />
      </section>
      <section class="section_project" id="project">
        <div class="container">
          <Projects />
        </div>
      </section>
    </main>
    <footer class="footer" id="contacts">
      <div class="container">
        <Footer />
      </div>
    </footer>
    <BackTop v-show="visibleBackTop" @click="goToTop" />
  </div>
</template>

<script setup>
  import About from '../components/About.vue';
  import Skills from '../components/Skills.vue';
  import Footer from '../components/Footer.vue';
  import BackTop from '../components/BackTop.vue';
  import Projects from '../components/Projects.vue';

  import {ref, onMounted, onUnmounted} from 'vue';

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

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style lang="scss">
  .header {
    height: var(--header-height);
    background: rgb(229 231 232 / 45%);
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 25px;
    @media only screen and (max-width: 768px) {
      gap: 15px;
    }

    &_item {
      font-size: 22px;
      font-weight: 500;
      color: var(--color-grey);
      transition: var(--transition);

      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }

      &:hover {
        color: var(--color-hover-text);
      }
    }
  }

  .section_home {
    height: calc(100vh - var(--header-height));
    background-color: rgb(4, 10, 55);
    min-height: 415px;
  }

  .link_btn {
    display: block;
    font-size: 21px;
    border-radius: 5px;
    padding: 8px 20px;
    width: fit-content;

    @media only screen and (max-width: 768px) {
      padding: 4px 12px;
    }
  }

  .red {
    background-color: var(--color-red);
    color: var(--base-color);
  }

  .section_project {
    background-color: rgb(4, 10, 55);
  }
</style>
