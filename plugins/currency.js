import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value) {
    if (typeof value !== "number") {
      return value;
    }
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    })
    return formatter.format(value);
  })
}
