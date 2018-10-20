<template>
  <div>
    <ul>
      <button @click="changeSortOrder()">{{sortOrder}}</button>
      <button @click="sort()">Sort ({{sortOrder}})</button>
    </ul>
    <p v-if="!(team && team.length)">No team members!</p>
  </div>
</template>

<script>

export default {
  name: 'TeamMembersListSorter',
  props: {
    team: {
      type: Array,
    }
  },
  data() {
    return {
      sortOrder: ['+', '-'],
    };
  },
  methods: {
    changeSortOrder() {
      this.sortOrderIndex = (this.sortOrderIndex++) % this.sortOrders.length;
    },
    sort() {
      var sortedMembersList = this.team.slice().sort();
      this.$emit('sort-members-list', sortedMembersList);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
