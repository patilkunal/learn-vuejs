import CardComponent from '/components/CardComponent.js';

let HomeComponent = {
    template: `
            <h1>Welcome to the Vue Application</h1>
            <p>This is a simple Vue.js application.</p>
            <p>{{message}}</p>
            <div class="row">
                <div class="col-md-4 col-sm-12 mb-2">
                    <card-component header="Card 1" body="This is the body of card 1." footer="Footer 1"/>
                </div>
                <div class="col-md-4 col-sm-12 mb-2">
                    <card-component header="Card 2" body="This is the body of card 2." footer="Footer 2"/>
                </div>
                <div class="col-md-4 col-sm-12 mb-2">
                    <card-component header="Card 3" body="This is the body of card 3."/>
                </div>
            </div>

    `,
    name: 'HomeComponent',
    components: {
        CardComponent
    },
    props: {},
    data() {
        return {
            message: "Welcome to the Home Page!"
        }
    },
    computed: {},
    methods: {},
    created() {
        console.log("HomeComponent created");
    },

};

export default HomeComponent;
