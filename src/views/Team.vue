<template>
  <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
    <h1 class="team__title">{{ $t("team.teamTitle") }}</h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <div
      class="max-w-screen-xl mx-auto px-4"
      v-for="member in staff"
      :key="member.name"
    >
      <h2 class="group__subtitle" v-if="member.list && member.list.length">
        {{ member.group }}
      </h2>

      <div class="-mx-4 flex flex-wrap justify-center text-center">
        <div
          v-for="staffer in member.list"
          :key="staffer.id"
          class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3"
        >
          <CardStaffer :staffer="staffer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ffstaff from "@/assets/data/staff";
import { CardStaffer } from "@/components/cards";
export default {
  name: "Team",
  components: { CardStaffer },
  computed: {
    staff() {
      const groups = this.translateStaffByCurrentLocal(this.groupsToFilter);
      const result = this.groupsToFilter.map((group, index) => ({
        id: group,
        group: `${groups[index]}`,
        name: `${groups[index]}`,
        list: this.selectStaffByGroup(group),
      }));
      return result;
    },
  },
  data() {
    return {
      ffstaff: ffstaff,
      groupsToFilter: [
        "leadership",
        "dach (germany, austria, switzerland)",
        "mexico",
        "spain",
        "canada",
        "us",
        "nigeria",
        "colombia",
        "peru",
        "benelux (belgium, netherlands, luxembourg)",
        "japan",
        "ireland",
      ],
      selectedStaffer: "",
    };
  },
  methods: {
    translateStaffByCurrentLocal(staff) {
      let staffByLocal = [];

      for (let index = 0; index < staff.length; index++) {
        const group = staff[index].toLowerCase();
        staffByLocal.push(this.$t(`team.chapterGroups.${group}`));
      }

      return staffByLocal;
    },
    selectStaffByGroup(group) {
      group = group.toLowerCase();
      const currentLocal = this.$i18n.locale;
      return this.ffstaff[currentLocal].filter(
        (ffstaff) => ffstaff.group === group
      );
    },
  },
};
</script>
<style scoped>
.team__title {
  @apply w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800;
}

.group__subtitle {
  @apply w-full pt-5 my-2 text-3xl font-bold leading-tight text-center text-gray-800;
}
</style>
