const app = Vue.createApp({
    data() {
        return {
            arrdata: [1, 2, 3, 4, 5],
            message: 'Hello Vue!',
            visible: true,
            someclass:'color-red',
            togglered: false,
            somemessage: 'v-text This is a message from the parent component',
        }
    },
    methods: {
        toggleVisibility() {
            this.visible = !this.visible;
        }
    }
});

app.component('custom-form', {
    template: `
        <h2>{{ title }}</h2>
        <h3>{{ count }}</h3>
        <button @click="increment">Increment</button>
        <form @submit.prevent="handleSubmit()">
            <custom-input
                v-for="(input, i) in inputs"
                :key="i"
                v-bind:modelValue="input.value"
                v-bind:type="input.type"
                v-bind:label="input.label"></custom-input>
            <button type="submit">Submit</button>
        </form>
    `,
    components: ['custom-input'], //this tells Vue that the custom-input component is a child component
    setup() {
        //setup does not have access to the data()

       },
    beforeMount() {
        console.log("before mount " + this.count) // => 1
       },
    mounted() {
        // This can be used to get the initial data
        // `this` refers to the component instance.
        console.log("mounted " +  this.count) // => 1

        // data can be mutated as well
        this.count = 2
      },
    data() {
        return {
            title: 'Login form',
            count: 22,
            inputs: [
                {name: 'email', label: 'Email', type: 'email', value:'someone@hotmail.com'},
                {name: 'password', label: 'Password', type: 'password', value:''}
            ]
        }
    },
    methods: {
        handleSubmit() {
            alert('Form submitted! ' + this.inputs[0].value + ' ' + this.inputs[1].value );
        },
        increment() {
            this.count++;
        }
    }
});

app.component('custom-input', {
    //modelValue is auto passed from parent component, since we are using v-model in the parent component
    props: ['label', 'type', 'modelValue'], // this is passed from the parent component
    emits: ['update:modelValue'], // this is passed from the parent component
    //@input="$emit('update:modelValue', $event.target.value)"
    template: `
        <label :for="label">{{ label }}</label>
        <input :type="type" :id="label" :name="label" v-model="modelValue"><br/>
    `,
    data() {
         // input value but only for this component
        return {
            inputValue: 100
        }
    },
    /*
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
                console.log(val);
            }
        }
    }
        */
});
app.mount('#app');

