import { extractFormData, mapElements } from "../../utils/dom.js";
import { CERTIFICATE_FIELDS_CONFIG, CERTIFICATE_SELECTORS } from "../config/selectors.js";

export class LoadData {
  constructor() {
    mapElements(this, CERTIFICATE_SELECTORS)
  }
  getData() {
    return extractFormData(this, CERTIFICATE_FIELDS_CONFIG)
  }

  
  renerPayload(payload){
    if(this.certName) this.certName.textContent = payload.inputName
    if(this.certCPF) this.certCPF.textContent = payload.inputCpf
    if(this.certTrainingName) this.certTrainingName.textContent = payload.inputTraining
    if(this.certTrainingText) this.certTrainingText.textContent = payload.trainingDescription
    if(this.certNrs) this.certNrs.textContent = payload.trainingRegulation
    if(this.certWorkLoader) this.certWorkLoader.textContent = payload.trainingWorkload
    if(this.certPromoter) this.certPromoter.textContent = payload.trainingPromoter
    // if(this.signatureInstructorName) this.signatureInstructorName.textContent = payload.trainingInstructor

    // if(payload.trainingInstructor =="Rivaldo Fernandes da Fonseca"){
    //   this.signatureInstructorImage.src= "./src/assets/img/rivaldoFdF__signature.webp"
    //   console.log(payload)

    // }


  }
  
}