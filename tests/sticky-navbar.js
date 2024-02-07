
;(function() {
    var navbar = $(".dorik-nav-xmbjvp5e");
    var navbarCollapse = $(".dorik-navbar--collapse");
    (function ($, navbar, navbarCollapse) {
    $(document).on("click", "a", function (e) {
        var a = event.target.closest("a");
        var hash = a.hash;
        var stickyNav = $(".sticky-nav");
        if (hash) {
            var baseHref = a.href.match(/(^https?:.+)#/);
            var baseURI = a.baseURI.match(/(^https?:.+)#?/);
            baseHref = baseHref && baseHref[1];
            baseURI = baseURI && baseURI[1];
            if (baseHref && baseURI && baseURI.includes(baseHref)) {
                e.preventDefault();
                const section = $(hash).offset();
                if (!section) return;
                var collapsedHeight =
                    navbarCollapse[0]?.clientHeight || 0;
                var navbarHeight =
                    navbar[0].clientHeight - collapsedHeight;
                var scrollTop = section.top;
                if (stickyNav.length) {
                    scrollTop = scrollTop - navbarHeight;
                } else {
                    scrollTop = scrollTop - collapsedHeight;
                }
                var options = {
                    easing: "linear",
                };
                $("html, body").animate(
                    {
                        scrollTop: scrollTop,
                    },
                    options
                );
            }
        }
    });
})($, navbar, navbarCollapse);
})();

;(function () {
    var navbar = document.querySelector(".dorik-nav-xmbjvp5e");
    (function toggleNav(el) {
    const toggleBtn = el.querySelector(".dorik-navbar--toggle");
    const navlist = toggleBtn.nextElementSibling;
    const isMobileView = window.innerWidth < 768;
    toggleBtn &&
        toggleBtn.addEventListener("click", function (e) {
            const hasShow = navlist?.classList.contains("show");
            if (!hasShow) {
                expend(navlist);
            } else {
                collapse(navlist);
            }
        });
    navlist.addEventListener("click", function (e) {
        if (
            e.target.closest("a") &&
            !e.target.closest(".is-dropdown")
        ) {
            isMobileView && collapse(navlist);
        } else {
            var linkValue = e.target.closest("a").href;
            if (linkValue.startsWith("#")) {
                e.preventDefault();
            }
            const dropdownlist =
                e.target.parentNode?.nextElementSibling;
            const hasShow =
                dropdownlist?.classList.contains("show");

            if (hasShow) {
                collapse(dropdownlist);
            } else {
                expend(dropdownlist);
            }
        }
    });

    let dropdownItems = document.querySelectorAll(
        ".dorik-nav--dropdown"
    );
    dropdownItems.forEach((item) => {
        item?.addEventListener("click", () => {
            collapse(navlist);
            collapse(item);
        });
    });

    function expend(navlist) {
        if (!navlist) return;
        navlist.classList.add("show");
        const height = navlist.clientHeight + "px";
        isMobileView && navlist.classList.add("collapsing");
        setTimeout(() => {
            navlist.style.height = height;
        }, 0);
        setTimeout(() => {
            navlist.style.height = null;
            navlist.classList.remove("collapsing");
        }, 350);
    }
    function collapse(navlist) {
        if (!navlist) return;
        navlist.style.height = navlist.clientHeight + "px";
        isMobileView && navlist.classList.add("collapsing");
        setTimeout(() => {
            navlist.style.height = null;
        }, 0);
        setTimeout(() => {
            navlist.classList.remove("show");
            navlist.classList.remove("collapsing");
        }, 350);
    }
})(navbar);

})();
;(function stickyNav() {
    var navbar = document.querySelector(".dorik-navbar");
    if (navbar) {
        var last_known_scroll_position = 0;
        var ticking = false;

        function scroll(scroll_pos) {
            var parent = navbar.parentNode;
            var classList = parent.classList;
            var upWard = scroll_pos <= 50 && classList.contains("sticky");
            var downWard = scroll_pos > 50 && !classList.contains("sticky");
            if (downWard) {
                var height = parent.clientHeight;
                parent.style.top = "-" + height + "px";
                setTimeout(() => {
                    $("body").css({ paddingTop: height + "px" });
                    parent.classList.add("sticky");
                    if (!navbar.closest(".container-fluid")) {
                        navbar.classList.add("container");
                    }
                    parent.style.top = null;
                }, 0);
            } else if (upWard) {
                $("body").css({ paddingTop: 0 });
                parent.classList.remove("sticky");
                navbar.classList.remove("container");
            }
        }

        document.addEventListener("scroll", function (e) {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function () {
                    scroll(last_known_scroll_position);

                    ticking = false;
                });
                ticking = true;
            }
        });
    }
})();

