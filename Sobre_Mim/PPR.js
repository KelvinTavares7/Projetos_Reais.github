document.addEventListener('DOMContentLoaded', () => {
  const botoes = [
    { elemento: document.querySelector('#projeto1'), url: 'To-do_list.html' },
    { elemento: document.querySelector('#projeto2'), url: 'file:///C:/Users/kelvi/OneDrive/Documentos/GitHub-Projetos/Projetos_Reais/Conversor%20de%20moedas/CDM.html' },
    { elemento: document.querySelector('#projeto3'), url: 'file:///C:/Users/kelvi/OneDrive/Documentos/GitHub-Projetos/Projetos_Reais/To-do_list/To-do_list.html' }
  ];

  botoes.forEach(({ elemento, url }) => {  
    if (elemento) {
      elemento.addEventListener('click', () => {
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
  });
});
