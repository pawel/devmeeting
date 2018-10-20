<template>
  <div>
    <ul>
      <li
        v-for="member in team"
        :key="member">{{ member }}
        <button @click="removeTeamMember(member)">[x]</button>
      </li>
    </ul>
    <p v-if="!team.length">No team members!</p>
  </div>
</template>

<script>
export default {
  name: 'TeamMembersList',
  props: {
    team: {
      type: Array,
    }
  }
};
</script>

<style scoped lang="scss">
</style>
