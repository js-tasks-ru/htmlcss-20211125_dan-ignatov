(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
        // https://www.javascripttutorial.net/dom/css/get-the-scrollbar-width-of-an-element/
        // https://stackoverflow.com/questions/4814398/how-can-i-check-if-a-scrollbar-is-visible
        if(document.body.scrollHeight > document.body.clientHeight) {
            // fix "show/hide scrollbar shifts content horizontally"
            document.body.style.paddingRight = '14px';
        }
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'initial';
        document.body.style.paddingRight = 'initial';
    });
})();