const { createApp, ref } = Vue
createApp({
    delimiters: ['${', '}'],
    data() {
        return {
            servicio: [],
            testimonios: [],
            moreImage: '',
            idServices: '',
        }
    },
    mounted() {
        const url = 'https://api.spoonacular.com/mealplanner/generate?apiKey=92f0263949a74da9877e2fb48b92fbf9&timeFrame=day';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.servicio = data.filter(item => item.url == window.location.pathname)[0]
            });

            fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('valor de data')
                    this.servicio = data.filter(item => item.url == window.location.pathname)[0]
                });
    },
}).mount('#content-services');