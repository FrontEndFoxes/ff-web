<template>
  <footer class="footer">
    <div class="mx-auto flex items-center">
      <div class="w-full mx-auto flex flex-wrap items-center">
        <div
          class="hidden md:flex w-full md:w-1/2 justify-center md:justify-start text-white"
        >
          <ul
            class="list-reset w-1/2 lg:flex justify-start flex-1 items-center"
          >
            <li class="mr-3">
              <a
                class="hover:text-orange-600 uppercase inline-block py-2 px-4 text-white no-underline"
                href="https://spark.adobe.com/page/xAMdc3pR7tivW/"
              >
                {{ $t("footer.press") }}
              </a>
            </li>
            <li class="mr-3">
              <a
                href="mailto:info@frontendfoxes.org"
                class="hover:text-orange-600 uppercase inline-block py-2 px-4 text-white no-underline"
              >
                {{ $t("footer.contact") }}
              </a>
            </li>

            <li class="mr-3">
              <router-link
                class="uppercase inline-block py-2 px-4 text-white no-underline"
                to="/about"
              >
                <span class="hover:text-orange-600">
                  {{ $t("footer.charity") }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <div
          class="flex w-full pt-2 content-center justify-end md:w-1/2 md:justify-end"
        >
          <ul class="list-reset flex">
            <!-- <li class="mr-3">
                            <a class="uppercase inline-block py-2 px-4 text-white no-underline"
                                href="https://www.frontendfoxes.org/announcements" aria-label="Announcements"
                                target="_blank" rel="noopener">
                                <i class="text-white fa fa-bullhorn fa-2x" aria-hidden="true"></i>
                            </a>
                        </li> -->
            <li class="mr-3">
              <a
                class="uppercase inline-block py-2 px-4 text-white no-underline"
                href="https://twitter.com/frontendfoxes"
                aria-label="Twitter"
                target="_blank"
                rel="noopener"
              >
                <i
                  class="text-white fa fa-twitter fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li class="mr-3">
              <a
                class="uppercase inline-block py-2 px-4 text-white no-underline"
                href="https://communityinviter.com/apps/vuevixens/front-end-foxes"
                aria-label="Slack"
                target="_blank"
                rel="noopener"
              >
                <i class="text-white fa fa-slack fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>