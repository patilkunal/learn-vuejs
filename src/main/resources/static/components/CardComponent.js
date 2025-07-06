export default {
    name: 'CardComponent',
    props: {
        header: {
            type: String,
            default: 'Default Header'
        },
        body: {
            type: String,
            default: 'This default body. Replace it with your content.'
        },
        footer: {
            type: String,
            default: null
        }
    },
    template: `
        <div class="card">
        <h5 class="card-header">{{ header }}</h5>
        <div class="card-body">
            <p class="card-text">{{ body }}</p>
        </div>
        <div class="card-footer text-muted" v-if="footer">
            {{ footer }}
        </div>
        </div>
    `
}
