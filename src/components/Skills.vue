<template>
  <div class="container">
    <div class="wrapper_skills">
      <div data-item class="title_small">Skills</div>
      <div class="skills_content">
        <div data-item class="description_small description_skills">
          I am constantly improving my skills to create well-functioning
          websites and applications
        </div>
        <div data-item class="skills_list_wrapper">
          <div class="skills_list" v-for="skill in listSkills" :key="skill">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';
  import {initIntersectionObserver} from '../composables/observe.js';

  const listSkills = ref([
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'VUE.js',
    'NUXT.js',
    'Vuex | Pinia',
    'Vue-router',
    'Vuetify',
    'Vue CLI | Vite',
    'Rest API',
    'Tailwind',
    'Git | GitHub | Gitlab',
    'Figma',
    'ESLint',
    'Webflow',
    'Trello'
  ]);

  onMounted(() => initIntersectionObserver('0.3', 'active'));
</script>

<style lang="scss">
  .section_skills {
    background: var(--bg-light);
    transition: all 0.3s ease;
  }

  .wrapper_skills {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      padding: 35px 0;
    }
  }

  .skills_list_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .skills_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .description_skills {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    color: var(--font-color);
    transition: all 0.3s ease;
  }

  .skills_list {
    font-size: 19px;
    color: var(--base-color);
    background: #323885;
    width: fit-content;
    border-radius: 5px;
    padding: 9px;
  }
</style>