;(function() {
    var navbar = $(".dorik-nav-o8tvc4uv");
    var navbarCollapse = $(".dorik-navbar--collapse");
    (function ($, navbar, navbarCollapse) {
    $(document).on("click", "a", function (e) {
        var a = event.target.closest("a");
        var hash = a.hash;
        var stickyNav = $(".sticky-nav");
        if (hash) {
            var baseHref = a.href.match(/(^https?:.+)#/);
            var baseURI = a.baseURI.match(/(^https?:.+)#?/);
            baseHref = baseHref && baseHref[1];
            baseURI = baseURI && baseURI[1];
            if (baseHref && baseURI && baseURI.includes(baseHref)) {
                e.preventDefault();
                const section = $(hash).offset();
                if (!section) return;
                var collapsedHeight =
                    navbarCollapse[0]?.clientHeight || 0;
                var navbarHeight =
                    navbar[0].clientHeight - collapsedHeight;
                var scrollTop = section.top;
                if (stickyNav.length) {
                    scrollTop = scrollTop - navbarHeight;
                } else {
                    scrollTop = scrollTop - collapsedHeight;
                }
                var options = {
                    easing: "linear",
                };
                $("html, body").animate(
                    {
                        scrollTop: scrollTop,
                    },
                    options
                );
            }
        }
    });
})($, navbar, navbarCollapse);
})();

;(function () {
    var navbar = document.querySelector(".dorik-nav-o8tvc4uv");
    (function toggleNav(el) {
    const toggleBtn = el.querySelector(".dorik-navbar--toggle");
    const navlist = toggleBtn.nextElementSibling;
    const isMobileView = window.innerWidth < 768;
    toggleBtn &&
        toggleBtn.addEventListener("click", function (e) {
            const hasShow = navlist?.classList.contains("show");
            if (!hasShow) {
                expend(navlist);
            } else {
                collapse(navlist);
            }
        });
    navlist.addEventListener("click", function (e) {
        if (
            e.target.closest("a") &&
            !e.target.closest(".is-dropdown")
        ) {
            isMobileView && collapse(navlist);
        } else {
            var linkValue = e.target.closest("a").href;
            if (linkValue.startsWith("#")) {
                e.preventDefault();
            }
            const dropdownlist =
                e.target.parentNode?.nextElementSibling;
            const hasShow =
                dropdownlist?.classList.contains("show");

            if (hasShow) {
                collapse(dropdownlist);
            } else {
                expend(dropdownlist);
            }
        }
    });

    let dropdownItems = document.querySelectorAll(
        ".dorik-nav--dropdown"
    );
    dropdownItems.forEach((item) => {
        item?.addEventListener("click", () => {
            collapse(navlist);
            collapse(item);
        });
    });

    function expend(navlist) {
        if (!navlist) return;
        navlist.classList.add("show");
        const height = navlist.clientHeight + "px";
        isMobileView && navlist.classList.add("collapsing");
        setTimeout(() => {
            navlist.style.height = height;
        }, 0);
        setTimeout(() => {
            navlist.style.height = null;
            navlist.classList.remove("collapsing");
        }, 350);
    }
    function collapse(navlist) {
        if (!navlist) return;
        navlist.style.height = navlist.clientHeight + "px";
        isMobileView && navlist.classList.add("collapsing");
        setTimeout(() => {
            navlist.style.height = null;
        }, 0);
        setTimeout(() => {
            navlist.classList.remove("show");
            navlist.classList.remove("collapsing");
        }, 350);
    }
})(navbar);

})();
;(function stickyNav() {
    var navbar = document.querySelector(".dorik-navbar");
    if (navbar) {
        var last_known_scroll_position = 0;
        var ticking = false;

        function scroll(scroll_pos) {
            var parent = navbar.parentNode;
            var classList = parent.classList;
            var upWard = scroll_pos <= 50 && classList.contains("sticky");
            var downWard = scroll_pos > 50 && !classList.contains("sticky");
            if (downWard) {
                var height = parent.clientHeight;
                parent.style.top = "-" + height + "px";
                setTimeout(() => {
                    $("body").css({ paddingTop: height + "px" });
                    parent.classList.add("sticky");
                    if (!navbar.closest(".container-fluid")) {
                        navbar.classList.add("container");
                    }
                    parent.style.top = null;
                }, 0);
            } else if (upWard) {
                $("body").css({ paddingTop: 0 });
                parent.classList.remove("sticky");
                navbar.classList.remove("container");
            }
        }

        document.addEventListener("scroll", function (e) {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function () {
                    scroll(last_known_scroll_position);

                    ticking = false;
                });
                ticking = true;
            }
        });
    }
})();

