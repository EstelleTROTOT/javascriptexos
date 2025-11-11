document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const menuItems = document.querySelectorAll("ul li.menu");
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Fonction pour basculer l'affichage du menu
    function toggleMenu() {
        menuItems.forEach(item => {
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    }
      // Listen toggle menu
    menuToggle.addEventListener("click", toggleMenu);

    // ListenEvent: responsiv
    mediaQuery.addEventListener("change", handleResize);

    // Initialisation au chargement
    handleResize(mediaQuery);
});

    // Responsiv
    function handleResize(e) {
        if (e.matches) { // si on est au-dessus de 640px
            menuItems.forEach(item => item.style.display = "none");
        } else {
            menuItems.forEach(item => item.style.display = "block");
        }
    }


    
