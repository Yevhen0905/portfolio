<template>
  <div class="container">
    <div class="wrapper_project">
      <div class="title_small">Projects</div>
      <div class="project_content">
        <div v-for="project in listProject" :key="project" data-item class="project_content_item">
          <div class="project_content_item_img">
            <img :src="project.image" alt="" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">{{ project.title }}</h3>
            <p class="description_project">{{ project.text }}</p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in project.listToolsForWebsite" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a class="link_btn red" :href="project.linkSite" target="_blank">Visit site</a>
              <a class="link_btn grey" :href="project.linkGithub" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { initIntersectionObserver } from '../composables/observe.js'

  const listProject = ref([
    {
      title: 'Responsive website',
      text: 'The fully responsive website uses the best coding practices and looks equally good on devices of different sizes. It also incorporates element animations',
      image: 'https://i.gstatvb.com/f72129cf33a38d5ee47d45a150eec7d61715689862.rng.webp',
      listToolsForWebsite: ['HTML', 'SCSS', 'JavaScript', 'Swiper'],
      linkSite: 'https://yevhen0905.github.io/responsive_website/',
      linkGithub: 'https://github.com/Yevhen0905/website',
    },
    {
      title: 'Marvel product',
      text: 'The web application utilizes the Marvel API, providing users with access to comprehensive information about comics and characters',
      image: 'https://i.gstatvb.com/2e64496312baf0bf0aeb2153644959a31715689960.rng.webp',
      listToolsForWebsite: [
        'HTML',
        'SCSS',
        'VUE',
        'Vue CLI',
        'Vue-router',
        'Vuetify',
        'Rest API',
        'Axios',
      ],
      linkSite: 'https://yevhen0905.github.io/marvel_product/',
      linkGithub: 'https://github.com/Yevhen0905/marvel_product',
    },
    // {
    //   title: 'Sneaker Store',
    //   text: 'The web application of the store uses the Rest API. All manipulations with the storage of favourite products and finished orders are stored on the server. LocalStorage is used to store selected products in the shopping cart.',
    //   image:
    //     'https://i.gstatvb.com/8484c5f5987aa445a9506755b1233e551718287001.rng.webp',
    //   listToolsForWebsite: [
    //     'HTML',
    //     'SCSS',
    //     'VUE',
    //     'Vite',
    //     'Vue-router',
    //     'Pinia',
    //     'Rest API',
    //     'Fetch API',
    //     'Tailwind',
    //     'ESLint'
    //   ],
    //   linkSite: 'https://yevhen0905.github.io/sneaker_store/',
    //   linkGithub: 'https://github.com/Yevhen0905/sneaker_store'
    // },
    {
      title: 'Weather forecast',
      text: 'Developed with the weather API, this application displays detailed weather forecasts for the current day and provides a more generalized overview for the next five days',
      image: 'https://i.gstatvb.com/fabd57437cdfdd400706f323db3249ad1715690013.rng.webp',
      listToolsForWebsite: ['HTML', 'SCSS', 'Nuxt', 'Vite', 'Swiper', 'Fetch API'],
      linkSite: 'https://yevhen0905.github.io/Weather_nuxt/',
      linkGithub: 'https://github.com/Yevhen0905/Weather_nuxt',
    },
    {
      title: 'List',
      text: 'The list is retrieved using the Fetch API. It includes sorting, filtering, and searching by name, as well as animated elements. Additionally, Vue Router is utilized to save all actions in the page URL',
      image: 'https://i.gstatvb.com/09b911564b32c29f44b33fa9f4840b061715689989.rng.webp',
      listToolsForWebsite: ['HTML', 'SCSS', 'Vue', 'Vite', 'Vue-router'],
      linkSite: 'https://yevhen0905.github.io/list_processing/',
      linkGithub: 'https://github.com/Yevhen0905/list_processing',
    },
    {
      title: 'Telephone directory',
      text: 'Phone book for storing and managing contacts.   Data is stored on a remote server and retrieved using the Fetch API. It is possible to search, sort and filter selected contacts, and pagination is implemented.',
      image: 'https://i.gstatvb.com/e18e595f127c9694b539f07cd6cba5ea1715690037.rng.webp',
      listToolsForWebsite: ['HTML', 'SCSS', 'Vue', 'Vite', 'Vue-router', 'Pinia', 'Rest API'],
      linkSite: 'https://yevhen0905.github.io/telephone_mockapi/',
      linkGithub: 'https://github.com/Yevhen0905/telephone_mockapi',
    },
    {
      title: 'ToDo',
      text: 'An app for to-do lists and tasks',
      image: 'https://i.gstatvb.com/9c0983aa2de0e4080aff8c993aa93ab91715690057.rng.webp',
      listToolsForWebsite: ['HTML', 'SCSS', 'Vue', 'Vue CLI', 'Vue-router', 'Vuex'],
      linkSite: 'https://yevhen0905.github.io/SPA_todo/',
      linkGithub: 'https://github.com/Yevhen0905/SPA_todo',
    },
  ])

  onMounted(() => initIntersectionObserver('0.3', 'active'))
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
