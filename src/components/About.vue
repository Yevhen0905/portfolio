<template>
  <div class="container">
    <div class="wrapper_home" ref="mainTitle">
      <div class="home_text">
        <h1 class="title">I`m Vittsenko Evgen</h1>
        <p class="description">
          I am a front-end developer with almost 2 years of experience. I specialise in building
          website and web application interfaces, focusing on delivering maximum business value.
          Below, you can find my CV, which details my experience.
        </p>
      </div>
      <div class="home_icon">
        <SocialLinks />
      </div>
      <div class="home_btn">
        <a href="#project" class="link_btn red"> View Project </a>
        <a href="https://yevhen0905.github.io/resume_fe/" class="link_btn red" target="_blank">
          Open CV
        </a>
        <a
          href="file/Resume_Frontend_dev_Vittsenko_Evgen.pdf"
          class="link_btn red"
          download="Resume_Frontend_dev_Vittsenko_Evgen.pdf"
          type="application/pdf"
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
    <Animation />
  </div>
</template>

<script setup>
  import Animation from './Animation.vue'
  import SocialLinks from './SocialLinks.vue'

  import { ref, onMounted } from 'vue'

  const mainTitle = ref(null)

  onMounted(() => mainTitle.value.classList.add('loaded'))
</script>

<style lang="scss">
  .wrapper_home {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    gap: 18px;
    width: 100%;
    height: 100%;
  }

  .description {
    max-width: 800px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    color: var(--base-color);
    background: linear-gradient(45deg, #4158d0 0%, #542551 27%, #342e23 100%);
    -webkit-background-clip: text;
    -webkit-text-stroke: 3px transparent;

    @media only screen and (max-width: 768px) {
      font-size: 19px;
    }
  }

  .home_btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  .title,
  .description,
  .home_icon,
  .home_btn {
    transform: translate(0px, 3.125rem);
    opacity: 0;
    transition: all 0.3s;
  }

  .loaded .title {
    transition-delay: 0.5s;
  }

  .loaded .description {
    transition-delay: 0.7s;
  }

  .loaded .home_icon {
    transition-delay: 0.9s;
  }

  .loaded .home_btn {
    transition-delay: 1.1s;
  }

  .loaded .title,
  .loaded .description,
  .loaded .home_icon,
  .loaded .home_btn {
    transform: translate(0px, 0);
    opacity: 1;
  }

  .title {
    position: relative;
    overflow: hidden;
    font-size: 51px;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(45deg, #4158d0 0%, #c850c0 27%, #ffcc70 100%);
    color: #0f2e6e;
    -webkit-background-clip: text;
    -webkit-text-stroke: 5px transparent;

    @media only screen and (max-width: 768px) {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }
</style>
