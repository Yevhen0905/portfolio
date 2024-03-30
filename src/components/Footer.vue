<template>
  <div class="container">
    <div class="footer_content">
      <h3 class="footer_title">Vittsenko Evgen</h3>
      <div class="home_icon footer_icon">
        <ul class="list_social">
          <li class="list_social_item">
            <a
              class="list_social_link footer_social"
              href="https://t.me/EvgenVittsenko"
              target="_blank"
              ><i class="icon fa-brands fa-telegram"></i
            ></a>
          </li>
          <li class="list_social_item">
            <a
              class="list_social_link footer_social"
              href="https://www.linkedin.com/in/evgen-vittsenko-739529250/"
              target="_blank"
              ><i class="icon fa fa-linkedin" aria-hidden="true"></i
            ></a>
          </li>
          <li class="list_social_item">
            <a
              class="list_social_link footer_social"
              href="https://github.com/Yevhen0905"
              target="_blank"
              ><i class="icon fa-brands fa-github"></i
            ></a>
          </li>
        </ul>
      </div>
      <p class="footer_years">2024</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .footer_content {
    padding: 30px 0;
  }

  .home_icon.footer_icon {
    opacity: 1;
    transform: translate(0, 0);
  }

  .footer_title {
    font-size: 30px;
    color: var(--color-hover-text);
    text-align: center;
    margin-bottom: 10px;
  }

  .list_social_link.footer_social {
    color: var(--color-hover-text);
    transition: var(--transition);

    &:hover {
      color: rgb(238 121 121);
    }
  }
  .footer_years {
    color: var(--color-hover-text);
    text-align: center;
    font-size: 20px;
    margin-top: 15px;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
</style>
