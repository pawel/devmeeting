<template>
  <div class="hello">
    <ul>
      <li
        v-for="member in team"
        :key="member">{{ member }}>
        <button @click="removeTeamMember(member)">[x]</button>
      </li>
    </ul>
    <input
      v-validate="'required|min:3'"
      v-model="newTeamMember"
      name="teamMember"
      type="text"
      placeholder="New team member">
    <button @click="addNewTeamMember()">Add hardcoded name!</button>
    <div v-show="errors.has('teamMember')"> {{ errors.first('teamMember') }} </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: ['Aleksandra', 'Matusz', 'Maciej', 'Wojtek', 'Paweł'],
      newTeamMember: undefined,
    };
  },
  methods: {
    addNewTeamMember() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.team.push(this.newTeamMember);
        this.$validator.reset();
      });
    },
    removeTeamMember(memberToRemove) {
      this.team.splice(this.team.indexOf(memberToRemove), 1);
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
