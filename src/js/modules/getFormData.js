export default function getFormData() {
    return {
      name: this.inputName.value,
      cpf: this.inputCpf.value,
      stateCPF: this.enableCPFButton.checked
    }
}