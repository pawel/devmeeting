<template>
  <div>
    <input
      v-validate="'required|min:3'"
      v-model="newTeamMember"
      name="teamMember"
      type="text"
      @keydown.enter="addNewTeamMember()"
      placeholder="New team member">
    <button @click="addNewTeamMember()">Add hardcoded name!</button>
    <div v-show="errors.has('teamMember')"> {{ errors.first('teamMember') }} </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberEditor',
  props: {
    newTeamMember: {
      type: String,
    },
  },
  methods: {
    addNewTeamMember() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        //this.team.push(this.newTeamMember);
        this.$emit('add-team-member', this.newTeamMember);
        this.$validator.reset();
      });
    },
    removeTeamMember(memberToRemove) {
      this.team.splice(this.team.indexOf(memberToRemove), 1);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
