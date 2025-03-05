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


var swiper = new Swiper('.mySwipers', {
    slidesPerView: 4,
    spaceBetween: 30, 
    // centeredSlides: true, 
    // loop: true, 
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swipers_arrow_a:nth-child(2)',  
        prevEl: '.swipers_arrow_a:nth-child(1)', 
    },
    breakpoints: {
        320: { 
            slidesPerView: 1,
        },
        375: { 
            slidesPerView: 1.5,
        },
        425: { 
            slidesPerView: 1.5,
        },
        575: { 
            slidesPerView: 2,
        },
        768: { 
            slidesPerView: 2.5,
        },
        1024: { 
            slidesPerView: 3,
        },
        1200: { 
            slidesPerView: 3.5,
        }
    },
    on: {
        slideChange: function () {
            updateArrowState(swiper);
        }
    }
});


function updateArrowState(swiper) {
    const prevArrow = document.querySelector('.swipers_arrow_a:nth-child(1)');
    const nextArrow = document.querySelector('.swipers_arrow_a:nth-child(2)');

    
    if (swiper.isBeginning) {
        prevArrow.classList.add('disabled');
    } else {
        prevArrow.classList.remove('disabled');
    }

    
    if (swiper.isEnd) {
        nextArrow.classList.add('disabled');
    } else {
        nextArrow.classList.remove('disabled');
    }
}


var swiper = new Swiper(".mySwiper", {
    pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: true,
    loop: true, 
    centeredSlides: true,
    },
    slidesPerView: 2.5,
    spaceBetween: 30, 
    autoplay:{
    delay:2000,
    },
    breakpoints: {
        320: { 
            slidesPerView: 1,
        },
        375: { 
            slidesPerView: 1,
        },
        425: { 
            slidesPerView: 1,
        },
        575: { 
            slidesPerView: 1,
        },
        768: { 
            slidesPerView: 2.5,
        },
        1024: { 
            slidesPerView: 2.5,
        },
        1200: { 
            slidesPerView: 2.5,
        }
    },
  });
  

  var swiper = new Swiper(".mySwiper_s", {
    slidesPerView: 8,
    // spaceBetween: 20,
    freeMode: true,
    loop:true,
    autoplay:{
        delay:500,
        },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".academic-left-a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetId && targetSection) {
                e.preventDefault();

                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

                document.querySelectorAll(".academic-right-section > div").forEach(section => {
                    section.classList.remove("active-section");
                });

                document.querySelectorAll(".academic-left-a").forEach(anchor => {
                    anchor.classList.remove("active-link");
                });

                targetSection.classList.add("active-section");
                this.classList.add("active-link");
            }
        });
    });
});
