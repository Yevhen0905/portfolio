<template>
  <div class="header" :class="{open: isActive}" id="header">
    <div class="container">
      <div class="wrapper_header">
        <div class="wrapper_header_icon">
          <h1 class="header_icon">EV</h1>
        </div>
        <nav class="nav">
          <ul class="list">
            <li class="list_item" v-for="menu in menuList" :key="menu">
              <a @click="closeMenu" class="list_item_link" :href="menu.href">{{
                menu.title
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="switcher_wrapper">
          <div class="switcher" v-for="theme in themeList" :key="theme">
            <label class="switcher_label">
              <input type="radio" :value="theme.theme" v-model="themeValue" />
              <i :class="theme.icon"></i>
              <span class="switcher_label_text">{{ theme.title }}</span>
            </label>
          </div>
          <span class="switch_slider"></span>
        </div>
      </div>
      <button
        :class="['hamburger', 'hamburger--emphatic', {'is-active': isActive}]"
        type="button"
        id="hamburger"
        @click="toggleActiveHamburger()"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
  <div v-if="isActive" class="bg_open"></div>
</template>

<script setup>
  import {ref, computed, onMounted} from 'vue';

  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
  });

  const menuList = ref([
    {
      title: 'Home',
      href: '#home'
    },
    {
      title: 'Skills',
      href: '#skills'
    },
    {
      title: 'Project',
      href: '#project'
    },
    {
      title: 'Contacts',
      href: '#contacts'
    }
  ]);

  const themeList = ref([
    {
      theme: 'theme_light',
      title: 'Light',
      icon: 'fa-solid fa-sun'
    },
    {
      theme: 'theme_dark',
      title: 'Dark',
      icon: 'fa-solid fa-moon'
    }
  ]);
  const isActive = ref(false);

  const emit = defineEmits(['update:modelValue']);

  const themeValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });

  const toggleActiveHamburger = () => {
    isActive.value = !isActive.value;
  };

  const closeMenu = () => {
    isActive.value = false;
  };

  const handleClickOutside = (event) => {
    const menu = document.getElementById('header');
    if (menu && !menu.contains(event.target)) {
      closeMenu();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
</script>

<style lang="scss">
  .header {
    height: var(--header-height);
    background: var(--bg-light);
    transition: all 0.3s ease;
  }

  .wrapper_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: all 0.5s ease;
  }

  .wrapper_header_icon {
    margin-right: 100px;
  }

  .header_icon {
    width: 50px;
    background: linear-gradient(45deg, #4158d0 0%, #ea2a2a 27%, #ef9c07 100%);
    color: #ffffff;
    -webkit-background-clip: text;
    -webkit-text-stroke: 6px transparent;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 25px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 768px) {
      gap: 15px;
    }

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      transform: translateY(-100%);
      height: 250px;
      position: fixed;
      z-index: 2;
      background: var(--bg-light);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &_item {
      font-size: 22px;
      font-weight: 500;
      color: var(--color-accent);
      transition: all 0.3s ease;

      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }

      &:hover {
        color: var(--color-hover-text);
      }
    }
  }

  .header.open {
    position: relative;
    z-index: auto;
  }

  .open .list {
    transform: translateY(0);
  }

  .switcher_wrapper {
    position: relative;
    z-index: 0;
    display: flex;
    max-width: 150px;
    width: 100%;
    background: var(--color-bg-switch);
    height: 30px;
    border-radius: 6px;
    padding: 0 3px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 700px) {
      position: absolute;
      right: 80px;
    }
  }

  .switcher {
    position: relative;
    z-index: 2;
    width: calc(100% / 2);
  }

  .switcher_label {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: var(--font-color);
    transition: all 0.3s ease;
  }

  .switch_slider {
    display: block;
    position: absolute;
    z-index: 1;
    width: calc((100% - 6px) / 2);
    top: 3px;
    transform: translateX(-110%);
    bottom: 3px;
    border-radius: 5px;
    transition: 0.15s ease, transform 0.25s ease-out;
    background: var(--bg-light);
  }

  input {
    display: none;
  }

  .theme_light .switch_slider {
    transform: translateX(0);
  }

  .theme_dark .switch_slider {
    transform: translateX(100%);
  }

  .switcher_label_text {
    font-size: 14px;
  }

  .bg_open {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: rgb(42 41 41 / 73%);
    transition: all 0.5s ease;
  }
</style>
