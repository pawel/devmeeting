<template>
  <div class="hello">
    <TeamMembersList :team="state.team" />
    <!--<TeamMemberEditor @add-team-member="onAddTeamMember" />
    <TeamMembersListSorter :team="team" @sort-members-list="replaceTeamMembers" />-->
  </div>
</template>

<script>
import axios from 'axios';
import TeamMembersList from './TeamMembersList.vue';
import TeamMemberEditor from './TeamMemberEditor.vue';
import TeamMembersListSorter from './TeamMembersListSorter.vue';
import store from '../store';

export default {
  components: {
    TeamMembersList,
    TeamMemberEditor,
    TeamMembersListSorter
  },
  created() {
    store.fetchTeamMembers();
    console.log('this.team' +  store.state.team);
  },
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    onAddTeamMember(newTeamMember) {
      this.store.addTeamMember(newTeamMember);
    },
    replaceTeamMembers(sortedTeamMembers) {
      this.store.replaceTeamMembers(sortedTeamMembers);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
