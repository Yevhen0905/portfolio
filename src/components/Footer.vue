<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_content">
        <h3 class="footer_title">Vittsenko Evgen</h3>
        <div class="home_icon footer_icon">
          <SocialLinks />
        </div>
        <p class="footer_years">{{ getCurrentYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import SocialLinks from './SocialLinks.vue'

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
</script>

<style lang="scss">
  .footer {
    background: var(--bg-light);
    transition: all 0.3s ease;
  }

  .footer_content {
    padding: 30px 0;
  }

  .home_icon.footer_icon {
    opacity: 1;
    transform: translate(0, 0);
  }

  .footer_title {
    font-size: 30px;
    color: var(--font-color);
    text-align: center;
    margin-bottom: 10px;
    transition: all 0.3s ease;
  }

  .footer_years {
    color: var(--font-color);
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .footer_icon .list_social_link {
    color: var(--font-color);
    transition: var(--transition);

    &:hover {
      color: rgb(238 121 121);
    }
  }
</style>
