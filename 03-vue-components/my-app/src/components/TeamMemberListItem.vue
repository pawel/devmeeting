<template>
    <li>{{ teamMember }}
      <!--<button @click="removeTeamMember(teamMember)">[x]</button>-->
    </li>
</template>

<script>
export default {
  name: 'TeamMembersListItem',
  props: {
    teamMember: {
      type: String,
    }
  }
};
</script>

<style scoped lang="scss">
</style>
