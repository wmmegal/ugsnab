document.addEventListener('alpine:init', function () {
    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = ! this.open
        }
    }))
});
