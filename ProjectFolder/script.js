const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        const style = document.createElement('style');
        style.textContent = `
            body.dark-mode {
                background-color: black;
                color: white;
            }
        `;
        document.head.appendChild(style);