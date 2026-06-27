import { extractFormData, mapElements, toggleInputError } from "../../utils/dom.js";
import { TRAINING_FIELDS_CONFIG, TRAINING_SELECTORS } from "../config/selectors.js";

export class TrainingForm {
  constructor() {
    mapElements(this, TRAINING_SELECTORS)
  }

  getData() {
    return extractFormData(this, TRAINING_FIELDS_CONFIG)
  }


  setInputError(fieldName, hasError) {
    const targetElement = this[fieldName]
    toggleInputError(targetElement, hasError)
  }


  setDate(dateString) {
    this.trainingDate.value = dateString;
  }

  loadMockData() {
    // this.inputTraining.value = 'Treinamento';
    this.trainingDescription.value = 'Noções Básicas de Primeiros Socorros, Combate a Incêndio e Uso adequado de EPI';
    this.trainingPromoter.value = 'FSC Segurança do trabalho';
    this.trainingWorkload.value = 2;
    this.trainingRegulation.value = '06, 07 e 23';
  }

  trainingBuildName(field) {
    // field.textContent = this.inputTraining.value
  }
  trainingBuildDescription(field) {
    field.textContent = this.trainingDescription.value
  }
  trainingBuildDate(field) {
    const array = (this.trainingDate.value.split('-'))
    const ano = array[0]
    const mes = array[1]
    const dia = array[2]

    field.textContent = `${dia}/${mes}/${ano}`
  }
  trainingBuildPromoter(field) {
    field.textContent = this.trainingPromoter.value
  }
  trainingBuildWorkLoad(field) {
    field.textContent = this.trainingWorkload.value
  }
  trainingBuildRegulation(field) {
    field.textContent = this.trainingRegulation.value
  }
  trainingBuildRegulationSeal(field) {
    field.textContent = this.trainingRegulation.value
  }
}
