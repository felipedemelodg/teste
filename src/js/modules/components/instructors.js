import { extractFormData, mapElements } from "../../utils/dom.js";
import { INSTRUCTORS_FIELDS_CONFIG, INSTRUCTORS_SELECTORS } from "../config/selectors.js";

export class Instructors {
  constructor() {
    mapElements(this, INSTRUCTORS_SELECTORS)
  }
  getData() {
    return extractFormData(this, INSTRUCTORS_FIELDS_CONFIG)
  }

  renderInstructors() {
    const element = this.trainingInstructor
    const instructorName = element.options[element.selectedIndex].text; 
  }
}