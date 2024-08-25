
//  small devise menu hide and show start

const offcanvaes = document.querySelectorAll(".offcanva")
const offcanvaTragger = document.querySelectorAll(".offcanvaTragger")
const offcanvaClose = document.querySelectorAll(".offcanvaClose")
const offcanva_overlay = document.querySelectorAll(".offcanva-overlay")

offcanvaTragger.forEach((item) => {
    item.addEventListener("click", () => {
        offcanvaes.forEach((offcanva) => {
            offcanva.classList.add("right-0")
            offcanva.classList.remove("-right-full")
        })
        offcanva_overlay.forEach((overlay) => {
            overlay.classList.remove("invisible")
            overlay.classList.add("visible")
        })
    })
})

offcanvaClose.forEach((item) => {
    item.addEventListener("click", () => {
        offcanvaes.forEach((offcanva) => {
            offcanva.classList.add("-right-full")
            offcanva.classList.remove("right-0")
        })
        offcanva_overlay.forEach((overlay) => {
            overlay.classList.remove("visible")
            overlay.classList.add("invisible")
        })
    })
})

//  small devise menu hide and show end


//  DropDown menu start
const dropdown = document.querySelectorAll(".dropdown")
const dropdownItem = document.querySelectorAll(".dropdown-item")
dropdown.forEach((e, i) => {
    e.addEventListener("click", () => {
        dropdownItem.forEach((_, index) => {
            if (i === index) {
                if (dropdownItem[index].classList.contains("opacity-100")) {
                    dropdownItem[index].classList.add("opacity-0", "invisible", "max-h-0")
                    dropdownItem[index].classList.remove("opacity-100", "visible", "max-h-[450px]")
                }
                else {
                    dropdownItem[index].classList.remove("opacity-0", "invisible", "max-h-0")
                    dropdownItem[index].classList.add("opacity-100", "visible", "max-h-[450px]")
                }
            }
            else {
                dropdownItem[index].classList.add("opacity-0", "invisible", "max-h-0")
                dropdownItem[index].classList.remove("opacity-100", "visible", "max-h-[450px]")
            }
        })
    })
})
//  dropdown menu end

// --------- sticky header on scroll start
const header = document.getElementById("header")
const header_container = document.getElementById("header-container")
const top_header = document.getElementById("top-header")

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos && currentScrollPos > header_container.clientHeight) {
        header.style.top = top_header ? `-${top_header.clientHeight}px` : '0px';
        header.classList.add("header-pinned")
    } else {
        header.style.top = `-${header_container.clientHeight}px`;
        header.classList.remove("header-pinned")
    }
    prevScrollpos = currentScrollPos;
}
// --------- sticky header on scroll end

// --------- search filed toggle start
const searchBtn = document.querySelector(".search-btn")
const searchForm = document.querySelector(".search-form")
const searchClose = document.querySelector(".search-close")

searchBtn.addEventListener("click", () => {
    searchForm.classList.remove("opacity-0", "invisible")
    searchForm.classList.add("opacity-100", "visible", 'z-20')
})
searchClose.addEventListener("click", () => {
    searchForm.classList.remove("opacity-100", "visible", 'z-20')
    searchForm.classList.add("opacity-0", "invisible")
})
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchForm.classList.remove("opacity-100", "visible", 'z-20')
    }
})
// --------- search filed toggle end


//--------- start according 
const accordingItem = document.querySelectorAll(".according-item")
const accordingBtn = document.querySelectorAll(".according-btn")
accordingBtn.forEach((item, index) => {
    item.addEventListener("click", ((event) => {
        accordingItem.forEach(item => {
            item.setAttribute('data-open', 'false')
            item.classList.remove("active-accor")
        });
        event.currentTarget.parentNode.setAttribute('data-open', 'true')
        item.classList.add("active-accor")


    }))
})
//--------- according end 

//  istop gallery start
const target_tab = document.querySelectorAll(".target-tab")
const target_card = document.querySelectorAll(".target-card")

const diaplayCard = (list_attribute) => {

    target_card.forEach((item) => {
        const card_attribute = item.getAttribute("data-target")

        if (card_attribute === list_attribute) {
            item.classList.remove("absolute", "invisible", "translate-y-10", "opacity-0")
            item.classList.add("relative", "visible", "translate-y-0", "opacity-100")
        }
        else {
            item.classList.add("absolute", "invisible", "translate-y-10", "opacity-0")
            item.classList.remove("relative", "visible", "translate-y-0", "opacity-100")
        }
    })
}
const target = (callback) => {
    target_tab.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            // remove item active class name and add this calssname in new item
            target_tab.forEach((i) => {
                console.log(i.classList)
                i.classList.remove("active-tab")
            })
            e.target.classList.add("active-tab")

            callback(e.target.getAttribute("data-target"))
        })
    })
}
target(diaplayCard)

//  istop gallery end


// scroll on counter start
const counters = document.querySelectorAll('.counter');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(handleIntersect, options);

counters.forEach(counter => {
    observer.observe(counter);
});

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function startCounting(element) {
    const target = +element.getAttribute('data-target');
    const increment = target / 200;

    let count = 0;
    const updateCounter = () => {
        count += increment;
        if (count < target) {
            element.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    };

    element.classList.add('visible');
    updateCounter();
}
// scroll on counter end


// scroll top top on button click start
const scroll_up = document.getElementById("scroll-up")
scroll_up.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})
// scroll top top on button click end



const testimonial = new Swiper('.testimonial-swiper', {
    autoplay: {
        delay: 5000,
      },
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        1280: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        }
    },
    // pagination: {
    //     el: ".testimonial-pagination",
    //     clickable: true
    // },
});

const partner_swiper = new Swiper('.partner-swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 3,
        },
        10240: {
            slidesPerView: 4,
        },
        1290: {
            slidesPerView: 5,
        }
    },
});
const service_swiper = new Swiper('.service-swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
        el: ".service-pagination",
        clickable: true
    },
    breakpoints: {
        5320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        10240: {
            slidesPerView: 3,
        },
        1290: {
            slidesPerView: 3,
        }
    },
});



new WOW().init();

