<template>
  <div class="container">
    <div class="wrapper_home" ref="mainTitle">
      <div class="home_text">
        <h1 class="title">I`m Vittsenko Evgen</h1>
        <p class="description">
          I am a front-end developer with nearly 1 year of commercial experience. I
          specialize in creating website and web application interfaces, with a primary
          focus on delivering maximum business value.
        </p>
      </div>
      <div class="home_icon">
        <ul class="list_social">
          <li class="list_social_item">
            <a class="list_social_link" href="https://t.me/EvgenVittsenko" target="_blank"
              ><i class="icon fa-brands fa-telegram"></i
            ></a>
          </li>
          <li class="list_social_item">
            <a
              class="list_social_link"
              href="https://www.linkedin.com/in/evgen-vittsenko-739529250/"
              target="_blank"
              ><i class="icon fa fa-linkedin" aria-hidden="true"></i
            ></a>
          </li>
          <li class="list_social_item">
            <a
              class="list_social_link"
              href="https://github.com/Yevhen0905"
              target="_blank"
              ><i class="icon fa-brands fa-github"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="home_btn">
        <a href="#project" class="link_btn red">View Project</a
        ><a
          href="https://yevhen0905.github.io/RESUME/"
          class="link_btn red"
          target="_blank"
          >Open CV</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';

  const mainTitle = ref(null);

  onMounted(() =>
    window.addEventListener('load', () => mainTitle.value.classList.add('loaded'))
  );
</script>

<style lang="scss">
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

    @media only screen and (max-width: 768px) {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }

  .description {
    max-width: 704px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    color: var(--base-color);

    @media only screen and (max-width: 768px) {
      font-size: 19px;
    }
  }

  .list_social {
    display: flex;
    justify-content: center;
    gap: 25px;

    &_link {
      font-size: 45px;
      color: #e9c793;
      transition: var(--transition);

      @media only screen and (max-width: 480px) {
        font-size: 35px;
      }

      &:hover {
        color: #a38250;
      }
    }
  }

  .home_btn {
    margin-top: 20px;
    display: flex;
    gap: 53px;

    @media only screen and (max-width: 768px) {
      gap: 20px;
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
</style>
