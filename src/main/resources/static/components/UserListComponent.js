import UserService from "/services/userservice.js";

let UserListComponent = {
    template: `
    <table class="table thead-dark table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Roles</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.username">
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <span v-for="role in user.roles" :key="role" class="badge bg-secondary me-1">
                        {{ role }}
                    </span>
                </td>
                <td>
                    <button class="btn btn-primary" @click="$router.push({ name: 'edituser', params: { username: user.username } })">
                        Edit
                    </button>
                    <!--
                    <button class="btn btn-danger" @click="deleteUser(user.id)">
                        Delete
                    </button>
                    -->
                </td>
            </tr>
        </tbody>
    </table>`,
    name: 'UserListComponent',
    data() {
        return {
            users: [],
            error: null
        }
    },
    async mounted() {
            console.log("UserListComponent created " + this.API_URL);
            await this.fetchUsers();
    },
    methods: { 
        async fetchUsers() {
            try {
                let userService = new UserService(this.API_URL);
                this.users = await userService.getUsers();
            } catch (err) {
                this.error = err.message;
            }
        }
    }
};
export default UserListComponent;
