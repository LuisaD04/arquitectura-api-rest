const { createApp, ref } = Vue
createApp({
    delimiters: ['${', '}'],
    data() {
        return {
            plan: {

            },
            parameters: {
                timeFrame: '',
                targetCalories: '',
                diet: '',
            },
            foods: [
                'Desayuno',
                'Almuerzo', 
                'Cena'
            ]
        }
    },
    mounted() {

    },
    methods: {
        onSelectChange() {
            let url = `https://api.spoonacular.com/mealplanner/generate?apiKey=92f0263949a74da9877e2fb48b92fbf9`;

            Object.entries(this.parameters).forEach(([key, value]) => {
                if (value) {
                    url = url + `&${key}=${value}`
                }
            });
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('valor de data', data)
                    this.plan = data['week'] ? data['week'] : [data];
                });
        }
    }

}).mount('#generate-meal-plan');