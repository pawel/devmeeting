<template>
  <div class="hello">
    <TeamMembersList :team="team" />
    <TeamMemberEditor @add-team-member="onAddTeamMember" />
  </div>
</template>

<script>
import TeamMembersList from './TeamMembersList.vue';
import TeamMemberEditor from './TeamMemberEditor.vue';

export default {
  components: {
    TeamMembersList,
    TeamMemberEditor,
  },
  data() {
    return {
      team: ['Aleksandra', 'Matusz', 'Maciej', 'Wojtek', 'Paweł'],
    };
  },
  methods: {
    onAddTeamMember(newTeamMember) {
      this.team.push(newTeamMember);
    },
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
