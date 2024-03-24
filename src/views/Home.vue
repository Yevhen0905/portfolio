<template>
  <div class="hero">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <ul class="list">
            <li class="list_item"><a class="list_item_link" href="#">Home</a></li>
            <li class="list_item"><a class="list_item_link" href="#">Skills</a></li>
            <li class="list_item"><a class="list_item_link" href="#">Project</a></li>
            <li class="list_item"><a class="list_item_link" href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <section class="section_home">
        <About />
      </section>
      <section class="section_skills">
        <Skills />
      </section>
      <section class="section_project">
        <div class="container">
          <Projects />
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container"></div>
    </footer>
  </div>
</template>

<script setup>
  import About from '../components/About.vue';
  import Skills from '../components/Skills.vue';
  import Projects from '../components/Projects.vue';

  import {ref} from 'vue';
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
    gap: 20px;

    &_item {
      font-size: 20px;
      font-weight: 500;
      color: var(--color-grey);
      transition: var(--transition);

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

  .wrapper_home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    gap: 18px;
    width: 100%;
    height: 100%;
  }

  .title {
    font-size: 51px;
    color: var(--base-color);
    font-weight: 700;
    text-align: center;
  }

  .description {
    max-width: 704px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    color: var(--base-color);
  }

  .list_social {
    display: flex;
    justify-content: center;
    gap: 25px;

    &_link {
      font-size: 40px;
      color: blanchedalmond;
    }
  }

  .home_btn {
    margin-top: 20px;

    display: flex;
    gap: 53px;
  }

  .link_btn {
    display: block;
    font-size: 21px;
    border-radius: 5px;
    padding: 8px 20px;
    width: fit-content;
  }

  .red {
    background-color: var(--color-red);
    color: var(--base-color);
  }

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
    gap: 10px;
    max-width: 500px;
    width: 100%;
  }

  .skills_content {
    display: flex;
    justify-content: space-between;
  }

  .description_skills {
    max-width: 550px;
    width: 100%;
  }

  .skills_list {
    font-size: 19px;
    color: var(--base-color);
    background: #323885;
    width: fit-content;
    border-radius: 5px;
    padding: 9px;
  }

  .section_project {
    background-color: rgb(4, 10, 55);
  }

  .wrapper_project {
    padding: 60px 0;
  }
</style>
