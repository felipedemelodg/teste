import Model from '../core/model.js'
import ERROR__MESSAGES from './error_messages.js'
export function validateCertificateData(data, action = 'GENERATE') {
  const numberItens = data.programmingItens > 0

  const ERROR = ERROR__MESSAGES
  const rules = [
    {
      field: 'inputName',
      error: action === 'GENERATE' && !Model.isValidLength(data.inputName),
      message: `Nome ${ERROR.empty}`
    },
    {
      field: 'inputName',
      error: action === 'GENERATE' && Model.hasNumber(data.inputName),
      message: `Nome ${ERROR.hasNumbers}`
    },
    {
      field: 'inputCpf',
      error: action === 'GENERATE' && data.enableCPFButton && !Model.isValidLength(data.inputCpf),
      message: 'CPF deve ter no mínimo 11 números'
    },
    // {
    //   field: 'inputTraining',
    //   error: action === 'GENERATE' && !Model.isValidLength(data.inputTraining), 
    //   message: `Treinamento ${ERROR.empty}`
    // },
    {
      field: 'trainingDescription',
      error: action === 'GENERATE' && !Model.isValidLength(data.trainingDescription),
      message: `Treinamento ${ERROR.empty}`
    },
    {
      field: 'trainingPromoter',
      error: action === 'GENERATE' && !Model.isValidLength(data.trainingPromoter),
      message: `Treinamento ${ERROR.empty}`
    },
    {
      field: 'trainingWorkload',
      error: action === 'GENERATE' && Model.isZero(data.trainingWorkload),
      message: `Treinamento ${ERROR.zeroWorkload}`
    },
    {
      field: 'trainingRegulation',
      error: action === 'GENERATE' && !Model.isValidLength(data.trainingRegulation),
      message: `Treinamento ${ERROR.empty}`
    },
    {
      field: 'trainingRegulation',
      error: action === 'GENERATE' && !Model.isValidLength(data.trainingRegulation),
      message: `Treinamento ${ERROR.empty}`
    },
    {
      field: "programmingStreetName",
      error: action === 'GENERATE' && data.enableProgrammingCheckbox && !Model.isValidLength(data.programmingStreetName),
      message: `Treinamento ${ERROR.empty}`
    },
    {
      field: "programmingNeigborhood",
      error: action === 'GENERATE' && data.enableProgrammingCheckbox && !Model.isValidLength(data.programmingNeigborhood),
      message: `Bairro ${ERROR.empty}`
    },
    {
      field: "programmingCity",
      error: action === 'GENERATE' && data.enableProgrammingCheckbox && !Model.isValidLength(data.programmingCity),
      message: `Cidade ${ERROR.empty}`
    },
    {
      field: "programmingEstado",
      error: action === 'GENERATE' && data.enableProgrammingCheckbox &&  !Model.isValidLengthTwo(data.programmingEstado),
      message: `Estado ${ERROR.empty}`
    },
    {
      field: "programmingItens",
      error: action === 'GENERATE' && data.enableProgrammingCheckbox && Model.isListEmpty(data.programmingItens),
      message: `Conteudo programático ${ERROR.programminError}`
    },
    {
      field: "programmingTextField",
      error: action === 'ADD' && data.enableProgrammingCheckbox &&  !Model.isValidLength(data.programmingTextField),
      message: `Conteudo programático ${ERROR.empty}`
    },
    {
      field: "trainingInstructor",
      error: action === 'GENERATE' && !Model.isValidLength(data.trainingInstructor),
      message: `${ERROR.instructorError}`
    },
  ]



  return rules
    .filter(rule => rule.error)
    .map(rule=>({field:rule.field,message: rule.message }))
}