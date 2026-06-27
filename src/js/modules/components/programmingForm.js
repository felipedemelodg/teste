import { extractFormData, mapElements, toggleInputError } from "../../utils/dom.js"
import { PROGRAMMING_FIELDS_CONFIG, PROGRAMMING_SELECTORS } from "../config/selectors.js"

export class ProgrammingForm {
  constructor() {
    mapElements(this, PROGRAMMING_SELECTORS)
  }
  getData() {
    return extractFormData(this, PROGRAMMING_FIELDS_CONFIG)
  }
  createLi() {
    const li = document.createElement('li')
    li.classList.add('programmingIten')
    li.classList.add('o-programmig__button--iten')
    return li
  }
  createSpan(text) {
    const span = document.createElement('span')
    span.classList.add('o-programming__iten-text')
    span.textContent = text + '.'
    return span
  }
  createButton() {
    const button = document.createElement('button')
    button.classList.add('confirmDeleteButton')
    button.classList.add('o-programmig__button--delete')
    button.textContent = "x"
    return button
  }
  deleteIten(el) {
    return el.remove()
  }
  getTextForSpan() {
    return this.programmingTextField.value
  }
  getTextEditForSpan() {
    const span = document.querySelector('.o-programming__iten-text')
    return span.textContent
  }
  getElementSelected(value) {
    document.querySelector('.t-select').textContent = value
  }
  removeSelectedClass() {
    const itemSelected = document.querySelector('.t-select')
    if (itemSelected) {
      itemSelected.classList.remove('t-select')
    }

  }
  addSelectedClass(element) {
    element.classList.add('t-select')
  }
  disableAddButton() {
    this.programmingButtonAdd.disabled = true
  }
  enableAddButton() {
    this.programmingButtonAdd.disabled = false
  }
  enableEditButton() {
    this.programmingButtonEdit.disabled = false
  }
  disableEditButton() {
    this.programmingButtonEdit.disabled = true
  }


  clearProgrammingField() {
    this.programmingTextField.value = ""
  }


  passToTextProgammingField() {
    this.programmingTextField.value = document.querySelector('.t-select')?.textContent
  }
  passToTextProgrammingItem() {
    document.querySelector('.t-select').textContent = this.programmingTextField.value + '.'
  }

  setInputError(fieldName, hasError) {
    const targetElement = this[fieldName]
    toggleInputError(targetElement, hasError)
  }

  toggleProgramming(state) {
    this.programmingGroup.disabled = !state
    if (state) {
      this.front.style.zIndex = '-1'
    } else {
      this.front.style.zIndex = '10'
    }
  }

  getDeleteItemButton() {
    return document.querySelector('.programmingIten')
  }


  loadMockData() {
    this.programmingStreetName.value = 'Avenida Antônio de Goes';
    this.programmingHouseNumber.value = 449,
      this.programmingNeigborhood.value = 'Pina';
    this.programmingCity.value = 'Recife';
    this.programmingEstado.value = 'PE';
  }
  programmingNumberElements(){
    console.log(this.programmingItens)
  }

  buildProgrammingStreetName(field) {
    field.textContent = this.programmingStreetName.value+','
  }
  buildprogrammingHouseNumber(field) {
    field.textContent = this.programmingHouseNumber.value+','
  }
  buildprogrammingNeigborhood(field) {
    field.textContent = this.programmingNeigborhood.value+','
  }
  buildprogrammingComplement(field) {
    field.textContent = this.programmingComplement.value+','
  }
  buildprogrammingCity(field) {
    field.textContent = this.programmingCity.value
  }
  buildprogrammingEstado(field) {
    field.textContent = this.programmingEstado.value+','
  }
  buildprogrammingDate(field) {
    field.textContent = this.trainingDate.value+','
  }
  buildprogrammingTrainingName(field) {
    field.textContent = this.inputTraining.value
  }
  buildprogrammingTrainingRegulation(field) {
    field.textContent = this.trainingRegulation.value+','
  }
  buildprogrammingTrainingWorkload(field) {
    field.textContent = this.trainingWorkload.value+' Horas.'
  }
  buildprogrammingTrainingComplement(field) {
    if(this.programmingComplement.value=="") return
    field.textContent = `(${this.programmingComplement.value})`
  }
  buildprogrammingTrainingDescription(field) {
    field.textContent = this.trainingDescription.value+','
  }

  buildprogrammingTrainingprogrammingItens(field){
    const elements = (this.programmingItens.getElementsByClassName('o-programming__iten-text'))
    const array = Array.from(elements).map(el=> el.textContent)
    const arrayLi = (array.map(value=> `<li>${value}</li>`).join(''))
    field.innerHTML = arrayLi
  }


  programmingItensNumber(){
    return this.programmingItens.children.length
  }
  programmingPlus(){
    return this.programmingItens.childNodes.length++ 
  }

}