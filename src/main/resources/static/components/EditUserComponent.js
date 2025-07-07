import UserService from "/services/userservice.js";
//import * as DataTable from "/datatables/datatables.js"; // Assuming you have a DataTable library

let EditUserComponent = {
    template: `
    <div class="container">
        <h2>Edit User</h2>
        <form @submit.prevent="updateUser">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" readonly class="form-control" id="username" v-model="user.username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="user.email" required>
            </div>
            <div class="mb-3">
                <label for="clientname" class="form-label">Client Name</label>
                <input type="text" class="form-control" id="clientname" v-model="user.clientname" required>
            </div>
            <div>Size: {{textlength}}</div>
            <div class="mb-3">
                <label for="roles" class="form-label">Roles</label>
                <select multiple class="form-control" id="roles" v-model="selectedRoles">
                    <option v-for="role in allRoles" :key="role" :value="role">
                        {{ role }}
                    </option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Update User</button> &nbsp; &nbsp;
            <button type="button" class="btn btn-secondary" @click="$router.push({ name: 'userlist' })">Cancel</button>
        </form>
        <div v-if="error" class="alert alert-danger mt-3">
            {{ error }}
        </div>
    </div>
    `,
    name: 'EditUserComponent',
    data() {
        return {
            user: {
                id: null,
                username: '',
                email: '',
                clientname: '',
                roles: []
            },
            allRoles: [], // Placeholder for roles
            selectedRoles: [],
            error: null,
            dt: null
        };
    },
    computed: {
        textlength() {
            return this.user.email ? this.user.email.length : 0;
        }
    },    
    async mounted() {
        try {
            const username = this.$route.params.username; // Assuming username is passed as a route parameter
            const userService = new UserService(this.API_URL);
            this.user = await userService.getUser(username);
            this.allRoles = await userService.getAllRoles();
            this.selectedRoles = this.user.roles;
        }
        catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async updateUser() {
            try {
                const userService = new UserService(this.API_URL);
                this.user.roles = this.selectedRoles
                await userService.updateUser(this.user.username, this.user);
                this.$router.push({ name: 'userlist' }); // Redirect to user list after update
            }
            catch (err) {
                this.error = err.message;
            }
        }
    },
    // watch: {
    //     'user.email' : { 
    //             handler(newEmail, oldEmail) {
    //                 console.log("Email changed to: " + newEmail);
    //             }, 
    //             immediate: false 
    //         }
    // }
};  

export default EditUserComponent;  
