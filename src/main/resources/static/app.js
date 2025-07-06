import NavBar from './components/NavBar.js';
import BlogComponent from './components/BlogComponent.js';
import HomeComponent from './components/HomeComponent.js';
import SingleBlogComponent from './components/SingleBlogComponent.js';
import LoginComponent from './components/Login.js';
import store from './store/index.js';
import UserListComponent from './components/UserListComponent.js';
import EditUserComponent from './components/EditUserComponent.js';


const app =  Vue.createApp({
    template: '#root-template',
    components: { NavBar, BlogComponent, HomeComponent, store, SingleBlogComponent, LoginComponent },
    data: function() {
        // This is the data function that returns an object with properties
        // that can be used in the template.
        // The properties can be accessed using `this.propertyName` in the template.
        return {
            message: "hello world. I love Vue.js!",
        }
    },
    computed: {},
    methods: {}
});

//var hostparser = document.createElement('a');
var host = window.location.hostname; // Get the host from the current
console.log("Host: " + host);
if (host === 'localhost' || host === '127.0.0.1') {  
  app.config.globalProperties.API_URL= 'http://localhost:8080';
} else {
  app.config.globalProperties.API_URL = 'https://ngage.jtshealthpartners.com'; // Change this to
}


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/login', name: 'Login', component: LoginComponent }, // Placeholder for Login component
        { path: '/', redirect: '/home' }, // Redirect root path to /home
        { path: '/home', name:'home', component: HomeComponent},
        { path: '/userlist', name:'userlist', component: UserListComponent },
        { path: '/edituser/:username', name:'edituser', component: EditUserComponent },        
        { path: '/singleblog/:id', name:'singleblog', component: SingleBlogComponent }        
    ]  
});

/*
 router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
  if (
    // make sure the user is authenticated
    !store.getters.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    next({ name: 'Login' });
  } else {
    next(); // Allow the navigation
    return true;
  }
})
*/

app.use(router);
app.use(store); // Use the Vuex store in the Vue app

// Mount the Vue app to the DOM element with id "mainapp"
app.mount("#mainapp");
