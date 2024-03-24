<template>
  <div class="wrapper_project">
    <div class="title_small">Projects</div>
    <div class="project_content">
      <div class="project_content_item">
        <div class="project_content_item_img">
          <img src="../assets/img/website.png" alt="website" />
        </div>
        <div class="project_content_item_description">
          <h3 class="title_project">Responsive website</h3>
          <p class="description_project">
            A fully responsive website that looks equally good on different devices using
            best layout practices.
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

      <div class="project_content_item">
        <div class="project_content_item_img">
          <img src="../assets/img/marvel.png" alt="website" />
        </div>
        <div class="project_content_item_description">
          <h3 class="title_project">Marvel product</h3>
          <p class="description_project">
            A web application based on the Marvel API that helps to find any information
            about comics and characters
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
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const listToolsForWebsite = ref(['HTML', 'SCSS', 'JavaScript']);
  const listToolsForMarvel = ref([
    'HTML',
    'SCSS',
    'VUE',
    'Vue-router',
    'Rest API',
    'Axios'
  ]);
</script>

<style lang="scss">
  .project_content_item {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }

  .project_content_item_description {
    max-width: 420px;
    width: 100%;
  }

  .project_content_item_img {
    max-width: 710px;
    width: 100%;
    height: 325px;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .wrapper_list_tools {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }

  .list_tools {
    font-size: 19px;
    color: var(--base-color);
    background: #323885;
    width: fit-content;
    border-radius: 5px;
    padding: 5px;
    background: #7c7676;
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
    border: 1px solid var(--base-color);
  }
</style>
