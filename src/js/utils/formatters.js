export function cpfMask(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

export function getDate(){
  const today = new Date()
  const day = today.getDate().toString().padStart(2, '0')
  const month = (today.getMonth() + 1).toString().padStart(2, '0')
  const year = new Date().getFullYear().toString()
  const monthFormat = month.length <= 1 ? `0${month}` : month
  const dateFormat = `${year}-${monthFormat}-${day}`
  this.view.setTodayDate(dateFormat)
}