<template>
  <div>
    <ul>
      <TeamMemberListItem 
        v-for="member in team"
        :teamMember="member"
        :key="member" />
    </ul>
    <p v-if="!team.length">No team members!</p>
  </div>
</template>

<script>
import TeamMemberListItem from './TeamMemberListItem.vue';

export default {
  name: 'TeamMembersList',
  components: {
    TeamMemberListItem,
  },
  props: {
    team: {
      type: Array,
    }
  },
};
</script>

<style scoped lang="scss">
</style>
