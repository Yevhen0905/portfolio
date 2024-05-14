<template>
  <div class="container">
    <div class="wrapper_project">
      <div class="title_small">Projects</div>
      <div class="project_content">
        <div
          v-for="project in listProject"
          :key="project"
          data-item
          class="project_content_item"
        >
          <div class="project_content_item_img">
            <img :src="`src/assets/img/${project.image}.png`" alt="" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">{{ project.title }}</h3>
            <p class="description_project">{{ project.text }}</p>
            <div class="wrapper_list_tools">
              <div
                class="list_tools"
                v-for="skill in project.listToolsForWebsite"
                :key="skill"
              >
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a class="link_btn red" :href="project.linkSite" target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                :href="project.linkGithub"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';
  import {initIntersectionObserver} from '../composables/observe.js';

  const listProject = ref([
    {
      title: 'Responsive website',
      text: 'The fully responsive website uses the best coding practices and looks equally good on devices of different sizes. It also incorporates element animations',
      image: 'website',
      listToolsForWebsite: ['HTML', 'SCSS', 'JavaScript', 'Swiper'],
      linkSite: 'https://yevhen0905.github.io/responsive_website/',
      linkGithub: 'https://github.com/Yevhen0905/website'
    },
    {
      title: 'Marvel product',
      text: 'The web application utilizes the Marvel API, providing users with access to comprehensive information about comics and characters',
      image: 'marvel',
      listToolsForWebsite: [
        'HTML',
        'SCSS',
        'VUE',
        'Vue CLI',
        'Vue-router',
        'Vuetify',
        'Rest API',
        'Axios'
      ],
      linkSite: 'https://yevhen0905.github.io/marvel_product/',
      linkGithub: 'https://github.com/Yevhen0905/marvel_product'
    },
    {
      title: 'List',
      text: 'The list is retrieved using the Fetch API. It includes sorting, filtering, and searching by name, as well as animated elements. Additionally, Vue Router is utilized to save all actions in the page URL',
      image: 'list',
      listToolsForWebsite: ['HTML', 'SCSS', 'Vue', 'Vite', 'Vue-router'],
      linkSite: 'https://yevhen0905.github.io/list_processing/',
      linkGithub: 'https://github.com/Yevhen0905/list_processing'
    },
    {
      title: 'Weather forecast',
      text: 'Developed with the weather API, this application displays detailed weather forecasts for the current day and provides a more generalized overview for the next five days',
      image: 'weather',
      listToolsForWebsite: [
        'HTML',
        'SCSS',
        'Nuxt',
        'Vite',
        'Swiper',
        'Fetch API'
      ],
      linkSite: 'https://yevhen0905.github.io/Weather_nuxt/',
      linkGithub: 'https://github.com/Yevhen0905/Weather_nuxt'
    },
    {
      title: 'Telephone directory',
      text: 'A phone program for storing and managing contacts using the Fetch API. The data is stored on a remote server.  There is a possibility to search, sort and filter selected contacts, pagination is implemented.',
      image: 'telephone',
      listToolsForWebsite: [
        'HTML',
        'SCSS',
        'Vue',
        'Vite',
        'Vue-router',
        'Pinia',
        'Rest API'
      ],
      linkSite: 'https://yevhen0905.github.io/telephone_mockapi/',
      linkGithub: 'https://github.com/Yevhen0905/telephone_mockapi'
    },
    {
      title: 'ToDo',
      text: 'An app for to-do lists and tasks',
      image: 'todo',
      listToolsForWebsite: [
        'HTML',
        'SCSS',
        'Vue',
        'Vue CLI',
        'Vue-router',
        'Vuex'
      ],
      linkSite: 'https://yevhen0905.github.io/SPA_todo/',
      linkGithub: 'https://github.com/Yevhen0905/SPA_todo'
    }
  ]);

  onMounted(() => initIntersectionObserver('0.3', 'active'));
</script>

<style lang="scss">
  .section_project {
    background: var(--bg-color-primary);
    transition: all 0.3s ease;
  }

  .wrapper_project {
    padding: 60px 0;

    @media only screen and (max-width: 768px) {
      padding: 35px 0;
    }
  }

  .project_content_item {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;

    @media only screen and (max-width: 1050px) {
      flex-direction: column-reverse;
    }
  }

  .project_content_item_description {
    width: 35%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1050px) {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }

  .project_content_item_img {
    position: relative;
    width: 60%;

    @media only screen and (max-width: 1050px) {
      width: 100%;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 2px;
      right: 0;
      background: var(--bg-image);
      border-radius: 8px;
    }
  }

  .wrapper_list_tools {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;

    @media only screen and (max-width: 1050px) {
      justify-content: center;
    }
  }

  .list_tools {
    font-size: 19px;
    color: var(--bg-light);
    background: #323885;
    width: fit-content;
    border-radius: 5px;
    padding: 5px;
    background: var(--color-accent);
    transition: all 0.3s ease;

    @media only screen and (max-width: 768px) {
      padding: 4px;
    }
  }

  .title_project {
    font-size: 22px;
    color: var(--base-color);
    margin-bottom: 15px;
  }

  .description_project {
    font-size: 20px;
    color: #c1b3b3;
    margin-bottom: 15px;
  }

  .wrapper_btn_project {
    display: flex;
    gap: 15px;
  }
  .grey {
    color: var(--base-color);
    background: transparent;
    border: 1px solid var(--base-color);
    transition: var(--transition);
    box-shadow: -3px 1px 27px 3px rgb(68 68 68 / 69%);

    &:hover {
      box-shadow: -3px 1px 27px 3px rgb(90 97 104 / 69%);
    }
  }
</style>
