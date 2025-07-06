let SingleBlogComponent = {
    template: `
            <div class="card" class="mb-3">
            <div class="card-header">
                <h5 class="card-title">{{ post?.title }}</h5>
            </div>
            <div class="card-body">
    \            <p class="card-text">{{ post?.body }}</p>
            </div>
        </div>
`,
    name: 'SingleBlogComponent',
    data() {
        return {
            post: null,
            error: null
        }
    },
    async created() {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
            if (!response.ok) {
                this.error = `HTTP error! status: ${response.status}`;
                return;
            }
            this.post = await response.json();
        } catch (err) {
            this.error = err.message;
        }
    },
    beforeRouteUpdate(to, from, next) {
        // This method is called when the route changes.
        // You can use it to fetch new data or update the component state.
        this.created().then(() => next());
    }
};

export default SingleBlogComponent;
