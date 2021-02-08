<template>
  <nav id="header" class="nav fixed w-full z-30 top-0 text-white">
    <div class="w-full mx-auto flex flex-wrap items-center justify-between">
      <!-- Navigation drawer -->
      <div class="block lg:hidden p-4">
        <button
          aria-label="Open Menu"
          @click="drawer"
          id="nav-toggle"
          class="flex items-center p-1 text-white hover:text-orange-600"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{{ $t("header.menuTitle") }}</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <!--overlay for open side menu-->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>
        <aside
          id="drawer"
          class="transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <ul>
            <li @click="isOpen = false">
              <router-link
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                to="/about"
                >{{ $t("header.menu.about") }}</router-link
              >
            </li>
            <li @click="isOpen = false">
              <a
                href="https://frontendfoxes.school"
                target="_blank"
                rel="noopener"
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                >School</a
              >
            </li>
            <li @click="isOpen = false">
              <router-link
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                to="/sponsors"
                >{{ $t("header.menu.sponsors") }}</router-link
              >
            </li>
            <li @click="isOpen = false">
              <router-link
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                to="/team"
                >{{ $t("header.menu.team") }}</router-link
              >
            </li>
            <li @click="isOpen = false">
              <router-link
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                to="/gallery"
                >{{ $t("header.menu.gallery") }}</router-link
              >
            </li>
            <li @click="isOpen = false">
              <a
                href="https://dev.to/FrontEndFoxes"
                target="_blank"
                rel="noopener"
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                >{{ $t("header.menu.blog") }}</a
              >
            </li>
            <!--<li @click="isOpen = false">
              <a
                href="https://etsy.com/shop/vuevixens"
                target="_blank"
                rel="noopener"
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                >{{ $t("header.menu.shop") }}</a
              >
            </li>-->
            <li
              class="hover:bg-blue-900"
              v-for="(lang, i) in languages"
              :key="`Lang${i}`"
              @click="changeLanguage(lang.label)"
            >
              <span
                class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
              >
                <span :class="`flag-icon ${lang.flagIcon}`"></span>
                <span class="ml-2">{{ lang.language }}</span>
              </span>
            </li>
          </ul>
        </aside>
      </div>
      <!-- App bar -->
      <div class="flex items-center pl-4">
        <a
          class="p-2 text-white no-underline hover:no-underline text-2xl lg:text-2xl"
          href="/"
        >
          <img
            class="pull-left pt-1"
            src="@/assets/images/logo-sm.png"
            alt=""
          />
          <span class="pt-5 pl-3">{{ $t("header.ffTitle") }}</span>
        </a>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="hover:bg-blue-900">
            <router-link
              active-class="bg-blue-800"
              class="uppercase inline-block p-5 text-white no-underline"
              to="/about"
              >{{ $t("header.menu.about") }}</router-link
            >
          </li>
          <li class="hover:bg-blue-900">
            <a
              href="https://frontendfoxes.school"
              target="_blank"
              rel="noopener"
              class="uppercase flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
              >School</a
            >
          </li>
          <li class="hover:bg-blue-900">
            <router-link
              active-class="bg-blue-800"
              class="uppercase inline-block p-5 text-white no-underline"
              to="/sponsors"
              >{{ $t("header.menu.sponsors") }}</router-link
            >
          </li>
          <li class="hover:bg-blue-900">
            <router-link
              active-class="bg-blue-800"
              class="uppercase inline-block p-5 text-white no-underline"
              to="/team"
              >{{ $t("header.menu.team") }}</router-link
            >
          </li>
          <li class="hover:bg-blue-900">
            <router-link
              active-class="bg-blue-800"
              class="uppercase inline-block p-5 text-white no-underline"
              to="/gallery"
              >{{ $t("header.menu.gallery") }}</router-link
            >
          </li>

          <li class="hover:bg-blue-900">
            <a
              class="uppercase inline-block p-5 text-white no-underline"
              href="https://dev.to/frontendfoxes"
              target="_blank"
              rel="noopener"
              >{{ $t("header.menu.blog") }}</a
            >
          </li>
          <!--<li class="hover:bg-blue-900">
            <a
              class="uppercase inline-block p-5 text-white no-underline"
              href="https://etsy.com/shop/vuevixens"
              target="_blank"
              rel="noopener"
              >{{ $t("header.menu.shop") }}</a
            >
          </li>-->
          <li>
            <a
              class="uppercase inline-block py-2 px-4 text-white no-underline"
              href="https://github.com/frontendfoxes"
              aria-label="Github"
              target="_blank"
              rel="noopener"
            >
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li class="languages hover:bg-blue-900">
            <span
              class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
            >
              <span :class="`flag-icon ${currentLanguageObj.flagIcon}`"></span>
              <span class="ml-2">{{ currentLanguageObj.language }}</span>
            </span>
            <ul class="languages__dropdown">
              <li
                class="languages__item hover:bg-blue-900"
                v-for="(lang, i) in languages"
                :key="`Lang${i}`"
                @click="changeLanguage(lang.label)"
              >
                <span
                  class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
                >
                  <span :class="`flag-icon ${lang.flagIcon}`"></span>
                  <span class="ml-2">{{ lang.language }}</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import "flag-icon-css/css/flag-icon.css";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
  computed: {
    currentLanguageObj() {
      const currentLocal = this.$i18n.locale;
      const currentLanguage = `header.languages.${currentLocal}`;
      let currentFlagIcon = "flag-icon-us";

      switch (currentLocal) {
        case "en":
          currentFlagIcon = "flag-icon-us";
          break;
        case "es":
          currentFlagIcon = "flag-icon-es";
          break;
        case "fr":
          currentFlagIcon = "flag-icon-fr";
          break;
        case "pt_br":
          currentFlagIcon = "flag-icon-br";
          break;
      }

      return {
        label: currentLocal,
        flagIcon: currentFlagIcon,
        language: this.$t(currentLanguage),
      };
    },
    languages() {
      return [
        {
          label: "en",
          flagIcon: "flag-icon-us",
          language: this.$t("header.languages.en"),
        },
        {
          label: "es",
          flagIcon: "flag-icon-es",
          language: this.$t("header.languages.es"),
        },
        {
          label: "fr",
          flagIcon: "flag-icon-fr",
          language: this.$t("header.languages.fr"),
        },
        {
          label: "pt_br",
          flagIcon: "flag-icon-br",
          language: this.$t("header.languages.pt_br"),
        },
      ];
    },
  },
};
</script>
<style scoped>
.languages__dropdown {
  background-color: #041e30;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  left: -100;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

.languages__dropdown {
  clear: both;
  width: 100%;
}
</style>
