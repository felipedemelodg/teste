import { extractFormData, mapElements, toggleInputError } from "../../utils/dom.js";
import { STUDENT_FIELDS_CONFIG, STUDENT_SELECTORS } from "../config/selectors.js";
export class StudentForm {
  constructor() {
    mapElements(this, STUDENT_SELECTORS)
    this.bindMascaraCPF();
  }

  getData() {
    return extractFormData(this, STUDENT_FIELDS_CONFIG)
  }

  setInputError(fieldName, hasError) {
    const targetElement = this[fieldName]
    toggleInputError(targetElement, hasError)
  }

  toggleCPF(state) {
    this.inputCpf.disabled = !state;
  }

  cpfMask(valor) {
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  }

  bindMascaraCPF() {
    this.inputCpf.addEventListener('input', (e) => {
      e.target.value = this.cpfMask(e.target.value);
    });
  }

  studentBuildName(field) {
    field.textContent = this.inputName.value
  }
  studentBuildCpf(field) { 
    field.textContent = this.inputCpf.value
  }
}
