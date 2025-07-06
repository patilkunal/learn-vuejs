let BlogComponent = {
    template: `
        <div class="card" v-for="post in blogPosts" :key="post.id" class="mb-3">
            <div class="card-header">
                <h5 class="card-title">{{ post.title }}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">{{ post.body }}</p>
            </div>
        </div>
    `,
    name: 'BlogComponent',
    data() {
        return {
            blogPosts: null,
            error: null
        }
    },
    async created() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                //throw new Error(`HTTP error! status: ${response.status}`);
                this.error = `HTTP error! status: ${response.status}`;
                return;
            }
            this.blogPosts = await response.json();
        } catch (err) {
            this.error = err.message;
        }
    },
    async beforeRouteUpdate(to, from, next) {
        // This method is called when the route changes.
        // You can use it to fetch new data or update the component state.
        await this.created();
        next();
    }
}

export default BlogComponent;