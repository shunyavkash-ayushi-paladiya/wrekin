document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("menu-overlay").classList.add("active");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("menu-overlay").classList.remove("active");
});



document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuItems = document.querySelectorAll(".menulist-a");
    const submenu = document.getElementById("submenu");

    const submenus = {
        wrekin: {
            items: ["Homepage", "Admissions", "International Admissions", "Academic", "Wrekin Life", "Year 7-8", "Sixth Form", "Co-Curricular", "About Us", "News & Events"],
            color: "#002A4D"
        },
        oldhall: {
            items: ["Homepage", "Admissions", "Old Hall Life", "Academic", "Our Community", "News & Events", "Policies", "Get in touch"],
            color: "#7A2534"
        },
    };

    menuBtn.addEventListener("click", function () {
        menuOverlay.classList.add("active");
        menuOverlay.style.backgroundColor = "#4B4F61"; 
    });

    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
    });

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            menuItems.forEach((menu) => menu.classList.remove("active"));
            this.classList.add("active");

            const selectedMenu = this.getAttribute("data-menu");
            const submenuData = submenus[selectedMenu];

            if (submenuData) {
                submenu.innerHTML = submenuData.items.map(item => `<li>${item}</li>`).join("");
                submenu.classList.add("active");

                menuOverlay.style.backgroundColor = submenuData.color;
            } else {
                submenu.classList.remove("active");
                menuOverlay.style.backgroundColor = "#4B4F61"; 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuItems = document.querySelectorAll(".menulist-a");
    const submenu = document.getElementById("submenu");
    const menuList = document.querySelector(".menu-list");

    // Submenu data with colors
    const submenus = {
        wrekin: {
            items: ["Homepage", "Admissions", "International Admissions", "Academic", "Wrekin Life", "Year 7-8", "Sixth Form", "Co-Curricular"],
            color: "#002A4D"
        },
        oldhall: {
            items: ["Homepage", "Admissions", "Old Hall Life", "Academic", "Our Community", "News & Events", "Policies", "Get in touch"],
            color: "#7A2534"
        },
    };

    // Set default background color
    menuOverlay.style.backgroundColor = "#4B4F61"; 

    // Open menu overlay
    menuBtn.addEventListener("click", function () {
        menuOverlay.classList.add("active");
        menuOverlay.style.backgroundColor = "#4B4F61"; 
    });

    // Close menu overlay
    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        submenu.classList.remove("active"); 
        menuList.classList.remove("hidden"); 
        menuOverlay.style.backgroundColor = "#4B4F61"; 
    });

    // Handle menu item clicks
    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            menuItems.forEach((menu) => menu.classList.remove("active"));
            this.classList.add("active");

            const selectedMenu = this.getAttribute("data-menu");
            const submenuData = submenus[selectedMenu];

            if (submenuData) {
                submenu.innerHTML = submenuData.items.map(item => `<li>${item}</li>`).join("");
                submenu.classList.add("active");
                menuList.classList.add("hidden");

                menuOverlay.style.backgroundColor = submenuData.color;
                if (!submenu.querySelector(".back-btn")) {
                    let backBtn = document.createElement("button");
                    backBtn.innerHTML = "← Back";
                    backBtn.classList.add("back-btn");
                    backBtn.onclick = function () {
                        submenu.classList.remove("active");
                        menuList.classList.remove("hidden");
                        menuOverlay.style.backgroundColor = "#4B4F61"; 
                    };
                    submenu.prepend(backBtn);
                }
            } else {
                submenu.classList.remove("active");
                menuOverlay.style.backgroundColor = "#4B4F61"; 
            }
        });
    });

    window.addEventListener("resize", function () {
        if (menuOverlay.classList.contains("active")) {
            const activeItem = document.querySelector(".menulist-a.active");
            if (activeItem) {
                const selectedMenu = activeItem.getAttribute("data-menu");
                if (submenus[selectedMenu]) {
                    menuOverlay.style.backgroundColor = submenus[selectedMenu].color;
                }
            }
        }
    });
});
