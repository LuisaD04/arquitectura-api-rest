const { createApp, ref } = Vue;
createApp({
  delimiters: ["${", "}"],
  data() {
    return {
      plan: {},
      parameters: {
        timeFrame: "",
        targetCalories: "",
        diet: "",
      },
      foods: ["Desayuno", "Almuerzo", "Cena"],
    };
  },
  mounted() {},
  methods: {
    onSelectChange() {
      let url = `https://api.spoonacular.com/mealplanner/generate?apiKey=92f0263949a74da9877e2fb48b92fbf9`;

      Object.entries(this.parameters).forEach(([key, value]) => {
        if (value) {
          url = url + `&${key}=${value}`;
        }
      });
      fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("valor de data", data);
          this.plan = data["week"] ? data["week"] : [data];
        });
    },
    async registerUser(event) {
      event.preventDefault();
      const formData = {
        firstName: event.target["first-name"].value,
        lastName: event.target["last-name"].value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      try {
        const response = await fetch(
          "https://api.spoonacular.com/users/connect?apiKey=129748b6bbb4450d85cbe0f4037f8f82",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        console.log("Registro exitoso:", data);
      } catch (error) {
        console.error("Error en el registro:", error);
      }
    },
  },
}).mount("#generate-meal-plan");
