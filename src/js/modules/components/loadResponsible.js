import { extractFormData, mapElements } from "../../utils/dom.js";
import { RESPONSIBLE_SELECTORS } from "../config/selectors.js";

export class loadResponsible {
  constructor() {
    mapElements(this, RESPONSIBLE_SELECTORS)
  }
  getData() {
    return extractFormData(this, RESPONSIBLE_SELECTORS)
  }
  getResponsible(obj) {
    return obj
  }
  getResponsibleInterpriseField() {
    return this.signatureResponsibleInterprise
  }
  getResponsibleNameField() {
    return this.signatureResponsibleName
  }
  getResponsibleCNPJField() {
    return this.signatureResponsibleCNPJ
  }
  getResponsibleInterpriseData(obj) {
    return obj.FABIO.enterprise
  }
  getResponsibleNameData(obj) {
    return obj.FABIO.name
  }
  getResponsibleCNPJData(obj) {
    return obj.FABIO.CNPJ
  }


}