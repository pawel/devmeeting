import axios from 'axios';

const store = {
    state: {
        team: [],
    },
    async fetchTeamMembers() {
        this.state.team = await axios.get('team-members.json').then(res => res.data);
    },
    addTeamMember(team) {
        this.state.team.push(team);
    },
    replaceTeamMembers(teamMembers) {
        this.state.team = teamMembers;
    }
}

export default store;