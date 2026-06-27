import  {CertificatePreview}  from "./components/certificatePreview.js";


import { StudentForm } from "./components/studentForm.js";
import { TrainingForm } from "./components/trainingForm.js";
import { InstructorSelect } from "./components/instructorSelect.js";
import { ProgrammingForm } from "./components/programmingForm.js";
import { LoadData } from "./components/payload.js";
import { Instructors } from "./components/instructors.js";
import { loadResponsible } from "./components/loadResponsible.js";

export default class View {
  constructor() {
    // Instancia os sub-componentes especialistas
    this.responsible = new loadResponsible()
    this.instructors = new Instructors()
    this.studentForm = new StudentForm();
    this.trainingForm = new TrainingForm();
    this.programmingForm = new ProgrammingForm();
    this.instructorSelect = new InstructorSelect();
    this.loadData = new LoadData();
    this.certificatePreview = new CertificatePreview()
    // Elementos globais da View
    this.donwloadButton = document.querySelector('#donwload__button')
    this.programmingButtonAdd = document.querySelector('#programmingButtonAdd')
    this.btnGenerate = document.querySelector("#build__button");
    this.errorDisplay = document.querySelector("#error-display");
  }

  // Junta o resultado de todos os sub-formulários num único objeto limpo
  getFormData() {
    return {
      ...this.responsible.getData(),
      // ...this.certificatePreview.getData(),
      ...this.instructorSelect.getData(),
      ...this.instructors.getData(),
      ...this.studentForm.getData(),
      ...this.trainingForm.getData(),
      ...this.programmingForm.getData(),
      ...this.loadData.getData()
    };
  }
   bindDownloadPDF(handle) {
    this.donwloadButton?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('ok')

      const data = this.getFormData(); // Pega os dados (para ler o estado do checkbox)
      handle(data);
    });
  }

  triggerPDFDownload(isTwoPagesActive) {
    console.log('ok')
    this.certificatePreview.generatePDF(isTwoPagesActive);
  }

  programmingItensNumber() {
    return this.programmingForm.programmingItensNumber()
  }
  getResponsible(obj) {
    const responsible = this.responsible
    const name = responsible.getResponsibleNameData(obj)
    const enterprise = responsible.getResponsibleInterpriseData(obj)
    const CNPJ = responsible.getResponsibleCNPJData(obj)
    responsible.getResponsibleNameField().textContent = name
    responsible.getResponsibleCNPJField().innerHTML = `${enterprise} <BR>${CNPJ}`
  }

  studentBuildName() {
    this.studentForm.studentBuildName(this.loadData.certName)
  }

  studentBuildCpf() {
    this.studentForm.studentBuildCpf(this.loadData.certCPF)
  }

  trainingBuildName() {
    // this.trainingForm.trainingBuildName(this.loadData.certTrainingName)
    this.trainingForm.trainingBuildDescription(this.loadData.certTrainingText)
    this.trainingForm.trainingBuildDate(this.loadData.certDateDetails)
    this.trainingForm.trainingBuildPromoter(this.loadData.certPromoter)
    this.trainingForm.trainingBuildWorkLoad(this.loadData.certWorkLoader)
    this.trainingForm.trainingBuildRegulation(this.loadData.certNrs)
    this.trainingForm.trainingBuildRegulation(this.loadData.certSealNr)
  }


  builProgramming() {
    this.programmingForm.buildProgrammingStreetName(this.loadData.certStreetName)
    this.programmingForm.buildprogrammingHouseNumber(this.loadData.certHouseNumber)
    this.programmingForm.buildprogrammingNeigborhood(this.loadData.certNeighborhood)
    this.programmingForm.buildprogrammingCity(this.loadData.certCity)
    this.programmingForm.buildprogrammingEstado(this.loadData.certState)
    this.programmingForm.buildprogrammingDate(this.loadData.certDate)
    this.programmingForm.buildprogrammingTrainingName(this.loadData.certStreetNamBack)
    this.programmingForm.buildprogrammingTrainingRegulation(this.loadData.certRegulatios)
    this.programmingForm.buildprogrammingTrainingWorkload(this.loadData.certWorkLoad)
    this.programmingForm.buildprogrammingTrainingComplement(this.loadData.certComplement)
    this.programmingForm.buildprogrammingTrainingprogrammingItens(this.loadData.certProgrammingItens)
    this.programmingForm.buildprogrammingTrainingDescription(this.loadData.certTrainingNameBack)
  }









  inputDataOnFieldInstructor(field, value) {
    this.instructorSelect.inputDataOnFieldInstructor(field, value)
  }
  inputDataImgFieldInstructor(field, value) {
    this.instructorSelect.inputDataImgFieldInstructor(field, value)
  }
  getInstructorRoles(obj) {
    const nameOnField = this.instructorSelect.signatureInstructorName.textContent
    const roles = this.instructorSelect.getInstructorRoles(obj)
    const registry = this.instructorSelect.getInstructorRegistry(obj)

    const objNames = this.instructorSelect.getInstructorNameObj(obj)
    const key = this.instructorSelect.returnKey(objNames, nameOnField)
    const dataRoles = roles[key]
    const dataRegistry = registry[key]
    const final = (this.instructorSelect.intercalarArrays(dataRoles, dataRegistry))
    return final.map(valor => `<p class="teste">${valor}</p>`).join('')
  }
  rolesField() {
    return this.instructorSelect.rolesField()
  }
  signatureField() {
    return this.instructorSelect.signatureField()
  }
  registryField() {
    return this.instructorSelect.registryField()
  }
  getInstructorSignature(obj) {
    const nameOnField = this.instructorSelect.signatureInstructorName.textContent
    const signature = this.instructorSelect.getInstructorSignature(obj)
    const objNames = this.instructorSelect.getInstructorNameObj(obj)
    const key = this.instructorSelect.returnKey(objNames, nameOnField)
    const data = signature[key]
    return (data)
  }

  getInstructorRegistry(obj) {
    const nameOnField = this.instructorSelect.signatureInstructorName.textContent
    const registry = this.instructorSelect.getInstructorRegistry(obj)
    const objNames = this.instructorSelect.getInstructorNameObj(obj)
    const key = this.instructorSelect.returnKey(objNames, nameOnField)
    const data = registry[key]
    const edit = data.map(valor => `<p>${valor}</p>`).join('')
    return (edit)
  }

  getInstructorName() {
    const name = this.instructorSelect.getInstructorName()
    const field = this.instructorSelect.signatureInstructorName
    field.textContent = name

  }
  renderInstructors() {
    this.instructors.renderInstructors()
  }

  createProgrammingLine(text) {
    const li = this.programmingForm.createLi()
    const span = this.programmingForm.createSpan(text)
    const button = this.programmingForm.createButton()
    li.appendChild(span)
    li.appendChild(button)
    this.programmingForm.programmingItens.appendChild(li)
  }
  textForSpan() {
    return (this.programmingForm.getTextForSpan())
  }
  textEditForSpan() {
    return this.programmingForm.getTextEditForSpan()
  }
  setInputError(elementName, hasError) {
    this.studentForm.setInputError(elementName, hasError)
    this.trainingForm.setInputError(elementName, hasError);
    this.programmingForm.setInputError(elementName, hasError)
  }

  setTodayDate(dateString) {
    this.trainingForm.setDate(dateString);
  }

  loadInstructor(instructors) {
    this.instructorSelect.renderOptions(instructors);
  }

  enableProgramming() { this.programmingForm.toggleProgramming(true) }
  disableProgramming() { this.programmingForm.toggleProgramming(false) }

  enableCPF() { this.studentForm.toggleCPF(true); }
  disableCPF() { this.studentForm.toggleCPF(false); }

  showErrorEmphasis(message) {
    this.errorDisplay.textContent = message;
    this.errorDisplay.style.backgroundColor = "var(--color-error)";
    this.errorDisplay.style.color = "#fff";
  }

  cleaError() {
    this.errorDisplay.textContent = "";
    this.errorDisplay.style.backgroundColor = "var(--gray-700)";
  }
  clearProgrammingField() {
    this.programmingForm.clearProgrammingField()
  }
  passToTextProgrammingItem() {
    this.programmingForm.passToTextProgrammingItem()
    this.programmingForm.removeSelectedClass()
    this.programmingForm.disableEditButton()
    this.programmingForm.enableAddButton()

  }


  updateSelectedClass(newItem) {
    this.programmingForm.removeSelectedClass();
    this.programmingForm.addSelectedClass(newItem);
  }
  updateEditionButton() {
    this.programmingForm.disableAddButton()
    // this.programmingForm.enableRemoveButton()
    this.programmingForm.enableEditButton()
    this.programmingForm.passToTextProgammingField()
    this.programmingForm.programmingTextField.focus()
  }

  deleteIten(el) {
    this.programmingForm.deleteIten(el)
  }


  bindDeleteItem(handle) {
    this.programmingForm.programmingItens.addEventListener('click', (e) => {
      if (e.target.classList.contains('confirmDeleteButton')) {
        const li = e.target.closest('.programmingIten')
        handle(li)
      }
    })

  }

  loadDate(initHandler) {
    document.addEventListener('DOMContentLoaded', () => {
      this.studentForm.inputName.value = 'NOME DO COLOBORADOR(a)';
      this.studentForm.inputCpf.value = 'CPF: 000.000.000-00';
      this.trainingForm.loadMockData();
      this.programmingForm.loadMockData();
      initHandler();
    });
  }
  bindEnableProgramming(handle) {
    this.programmingForm.enableProgrammingCheckbox.addEventListener('click', () => {
      const data = this.getFormData()
      handle(data)
    })
  }


  bindEditProgrammingItem(handle) {
    this.programmingForm.programmingItens?.addEventListener('click', (e) => {
      if (e.target.classList.contains('o-programming__iten-text')) {
        handle(e.target)
      }
    })
  }

  bindProgrammingEditItem(handle) {
    this.programmingForm.programmingButtonEdit.addEventListener('click', () => {
      console.log('clicou em editar')
      const data = this.getFormData()
      handle(data)
    })
  }
  bindProgrammingAdd(handle) {
    this.programmingButtonAdd.addEventListener('click', () => {
      const data = this.getFormData()
      handle(data)
    })
  }
  bindEnableCPF(handle) {
    this.studentForm.enableCPFButton.addEventListener('change', () => {
      const data = this.getFormData();
      handle(data);
    });
  }


  showCertificateOnScreen(payload) {
    this.loadData.renerPayload(payload)
  }


  bindGenerateCertificate(handle) {
    this.btnGenerate.addEventListener('click', (event) => {
      event.preventDefault();
      const data = this.getFormData();
      handle(data);
    });
  }
}
