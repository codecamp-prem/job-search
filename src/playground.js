const { reactive, computed, toRefs } = require("vue");

const person = reactive({
  firstName: "john",
  lastName: "cena",
});

const { firstName, lastName } = toRefs(person);

const title = computed(() => `${firstName.value} ${lastName.value} the great`);
console.log(title.value);

person.firstName = "Bikram";
console.log(title.value);

person.lastName = "Limbu";
console.log(title.value);
