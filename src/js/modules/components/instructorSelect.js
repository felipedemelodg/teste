import { extractFormData, mapElements } from "../../utils/dom.js";
import { INSTRUCTORS_FIELDS_CONFIG, INSTRUCTORS_SELECTORS } from "../config/selectors.js";

export class InstructorSelect {
  constructor() {
    // this.trainingInstructor = document.querySelector("#training__instructor");
    mapElements(this, INSTRUCTORS_SELECTORS)
  }
  getData() {
    extractFormData(this, INSTRUCTORS_FIELDS_CONFIG)
  }

  renderOptions(instructors) {
    if (!this.trainingInstructor) return;

    this.trainingInstructor.innerHTML = '<option value="">Selecione o instrutor...</option>';
    instructors.forEach(inst => {
      const option = document.createElement('option');
      option.value = inst.name;
      option.textContent = inst.name;
      this.trainingInstructor.appendChild(option);
    });
  }


  getInstructorName() {
    const element = this.trainingInstructor
    const instructorName = element.options[element.selectedIndex].text;
    return instructorName
  }

  getInstructorSignature(obj) {
    const signature = {
      LUIZ: obj.LUIZ.signature,
      RIVALDO: obj.RIVALDO.signature,
      UMBERTO: obj.UMBERTO.signature,
      ELI: obj.ELI.signature,
    }
    return signature
  }
  getInstructorRoles(obj) {
    const roles = {
      LUIZ: obj.LUIZ.roles,
      RIVALDO: obj.RIVALDO.roles,
      UMBERTO: obj.UMBERTO.roles,
      ELI: obj.ELI.roles,
    }
    return roles
  }
  getInstructorRegistry(obj) {
    const registry = {
      LUIZ: obj.LUIZ.registry,
      RIVALDO: obj.RIVALDO.registry,
      UMBERTO: obj.UMBERTO.registry,
      ELI: obj.ELI.registry,
    }
    return registry
  }
  getInstructorNameObj(obj) {
    const name = {
      LUIZ: obj.LUIZ.name,
      RIVALDO: obj.RIVALDO.name,
      UMBERTO: obj.UMBERTO.name,
      ELI: obj.ELI.name,
    }
    return name
  }
  returnKey(obj, valor) {
    return Object.keys(obj).find(key => obj[key] === valor)
  }
  inputDataOnFieldInstructor(field, value) {
    field.innerHTML = value
  }
  inputDataImgFieldInstructor(field, value) {
    field.src = value
  }
  rolesField() {
    return this.signatureInstructorRoles
  }
  signatureField() {
    return this.signatureInstructorImage
  }
  registryField() {
    return this.signatureInstructorRegistry
  }
  intercalarArrays(arr1, arr2) {
    console.log(arr1,arr2)
    const maiorTamanho = Math.max(arr1.length, arr2.length);
    const resultado = [];

    for (let i = 0; i < maiorTamanho; i++) {
      const parte1 = arr1[i] !== undefined ? arr1[i] : "";
      const parte2 = arr2[i] !== undefined ? arr2[i] : "";

      // Une os dois valores com um traço/espaço intermediário
      resultado.push(`${parte1}  ${parte2}`);
    }

    return resultado;
  }
}
