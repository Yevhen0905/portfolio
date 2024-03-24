<template>
  <div class="container">
    <div class="wrapper_skills">
      <div class="title_small">Skills</div>
      <div class="skills_content">
        <div class="description_small description_skills">
          I enjoy creating things that live on the internet, whether that be websites,
          applications, or anything in between.
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
