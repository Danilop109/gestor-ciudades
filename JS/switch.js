// --------------------------------------FONDOS--------------------------------
function cambiarTema(theme) {
    var customTheme = document.getElementById('customTheme');

    if (theme === 'light') {
      customTheme.textContent = `
      .principal{
        background-color: rgba(250, 248, 248, 0.507);
    }
    .tabla{
        background-color: rgb(13, 13, 14);
        color: white;
    }
      `;
    } else if (theme === 'dark') {
      customTheme.textContent = `
      .principal{
        background-color: rgba(20, 20, 20, 0.507);
    }
    .tabla{
        background-color: rgb(242, 242, 245);
        color: rgb(7, 7, 7);
    }
      `;
    }

    localStorage.setItem('theme', theme);
  }

  function shiftTema() {
    var miTema = localStorage.getItem('theme');
    if (miTema == 'light') {
      cambiarTema('dark')
    } else if (miTema == 'dark') {
      cambiarTema('light')
    }
  }
  // Obtener el tema del Local Storage al cargar la página
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    cambiarTema(savedTheme);
  }

// --------------------------------------LETRAS--------------------------------
function tamaño(letra) {
    var customletra = document.querySelector('.letrica');

    if (letra === 'media') {
      customletra.textContent = `
      .principal{
        font-size: 18px;
    }
      `;
    } else if (letra === 'big') {
      customletra.textContent = `
      .principal{
        font-size: 23px;
    }
      `;
    }

    localStorage.setItem('letra', letra);
  }