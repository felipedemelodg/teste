export const PROGRAMMING_SELECTORS = {
  programmingGroup: '#programmingGroup',
  enableProgrammingCheckbox: '#enableProgrammingCheckbox',
  programmingStreetName: '#programmingStreetName',
  programmingHouseNumber: '#programmingHouseNumber',
  programmingNeigborhood: '#programmingNeigborhood',
  programmingComplement: '#programmingComplement',
  programmingCity: '#programmingCity',
  programmingEstado: '#programmingState',
  programmingButtonAdd: '#programmingButtonAdd',
  programmingButtonRemove: '#programmingButtonRemove',
  programmingButtonEdit: '#programmingButtonEdit',
  programmingTextField: '#programmingTextField',
  programmingItens: '#programmingItens',
  programmingIten: '.programmingIten',
  programmingElementSelected: '.t-select',
  confirmDeleteButton: '.confirmDeleteButton',
  front: '#front',
  certDate: '#certDate',
  trainingDate: "#training__date",
  inputTraining: "#training__name",
  trainingRegulation: "#training__regulation",
  trainingWorkload: "#training__workload",
  programmingItenText: '.o-programming__iten-text',
  trainingDescription: "#training__description",
}

export const PROGRAMMING_FIELDS_CONFIG = {
  programmingGroup: 'disabled', // propriedade: tipo de dado
  enableProgrammingCheckbox: 'checked', // para checkboxes usar 'checked'
  programmingStreetName: 'value',
  programmingHouseNumber: 'value',
  programmingNeigborhood: 'value',
  programmingComplement: 'value',
  programmingCity: 'value',
  programmingEstado: 'value',
  programmingTextField: 'value',
  programmingItens: 'childrenCount',
};

export const TRAINING_SELECTORS = {
  // inputTraining: "#training__name",
  trainingDescription: "#training__description",
  trainingDate: "#training__date",
  trainingPromoter: "#training__promoter",
  trainingWorkload: "#training__workload",
  trainingRegulation: "#training__regulation",
}


export const TRAINING_FIELDS_CONFIG = {
  // inputTraining: "value",
  trainingDescription: "value",
  trainingDate: "value",
  trainingPromoter: "value",
  trainingWorkload: "value",
  trainingRegulation: "value",
}

export const STUDENT_SELECTORS = {
  inputName: "#student__name",
  inputCpf: "#student__cpf",
  enableCPFButton: "#enable__cpf",
}



export const STUDENT_FIELDS_CONFIG = {
  inputName: "value",
  inputCpf: "value",
  enableCPFButton: "checked",
}

export const CERTIFICATE_SELECTORS = {
  certName: '#certName',
  certCPF: '#certCPF',
  certTextBody: '#certTextBody',
  certTrainingText: '#certTrainingText',
  certNrs: '#certNrs',
  certSealNr: '#sealNr',
  certDate: '#certDate',
  certPromoter: '#certPromoter',
  certWorkLoader: '#certWorkLoader',
  certTrainingName: '#certTrainingName',
  certRegulatios: '#certRegulatios',
  certStreetName: '#certStreetName',
  certStreetNamBack: '#certTrainingNameBack',
  certHouseNumber: '#certHouseNumber',
  certComplement: '#certComplement',
  certNeighborhood: '#certNeighborhood',
  certCity: '#certCity',
  certState: '#certState',
  certDate: '#certDate',
  certDateDetails: '#certDateDetails',
  certWorkLoad: '#certWorkLoad',
  trainingInstructor: '#training__instructor',
  certProgrammingItens: '#certProgrammingItens',
  certTrainingNameBack: "#certTrainingNameBack",
  programmingItens: '#programmingItens',
  signatureInstructorName: '#signatureInstructorName',
  signatureInstructorImage: '#signatureInstructorImage',
  signatureInstructorRoles: '#signatureInstructorRoles',

}
export const CERTIFICATE_FIELDS_CONFIG = {
  certName: '#certName.value',
  certCPF: '#certCPF.value',
  certTextBody: '#certTextBody.value',
  certTrainingText: '#certTrainingText.value',
  certNrs: '#certNrs.value',
  certDate: '#certDate.value',
  certPromoter: '#certPromoter.value',
  certWorkLoader: '#certWorkLoader.value',
  certTrainingName: '#certTrainingName.value',
  trainingInstructor: '#training__instructor',
  signatureInstructorName: '#signatureInstructorName',
  signatureInstructorImage: '#signatureInstructorImage.url',
}

export const INSTRUCTORS_SELECTORS = {
  signatureInstructorImage: '#signatureInstructorImage',
  signatureInstructorName: '#signatureInstructorName',
  signatureInstructorRoles: '#signatureInstructorRoles',
  signatureInstructorRegistry: '#signatureInstructorRegistry',
  trainingInstructor: '#training__instructor'
}
export const INSTRUCTORS_FIELDS_CONFIG = {
  signatureInstructorImage: '#signatureInstructorImage.url',
  signatureInstructorName: '#signatureInstructorName.textContent',
  signatureInstructorRoles: '#signatureInstructorRoles.textContent',
  signatureInstructorRegistry: '#signatureInstructorRegistry.textContent',
  trainingInstructor: '#training__instructor'
}
export const RESPONSIBLE_SELECTORS = {
  signatureResponsibleInterprise: '#signatureResponsibleInterprise',
  signatureResponsibleName: '#signatureResponsibleName',
  signatureResponsibleCNPJ: '#signatureResponsibleCNPJ',
}