const { createApp } = Vue

createApp({
  data() {
    return {
      itens: [],
      novoItem: {
        nome: '',
        quantidade: 0
      }
    }
  },
  methods: {
    adicionarItem() {
      this.itens.push({ ...this.novoItem });
      this.novoItem.nome = '';
      this.novoItem.quantidade = 0;
    }
  }
}).mount('#app')