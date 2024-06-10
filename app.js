import myComponent from './myComponent.js';

const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Mundo!'
        };
    },
    components: {
        myComponent
    }
});

app.mount('#app');