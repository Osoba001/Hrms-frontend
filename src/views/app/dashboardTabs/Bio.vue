<template>
  <div class="bio-container tab-container">
    <form @submit.prevent="handleSubmit">
      <PersonalDetails />
      <NextOfKin />
      <InCaseOfEmergency />
      <Maritalinformation />
    </form>

    <DashboardBottomButtonsNav :nextRoute="{ name: ROUTES.job }" />
  </div>
</template>

<script>
import DashboardBottomButtonsNav from "@/components/DashboardBottomButtonsNav.vue";
import { ROUTES } from "@/global/routes";
import NextOfKin from "./components/NextOfKin.vue";
import PersonalDetails from "./components/PersonalDetails.vue";
import InCaseOfEmergency from "./components/InCaseOfEmergency.vue";
import Maritalinformation from "./components/Maritalinformation.vue";

export default {
  name: "Bio",
  components: {
    DashboardBottomButtonsNav,
    NextOfKin,
    PersonalDetails,
    InCaseOfEmergency,
    Maritalinformation,
  },
  data() {
    return {
      ROUTES,
    };
  },
  methods: {
    handleSubmit() {
      alert("Submitting...");
    },
  },
};
</script>

<style scoped>
.bio-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