;(function(){
    var element = document.querySelector(".dorik-testimonialSlider-xssefxa0");
    var splideEl = element.querySelector(".splide");
    var splide =  new Splide(splideEl,{"perPage":3,"perMove":1,"height":"","autoplay":true,"gap":"0px","type":"loop","direction":"ltr","rewind":true,"arrows":false,"pagination":false,"breakpoints":{"420":{"perPage":1,"perMove":1},"768":{"perPage":2,"perMove":1}}});
    splide.mount()

    var observElements = document.querySelectorAll(".popup-row");

    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            var isVisible = mutation.target.classList.contains('btn-visible');
            if(isVisible){
                setTimeout( () => splide.refresh(),550)
            }
        });
    });

    observElements.forEach( (element) => {
        var observeEl = element.parentNode.closest("div");
        if(observeEl){
            mutationObserver.observe(observeEl, {
                attributes: true,
                subtree: true,
            });
        }

    })

}())


;(function () {
    const className = ".dorik-moveToTop-rgm56za9";
    const visibilityType = "pixel";
    const pixelPosition = "320";
    const sectionId = "undefined";
    (function moveToTopString(className) {
    let oldScrollY = window.scrollY;
    let isScrollingUp = false;
    const button = document.querySelector(className);
    button.classList.add("back-to-top-btn");
    const targetSection = document.getElementById(sectionId);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        isScrollingUp = oldScrollY > currentScrollY;
        oldScrollY = currentScrollY;

        let targetPosition = Number(pixelPosition) || 0;
        if (visibilityType === "section" && targetSection) {
            const targetSectionOffset =
                targetSection.getBoundingClientRect().top -
                window.innerHeight;
            button.classList.toggle(
                "showBtn",
                targetSectionOffset < -40
            );
            button.classList.toggle(
                "fadeOut",
                isScrollingUp && targetSectionOffset > -40
            );
            return;
        }
        button.classList.toggle(
            "showBtn",
            targetPosition < currentScrollY
        );
        button.classList.toggle(
            "fadeOut",
            isScrollingUp && targetPosition > currentScrollY
        );
    };
    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    if (sectionId || pixelPosition) {
        window.addEventListener("scroll", handleScroll);
        button.addEventListener("click", handleGoTop);
    }
})(".dorik-moveToTop-rgm56za9")
})();