// src/utils/dom.js

/**
 * Mapeia automaticamente seletores HTML para propriedades de uma classe.
 * @param {Object} context - O 'this' da classe onde os elementos serão injetados
 * @param {Object} selectors - O dicionário de chaves e seletores CSS
 */
export function mapElements(context, selectors) {
  Object.entries(selectors).forEach(([key, selector]) => {
    const elements = context[key] = document.querySelector(selector)
    // console.log(elements)
  });
}

export function extractFormData(context, config) {
  const data = {};

  Object.entries(config).forEach(([key, valueType]) => {
    const element = context[key];

    if (element) {
      if(valueType ==='checked'){
        data[key]=element.checked
      }else if(valueType ==='childrenCount'){
         data[key] = element.children.length; 
      }else{
        data[key] = element.value;
      }
      // Se for um checkbox/radio lê .checked, caso contrário lê .value
      // data[key] = valueType === 'checked' ? element.checked : element.value;
      // if (key == "programmingItens") {
      //   (element.value = element.childElementCount)
      // }
    }
  });
  return data;
}



export function toggleInputError(element, hasError, className = 't-input-error') {
  if (!element) return; // Proteção caso o elemento não exista na tela

  // O toggle com o segundo parâmetro booleano substitui totalmente o if/else
  element.classList.toggle(className, hasError);
}
