document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    header.innerHTML = `
        <img src="data:image/png;base64,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" alt="Logo">
        <div class="header-title">Página de Github: </div>
        <a href="https://github.com/Vane1611gt/Partes-del-computador.git" class="github-btn">GitHub</a>
    `;

    header.addEventListener('click', () => {
        const title = header.querySelector('.header-title');
        setTimeout(() => {
            title.textContent = 'Página: ';
        }, 2000);
    });
});
