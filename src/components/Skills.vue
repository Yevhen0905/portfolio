<template>
  <div class="container">
    <div class="wrapper_skills">
      <div class="title_small">Skills</div>
      <div class="skills_content">
        <div class="description_small description_skills">
          I am constantly improving my skills to create well-functioning websites and
          applications
        </div>
        <div class="skills_list_wrapper">
          <div class="skills_list" v-for="skill in listSkills" :key="skill">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const listSkills = ref([
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'VUE',
    'NUXT',
    'Pinia',
    'Vue-router',
    'Git/Gitlab',
    'Figma',
    'Trello'
  ]);
</script>

<style lang="scss">
  .wrapper_skills {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title_small {
    font-size: 30px;
    font-weight: 600;
    color: var(--color-red);
    text-align: center;
    margin-bottom: 26px;
  }

  .description_small {
    font-size: 20px;
    width: 905px;
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
