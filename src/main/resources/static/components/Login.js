import store from '/store/index.js';

let LoginComponent = {
    template: `
        <div class="container">
            <h2>Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" v-model="username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">
                {{ error }}
            </div>
        </div>
    `,
    data() {
        return {
            username: '',
            password: '',
            error: null
        };
    },
    methods: {
        handleLogin() {
            // Simulate a login process
            if (this.username === 'admin' && this.password === 'password') {
                console.log('Login successful');
                store.commit('setAuthenticated', true); // Update the Vuex store
                store.commit('setUser', { username: this.username }); // Set user data
                this.$router.push('/home'); // Redirect to home on successful login
            }
            else {
                this.error = 'Invalid username or password';
            }
        }
    }
};

export default LoginComponent;
