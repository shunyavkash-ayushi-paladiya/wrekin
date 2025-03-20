
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuItems = document.querySelectorAll(".menulist-a");
    const submenu = document.getElementById("submenu");
    const menuList = document.querySelector(".menu-list");

    const submenus = {
        wrekin: {
            items: [
                { name: "Homepage", link: "index.html" },
                { name: "Admissions", link: "admissionpages.html" },
                { name: "International Admissions", link: "internationaladmissions.html" },
                { name: "Academic", link: "academic.html" },
                { name: "Wrekin Life", link: "wrekinlife.html" },
                { name: "Year 7-8", link: "wrekinyear7-8.html" },
                { name: "Sixth Form", link: "wrekinsixthform.html" },
                { name: "Co-Curricular", link: "wrekincocurricular.html" }
            ],
            color: "#002A4D"
        },
        oldhall: {
            items: [
                { name: "Homepage", link: "index.html" },
                { name: "Admissions", link: "admissionpages.html" },
                { name: "Old Hall Life", link: "wrekinsixthform.html" },
                { name: "Academic", link: "academic.html" },
                { name: "Our Community", link: "wrekinourcommunity.html" },
                { name: "News & Events", link: "wrekinews.html" },
                { name: "Policies", link: "wrekininternational.html" },
                { name: "Get in touch", link: "contact.html" }
            ],
            color: "#7A2534"
        },
    };

    menuBtn.addEventListener("click", function () {
        menuOverlay.classList.add("active");
        menuOverlay.style.backgroundColor = "#4B4F61";
    });

    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        submenu.classList.remove("active");
        menuList.classList.remove("hidden");
        menuOverlay.style.backgroundColor = "#4B4F61";
    });

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            menuItems.forEach((menu) => menu.classList.remove("active"));
            this.classList.add("active");

            const selectedMenu = this.getAttribute("data-menu");
            const submenuData = submenus[selectedMenu];

            if (submenuData) {
                submenu.innerHTML = submenuData.items
                    .map(item => `<li><a href="${item.link}">${item.name}</a></li>`)
                    .join("");

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



window.addEventListener("scroll", function () {
    let headers = document.querySelectorAll(".header, .headers, .headerr");

    headers.forEach(header => {
        if (header) { 
            if (window.scrollY >= 40) {
                header.classList.add("scrolled");
                header.style.transition = "background-color 0.3s ease, padding 0.3s ease";
                header.style.padding = "10px 0";

                if (header.classList.contains("header")) {
                    header.style.backgroundColor = "#002A4D";
                } else if (header.classList.contains("headers")) {
                    header.style.backgroundColor = "white";
                } else if (header.classList.contains("headerr")) {
                    header.style.backgroundColor = "#002A4D";
                }
            } else {
                header.classList.remove("scrolled");
                header.style.padding = "31px 0";

                if (header.classList.contains("header")) {
                    header.style.backgroundColor = "transparent";
                } else if (header.classList.contains("headers")) {
                    header.style.backgroundColor = "transparent";
                } else if (header.classList.contains("headerr")) {
                    header.style.backgroundColor = "transparent";
                }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let swiperElement = document.querySelector(".mySwipers");

    if (swiperElement) {
        var swiper = new Swiper(".mySwipers", {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swipers_arrow_a.next",  
                prevEl: ".swipers_arrow_a.prev",  
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                375: { slidesPerView: 1.5 },
                425: { slidesPerView: 1.5 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3.5 }
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
            const prevArrow = document.querySelector(".swipers_arrow_a.prev");
            const nextArrow = document.querySelector(".swipers_arrow_a.next");

            if (prevArrow && nextArrow) {
                prevArrow.classList.toggle("disabled", swiper.isBeginning);
                nextArrow.classList.toggle("disabled", swiper.isEnd);
            }
        }
    }
});


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
    spaceBetween: 10, 
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

let swipers_sliders = document.querySelectorAll(".swipers_sliders");
if(swipers_sliders.length){
var swiper = new Swiper(".swipers_sliders", {
    pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: true,
    loop: true, 
    centeredSlides: true,
    },
    slidesPerView: 2.5,
    spaceBetween: 10, 
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

let sliding_sliders = document.querySelectorAll(".sliding_sliders");
if(sliding_sliders.length){
var swiper = new Swiper(".sliding_sliders", {
    pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: true,
    loop: true, 
    centeredSlides: true,
    },
    slidesPerView: 2.5,
    spaceBetween: 10, 
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


document.addEventListener("DOMContentLoaded", function () {
    let swiperElement = document.querySelector(".my_Swipers");

    if (swiperElement) {
        var swiper = new Swiper(".my_Swipers", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swipers-academic-arrow-a.next",
                prevEl: ".swipers-academic-arrow-a.prev",
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
            let prevArrow = document.querySelector(".swipers-academic-arrow-a.prev");
            let nextArrow = document.querySelector(".swipers-academic-arrow-a.next");

            if (prevArrow && nextArrow) {
                prevArrow.classList.toggle("disabled", swiper.isBeginning);
                nextArrow.classList.toggle("disabled", swiper.isEnd);
            }
        }
    }
});


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
    

    document.addEventListener("DOMContentLoaded", function () {
        let eventSwipers = document.querySelectorAll(".event_Swiper");
    
        if (eventSwipers.length) {
            eventSwipers.forEach((swiperElement) => {
                let swiper = new Swiper(swiperElement, {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    breakpoints: {
                        320: { slidesPerView: 1.1 },
                        375: { slidesPerView: 1.3 },
                        425: { slidesPerView: 1.5 },
                        575: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 2.3 },
                        1200: { slidesPerView: 2.3 }
                    },
                    navigation: {
                        nextEl: ".event_arrow_a.next",
                        prevEl: ".event_arrow_a.prev",
                    },
                    on: {
                        init: function () {
                            setTimeout(() => updateArrowState(this), 100);
                        },
                        slideChange: function () {
                            updateArrowState(this);
                        }
                    }
                });
    
                function updateArrowState(swiper) {
                    let prevArrow = document.querySelector(".event_arrow_a.prev");
                    let nextArrow = document.querySelector(".event_arrow_a.next");
    
                    if (prevArrow && nextArrow) {
                        prevArrow.classList.toggle("disabled", swiper.isBeginning);
                        nextArrow.classList.toggle("disabled", swiper.isEnd);
                    }
                }
            });
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        let SchoolSwipers = document.querySelectorAll(".School_Swiper");
    
        if (SchoolSwipers.length) {
            SchoolSwipers.forEach((swiperElement) => {
                let swiper = new Swiper(swiperElement, {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    breakpoints: {
                        320: { slidesPerView: 1.1 },
                        375: { slidesPerView: 1.3 },
                        425: { slidesPerView: 1.5 },
                        575: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 2.3 },
                        1200: { slidesPerView: 2.3 }
                    },
                    navigation: {
                        nextEl: ".School_arrow_a.next",
                        prevEl: ".School_arrow_a.prev",
                    },
                    on: {
                        init: function () {
                            setTimeout(() => updateArrowState(this), 100);
                        },
                        slideChange: function () {
                            updateArrowState(this);
                        }
                    }
                });
    
                function updateArrowState(swiper) {
                    let prevArrow = document.querySelector(".School_arrow_a.prev");
                    let nextArrow = document.querySelector(".School_arrow_a.next");
    
                    if (prevArrow && nextArrow) {
                        prevArrow.classList.toggle("disabled", swiper.isBeginning);
                        nextArrow.classList.toggle("disabled", swiper.isEnd);
                    }
                }
            });
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            let oversocialSwipers = document.querySelectorAll(".oversocial_Swiper");
    
            if (oversocialSwipers.length) {
                oversocialSwipers.forEach((swiperElement) => {
                    let swiper = new Swiper(swiperElement, {
                        slidesPerView: 2.3,
                        spaceBetween: 20,
                        breakpoints: {
                            320: { slidesPerView: 1.1 },
                            375: { slidesPerView: 1.3 },
                            425: { slidesPerView: 1.3 },
                            575: { slidesPerView: 2.8 },
                            768: { slidesPerView: 3.2 },
                            1024: { slidesPerView: 3.8 },
                            1200: { slidesPerView: 3.8 }
                        },
                        navigation: {
                            nextEl: ".oversocial_arrow_a.next",
                            prevEl: ".oversocial_arrow_a.prev",
                        },
                        on: {
                            init: function () {
                                setTimeout(() => updateArrowState(this), 100);
                            },
                            slideChange: function () {
                                updateArrowState(this);
                            }
                        }
                    });
    
                    function updateArrowState(swiper) {
                        let prevArrow = document.querySelector(".oversocial_arrow_a.prev");
                        let nextArrow = document.querySelector(".oversocial_arrow_a.next");
    
                        if (prevArrow && nextArrow) {
                            prevArrow.classList.toggle("disabled", swiper.isBeginning);
                            nextArrow.classList.toggle("disabled", swiper.isEnd);
                        }
                    }
                });
            }
        }, 500); 
    });
    

    document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll(".touch-tabs");
        const forms = document.querySelectorAll(".form-right-sections");
    
        if (tabs.length === 0 || forms.length === 0) {
            return;
        }
    
        tabs.forEach(tab => {
            tab.addEventListener("click", function (e) {
                e.preventDefault();
    
                const target = this.getAttribute("data-target");
                const targetForm = document.getElementById(target);
    
                if (!targetForm) {
                    console.error(`No element found with id: ${target}`);
                    return;
                }
    
                tabs.forEach(t => t.classList.remove("active"));
                forms.forEach(form => form.classList.remove("active"));
    
                this.classList.add("active");
                targetForm.classList.add("active");
            });
        });
        if (tabs[0] && forms[0]) {
            tabs[0].classList.add("active");
            forms[0].classList.add("active");
        }
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        let holiday_Swiper = document.querySelectorAll(".holiday_Swiper");
    
        if (holiday_Swiper.length) {
            holiday_Swiper.forEach((swiperElement) => {
                let swiper = new Swiper(swiperElement, {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    breakpoints: {
                        320: { slidesPerView: 1.1 },
                        375: { slidesPerView: 1.3 },
                        425: { slidesPerView: 1.5 },
                        575: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 2.3 },
                        1200: { slidesPerView: 2.3 }
                    },
                    navigation: {
                        nextEl: ".holiday_arrow_a.next",
                        prevEl: ".holiday_arrow_a.prev",
                    },
                    on: {
                        init: function () {
                            setTimeout(() => updateArrowState(this), 100);
                        },
                        slideChange: function () {
                            updateArrowState(this);
                        }
                    }
                });
    
                function updateArrowState(swiper) {
                    let prevArrow = document.querySelector(".holiday_arrow_a.prev");
                    let nextArrow = document.querySelector(".holiday_arrow_a.next");
    
                    if (prevArrow && nextArrow) {
                        prevArrow.classList.toggle("disabled", swiper.isBeginning);
                        nextArrow.classList.toggle("disabled", swiper.isEnd);
                    }
                }
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("teamModal");
        const modalImage = document.getElementById("modalImage");
        const modalName = document.getElementById("modalName");
        const modalRole = document.getElementById("modalRole");
        const closeModal = document.querySelector(".closes"); // Close button inside modal
        const prevButton = document.getElementById("prevMember");
        const nextButton = document.getElementById("nextMember");
        const teamCards = document.querySelectorAll(".tabs-card"); // Ensure correct class
        let members = [];
        let currentIndex = 0;
    
        // Ensure teamCards exist
        if (teamCards.length === 0) {
            console.error();
            return;
        }
    
        // Populate members array and add click event to each card
        teamCards.forEach((card, index) => {
            const image = card.getAttribute("data-image");
            const name = card.getAttribute("data-name");
            const role = card.getAttribute("data-role");
    
            if (!image || !name || !role) {
                console.error(` ${index}`);
                return;
            }
    
            members.push({ image, name, role });
    
            card.addEventListener("click", function () {
                currentIndex = index;
                showModal(currentIndex);
            });
        });
    
        function showModal(index) {
            if (!members[index]) {
                console.error(`Invalid index: ${index}`);
                return;
            }
    
            const member = members[index];
            modalImage.src = member.image;
            modalName.textContent = member.name;
            modalRole.textContent = member.role;
            modal.style.display = "flex";
            $("body").css('overflow', "hidden");
            updateButtonState();
        }
    
        function updateButtonState() {
            if (!prevButton || !nextButton) {
                console.error("Navigation buttons not found.");
                return;
            }
    
            prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
            prevButton.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
    
            nextButton.style.opacity = currentIndex === members.length - 1 ? "0.5" : "1";
            nextButton.style.pointerEvents = currentIndex === members.length - 1 ? "none" : "auto";
        }
    
        // Ensure buttons exist before adding event listeners
        if (prevButton) {
            prevButton.addEventListener("click", function () {
                if (currentIndex > 0) {
                    currentIndex--;
                    showModal(currentIndex);
                }
            });
        } else {
            console.error("prevMember button not found.");
        }
    
        if (nextButton) {
            nextButton.addEventListener("click", function () {
                if (currentIndex < members.length - 1) {
                    currentIndex++;
                    showModal(currentIndex);
                }
            });
        } else {
            console.error("nextMember button not found.");
        }
    
        if (closeModal) {
            closeModal.addEventListener("click", function () {
                modal.style.display = "none";
                $("body").css('overflow', "auto");
            });
        } else {
            console.error("Close button not found.");
        }
    
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        let swiperElement = document.querySelector(".my_Swipers");
    
        if (swiperElement) {
            var swiper = new Swiper(".my_Swipers", {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".memorial-academic-arrow-a.next",
                    prevEl: ".memorial-academic-arrow-a.prev",
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
                let prevArrow = document.querySelector(".memorial-academic-arrow-a.prev");
                let nextArrow = document.querySelector(".memorial-academic-arrow-a.next");
    
                if (prevArrow && nextArrow) {
                    prevArrow.classList.toggle("disabled", swiper.isBeginning);
                    nextArrow.classList.toggle("disabled", swiper.isEnd);
                }
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".venu-left-a");
    
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
    
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
    
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    
                    document.querySelectorAll(".venu-left-a").forEach(anchor => {
                        anchor.classList.remove("active-link");
                    });
    
                    this.classList.add("active-link");
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
       
        const openModalBtn = document.getElementById('openModal');
        const myModal = document.getElementById('myModal');
        const closeModalBtn = myModal?.querySelector('.close'); 
    
        if (openModalBtn && myModal && closeModalBtn) {
            openModalBtn.addEventListener('click', function() {
                myModal.style.display = 'flex';
                $("body").css('overflow', "hidden");
            });
            closeModalBtn.addEventListener('click', function() {
                myModal.style.display = 'none';
                $("body").css('overflow', "auto");
            });
        }
    
        
        const openReportsBtn = document.getElementById('openModals');
        const reportModal = document.getElementById('report-modals'); 
        const closeReportsBtn = reportModal?.querySelector('.close-icon'); 
    
        if (openReportsBtn && reportModal && closeReportsBtn) {
            openReportsBtn.addEventListener('click', function() {
                reportModal.style.display = 'flex';
                $("body").css('overflow', "hidden");
            });
            closeReportsBtn.addEventListener('click', function() {
                reportModal.style.display = 'none';
                $("body").css('overflow', "auto");
            });
        }

        const openModalButton = document.getElementById('opensmodels'); 
        const reportPopup = document.getElementById('moreinfo'); 
        const closeModalButton = reportPopup?.querySelector('.close-icons'); 

        if (openModalButton && reportPopup && closeModalButton) {
        openModalButton.addEventListener('click', function() {
        reportPopup.style.display = 'flex';
        $("body").css('overflow', "hidden");
       });
        closeModalButton.addEventListener('click', function() {
        reportPopup.style.display = 'none';
        $("body").css('overflow', "auto");
      });

        }

    });

    setTimeout(() => {
        document.body.classList.remove("loader-active");
      }, 3000); 
      
      