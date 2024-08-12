import carNumberInput from './car-number-input/main.vue';

function install(app) {
  app.component(carNumberInput.name, carNumberInput)
}
carNumberInput.install = install
export {
  carNumberInput,
  install
}
export default carNumberInput;
