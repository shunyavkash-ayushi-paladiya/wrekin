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

let mySwipers = document.querySelectorAll(".mySwipers");
if(mySwipers.length){
    var swiper = new Swiper('.mySwipers', {
        slidesPerView: 4,
        spaceBetween: 30, 
        // centeredSlides: true, 
        // loop: true, 
        pagination: {
            // el: '.swiper-pagination',
            // clickable: true,
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
}

let mySwiper = document.querySelectorAll(".mySwiper");
if(mySwiper.length){
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
}
  
let mySwiper_s = document.querySelectorAll(".mySwiper_s");
if(mySwiper_s.length){
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
}
  

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sticky_left_anchor");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

                document.querySelectorAll(".sticky_left_anchor").forEach(anchor => {
                    anchor.classList.remove("active-link");
                });

                this.classList.add("active-link");
            }
        });
    });
});


let my_Swipers = document.querySelectorAll(".my_Swipers");
if(my_Swipers.length){
    var swiper = new Swiper('.my_Swipers', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swipers-academic-arrow-a.next',
            prevEl: '.swipers-academic-arrow-a.prev',
        },
        on: {
            slideChange: function () {
                updateArrowState(swiper);
            }
        }
    });
    
    function updateArrowState(swiper) {
        document.querySelector('.prev').classList.toggle('disabled', swiper.isBeginning);
        document.querySelector('.next').classList.toggle('disabled', swiper.isEnd);
    }
    updateArrowState(swiper);
}



const accItems = document.querySelectorAll(".accordion__item");
accItems.forEach(item => {
    item.addEventListener("click", function () {
        accItems.forEach(i => i !== item && i.classList.remove("accordion__item--active"));
        item.classList.toggle("accordion__item--active");
    });
});

let mySwiperss = document.querySelectorAll(".mySwiperss");
if(mySwiperss.length){
    var swiper = new Swiper('.mySwiperss', {
        slidesPerView: 2.3,
        spaceBetween: 10,
        breakpoints: {
            320: { 
                slidesPerView: 1.3,
            },
            375: { 
                slidesPerView: 1.3,
            },
            425: { 
                slidesPerView: 1.5,
            },
            575: { 
                slidesPerView: 1.5,
            },
            768: { 
                slidesPerView: 2.3,
            },
            1024: { 
                slidesPerView: 2.3,
            },
            1200: { 
                slidesPerView: 2.3,
            }
        },
        navigation: {
            nextEl: '.department-arrow-a.next',
            prevEl: '.department-arrow-a.prev',
        },
        on: {
            init: function () {
                updateArrowState(this);
            },
            slideChange: function () {
                updateArrowState(this);
            }
        }
    });

    function updateArrowState(swiper) {
        let prevArrow = document.querySelector('.department-arrow-a.prev');
        let nextArrow = document.querySelector('.department-arrow-a.next');

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
};



let my_Swiper = document.querySelectorAll(".my_Swiper");
if(my_Swiper.length){
        var swiper = new Swiper(".my_Swiper", {
            scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            clickable:true,
            },
            slidesPerView: 2.3,
            spaceBetween: 10,
            breakpoints: {
                320: { 
                    slidesPerView: 1.2,
                },
                375: { 
                    slidesPerView: 1.2,
                },
                425: { 
                    slidesPerView: 1.5,
                },
                575: { 
                    slidesPerView: 1.5,
                },
                768: { 
                    slidesPerView: 2.3,
                },
                1024: { 
                    slidesPerView: 2.3,
                },
                1200: { 
                    slidesPerView: 3.3,
                }
            },
        });
    };


    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".tabs-top-section-a");
        const cards = document.querySelectorAll(".tabs-card");
        
        function filterCards(category) {
            cards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none"; 
                }
            });
    
            if (category !== "all") {
                let visibleCards = document.querySelectorAll(".tabs-card[style='display: flex;']");
                visibleCards.forEach((card, index) => {
                    if (index >= 3) card.style.display = "none"; 
                });
            }
        }
    
        buttons.forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                buttons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
                filterCards(this.getAttribute("data-filter"));
            });
        });
    
        filterCards("all");
    });
    

