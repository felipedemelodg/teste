// src/js/modules/components/certificatePreview.js

export class CertificatePreview {
  constructor() {
    this.pageOne = document.querySelector('#front');
    this.pageTwo = document.querySelector('#back');
  }

  generatePDF(isTwoPagesActive) {
    if (!this.pageOne) return;

    // 1. Define o que vai ser impresso com base no checkbox
    let elementToPrint;

    if (isTwoPagesActive && this.pageTwo) {
      // Se forem 2 páginas, criamos um container e colocamos os elementos originais (sem clonar)
      // O html2pdf lida melhor com elementos reais do DOM do que com clones para calcular imagens
      elementToPrint = document.createElement('div');
      
      // Criamos cópias rápidas mas garantindo que mantêm os IDs para o seletor do pagebreak funcionar
      const p1 = this.pageOne.cloneNode(true);
      const p2 = this.pageTwo.cloneNode(true);
      
      elementToPrint.appendChild(p1);
      elementToPrint.appendChild(p2);
    } else {
      // Se for apenas 1 página, passa apenas o elemento #front direto
      elementToPrint = this.pageOne.cloneNode(true);
    }

      const options = {
      margin: 0,
      filename: 'certificado_treinamento.pdf',
      image: { type: 'jpeg', quality: 1.0 }, // Máxima qualidade
      
      html2canvas: { 
        scale: 2,               // Garante alta definição para o WebP
        useCORS: true,          // Evita travar o carregamento de mídias
        logging: false,
        
        // ⚡ AS TRÊS LINHAS QUE BLINDAM O WEBP FIXO:
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1123,      // 297mm convertidos exatamente para píxeis em tela web padrão (96 DPI)
        windowHeight: 794       // 210mm convertidos exatamente para píxeis
      }, 
      
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    // Executa a conversão
    html2pdf().set(options).from(elementToPrint).save();
  }
}
