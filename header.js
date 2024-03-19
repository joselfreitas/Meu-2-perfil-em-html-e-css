// Selecionar o cabeçalho
const header = document.querySelector(".header");

// Selecionar o conteúdo principal
const mainContent = document.getElementById("mainContent");

// Obter a altura do cabeçalho
const headerHeight = header.offsetHeight;

// Definir o padding-top do conteúdo principal para a altura do cabeçalho
mainContent.style.paddingTop = headerHeight + "px";
