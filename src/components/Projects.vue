<template>
  <div class="container">
    <div class="wrapper_project">
      <div class="title_small">Projects</div>
      <div class="project_content">
        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/website.png" alt="website" />
          </div>

          <div class="project_content_item_description">
            <h3 class="title_project">Responsive website</h3>
            <p class="description_project">
              The fully responsive website uses the best coding practices and looks
              equally good on devices of different sizes. It also incorporates element
              animations
            </p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForWebsite" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/responsive_website/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/website"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/marvel.png" alt="website" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">Marvel product</h3>
            <p class="description_project">
              The web application utilizes the Marvel API, providing users with access to
              comprehensive information about comics and characters
            </p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForMarvel" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/marvel_product/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/marvel_product"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/list.png" alt="weather" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">List</h3>
            <p class="description_project">
              The list is retrieved using the Fetch API. It includes sorting, filtering,
              and searching by name, as well as animated elements. Additionally, Vue
              Router is utilized to save all actions in the page URL
            </p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForList" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/list_processing/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/list_processing"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/weather.png" alt="weather" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">Weather forecast</h3>
            <p class="description_project">
              Developed with the weather API, this application displays detailed weather
              forecasts for the current day and provides a more generalized overview for
              the next five days
            </p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForWeather" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/Weather_nuxt/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/Weather_nuxt"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/phonebook.png" alt="weather" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">Telephone directory</h3>
            <p class="description_project">
              Phone book for storing and managing contacts
            </p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForPhone" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/telephone_directory/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/telephone_directory"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div data-item class="project_content_item">
          <div class="project_content_item_img">
            <img src="../assets/img/todo.png" alt="weather" />
          </div>
          <div class="project_content_item_description">
            <h3 class="title_project">ToDo</h3>
            <p class="description_project">An app for to-do lists and tasks</p>
            <div class="wrapper_list_tools">
              <div class="list_tools" v-for="skill in listToolsForTodo" :key="skill">
                {{ skill }}
              </div>
            </div>
            <div class="wrapper_btn_project">
              <a
                class="link_btn red"
                href="https://yevhen0905.github.io/SPA_todo/"
                target="_blank"
                >Visit site</a
              >
              <a
                class="link_btn grey"
                href="https://github.com/Yevhen0905/SPA_todo"
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

  const listToolsForWebsite = ref(['HTML', 'SCSS', 'JavaScript']);
  const listToolsForMarvel = ref([
    'HTML',
    'SCSS',
    'VUE',
    'Vue-router',
    'Vuetify',
    'Rest API',
    'Axios'
  ]);
  const listToolsForWeather = ref(['HTML', 'SCSS', 'Nuxt', 'Swiper', 'Fetch API']);
  const listToolsForTodo = ref(['HTML', 'SCSS', 'Vue', 'Vue-router', 'Vuex']);
  const listToolsForPhone = ref(['HTML', 'SCSS', 'Vue', 'Vue-router', 'Pinia']);
  const listToolsForList = ref(['HTML', 'SCSS', 'Vue', 'Vue-router']);

  onMounted(() => initIntersectionObserver('0.3', 'active'));
</script>
f
<style lang="scss">
  .section_project {
    background: var(--bg-color-primary);
    transition: all 0.3s ease;
  }

  .wrapper_project {
    padding: 60px 0;
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
