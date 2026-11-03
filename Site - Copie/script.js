document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les boutons de menu et les panneaux de contenu
    const menuItems = document.querySelectorAll('.menu-item');
    const panels = document.querySelectorAll('.panel');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Désactiver tous les boutons de menu
            menuItems.forEach(btn => btn.classList.remove('active'));
            // 2. Cacher tous les panneaux de contenu
            panels.forEach(panel => panel.classList.remove('active'));

            // 3. Activer le bouton cliqué
            item.classList.add('active');

            // 4. Afficher le panneau correspondant via l'attribut data-target
            const targetId = item.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});