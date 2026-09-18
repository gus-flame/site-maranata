const CONFIG = {
    // Insira seu número (DDI + DDD + Número) sem espaços. Exemplo: 5541999999999
    telefone: "5541984843077", 
    
    // Mensagem de introdução que já vem escrita para o client
    mensagem: "Olá! Quero fazer uma encomenda com vocês. Como faço para ver as opções e reservar?"
};

document.addEventListener("DOMContentLoaded", () => {
    const botaoWhatsApp = document.getElementById("btn-whatsapp");
    
    if (botaoWhatsApp) {
        const textoFormatado = encodeURIComponent(CONFIG.mensagem);
        const linkFinal = `https://wa.me/${CONFIG.telefone}?text=${textoFormatado}`;
        
        botaoWhatsApp.href = linkFinal;
        botaoWhatsApp.target = "_blank";
    }
});