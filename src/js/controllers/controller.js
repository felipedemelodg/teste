import Model from "../core/model.js"
import { validateCertificateData } from "./validators.js"

export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.bindGenerateCertificate(this.handleGenerate)
    this.view.bindEnableCPF(this.handleEnableCPF)
    this.view.loadDate(this.unitFormatApp)
    this.view.bindEnableProgramming(this.handleEnableProgramming)
    this.view.bindProgrammingAdd(this.handleProgrammingAdd)
    this.view.bindEditProgrammingItem(this.handleEditProgrammingIten)
    this.view.bindProgrammingEditItem(this.handleProgrammingEditItem)
    this.view.bindDeleteItem(this.handleDeleteItem)
    this.view.bindDownloadPDF(this.handleDownloadPDFRequest)
  }

    handleDownloadPDFRequest = (data) => {
    // 1. Limpa erros visuais e valida o formulário antes de deixar baixar
    this.clearAllInputErrors();
    const errors = validateCertificateData(data, 'GENERATE');

    if (errors.length > 0) {
      const firstError = errors[0];
      this.view.showErrorEmphasis(firstError.message);
      this.view.setInputError(firstError.field, true);
      return; // Bloqueia o download se o formulário tiver erros
    }

    // 2. Se os dados forem válidos, lê o estado do teu checkbox
    const isTwoPagesNeeded = data.enableProgrammingCheckbox;

    // 3. Ordena à View que inicie o download do PDF
    this.view.triggerPDFDownload(isTwoPagesNeeded);
    
    console.log("Download do PDF iniciado pelo utilizador!");
  };

  handleDeleteItem = (handle) => {
    this.view.deleteIten(handle)
  }

  handleEditProgrammingIten = (elementSelected) => {
    this.view.updateSelectedClass(elementSelected)
    this.view.updateEditionButton()
  }

  handleProgrammingEditItem = (data) => {
    const errors = validateCertificateData(data, 'ADD')
    const fieldError = errors.find(err => err.field === 'programmingTextField');
    this.clearAllInputErrors()
    if (fieldError) {
      this.view.setInputError(fieldError.field, true)
      this.view.showErrorEmphasis(fieldError.message)
    } else {
      const text = this.view.textEditForSpan()
      this.view.passToTextProgrammingItem()
      this.view.clearProgrammingField()
    }

  }
  handleProgrammingAdd = (data) => {
    const errors = validateCertificateData(data, 'ADD')
    const fieldError = errors.find(err => err.field === 'programmingTextField');
    this.clearAllInputErrors()
    if (fieldError) {
      this.view.setInputError(fieldError.field, true)
      this.view.showErrorEmphasis(fieldError.message)
    } else {
      const text = this.view.textForSpan()
      this.view.createProgrammingLine(text)
      this.view.clearProgrammingField()
    }

  }

  handleEnableProgramming = (data) => {
    data.enableProgrammingCheckbox ? this.view.enableProgramming() : this.view.disableProgramming()
  }

  unitFormatApp = () => {
    this.getDate()
    this.selectInstructors()
  }
  selectInstructors = () => {
    const obj = this.model.getInstructors()
    const list = Object.values(obj)
    this.view.loadInstructor(list)
    this.view.getResponsible(this.model.getResponsible())
    // console.log(this.view.getInstructorRoles(obj.RIVALDO))
  }

  handleEnableCPF = (data) => {
    data.enableCPFButton ? this.view.enableCPF() : this.view.disableCPF()
  }

  getDate = () => {
    const today = new Date()
    const day = today.getDate().toString().padStart(2, '0')
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const year = new Date().getFullYear().toString()
    const monthFormat = month.length <= 1 ? `0${month}` : month
    const dateFormat = `${year}-${monthFormat}-${day}`
    this.view.setTodayDate(dateFormat)
  }


  handleGenerate = (data) => {
    this.clearAllInputErrors()
    const { programmingTextField, ...obj } = data
    const errors = validateCertificateData(obj, 'GENERATE')
    // console.log(obj)
    if (errors.length > 0) {
      const firstError = errors[0]
      this.view.showErrorEmphasis(firstError.message)
      this.view.setInputError(firstError.field, true)
      return
    }
    this.view.getInstructorName()
    const roles = this.view.getInstructorRoles(this.model.getInstructors())
    const rolesfield = this.view.rolesField()
    const signatures = this.view.getInstructorSignature(this.model.getInstructors())
    const signaturesField = this.view.signatureField()
    const registry = this.view.getInstructorRegistry(this.model.getInstructors())
    const registryField = this.view.registryField()

    this.view.inputDataOnFieldInstructor(rolesfield, roles)
    this.view.inputDataImgFieldInstructor(signaturesField, signatures)
    this.view.studentBuildName()
    this.view.studentBuildCpf()
    this.view.trainingBuildName()
    this.view.builProgramming()


    // const isTwoPagesNeeded = data.enableProgrammingCheckbox;

    // 3. Ordena à View que inicie o download do PDF
    // this.view.triggerPDFDownload(isTwoPagesNeeded);

  }

  clearAllInputErrors() {
    this.view.cleaError()
    this.view.setInputError('inputName', false);
    this.view.setInputError('inputCpf', false);

    this.view.setInputError('inputTraining', false);
    this.view.setInputError('trainingDescription', false);
    this.view.setInputError('trainingWorkload', false);
    this.view.setInputError('trainingRegulation', false);
    this.view.setInputError('trainingInstructor', false);

    this.view.setInputError('programmingStreetName', false);
    this.view.setInputError('programmingHouseNumber', false);
    this.view.setInputError('programmingNeigborhood', false);
    this.view.setInputError('programmingComplement', false);
    this.view.setInputError('programmingCity', false);
    this.view.setInputError('programmingEstado', false);
    this.view.setInputError('programmingItens', false);
    this.view.setInputError('programmingTextField', false);


  }
}