// $(function() {


//     $('body').scrollspy({
//         target: '#navbarNav',
//         offset: 140
//       });


//     $('.navbar button').on('click', function() {
//         $('.navbar').addClass("navbar-scrolled");
//     });

//     $('.navbar .nav-link').on('click', function () {
//         $('.navbar-collapse').removeClass("show");
//     });

//     $(window).on("scroll", function() {

//         var onScroll = $(this).scrollTop();

//         if( onScroll > 1) {
//             $(".navbar").addClass("navbar-scrolled");
//         }
//         else {
//             $(".navbar").removeClass("navbar-scrolled");
//         }

//     });


// });

export function onMouseClick() {
    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            // this.classList.add('visually-hidden');
            var w = window.pageYOffset, // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }
        }, false);
    }
}


export function fixHeader() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        myFunction()
    };

    // Get the header
    var header = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // const scrollButton = document.querySelector('.scroll-button-part');

    const scrollButton = document.getElementById('mouse');
    console.log(scrollButton.classList)

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("navbar-scrolled");
        } else {
            header.classList.remove("navbar-scrolled");
        }
    }

}


// window.onscroll = function () {
//     scrollButton.innerHTML = '';    
// }

export function hideMouseIcon() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.scroll-button-part').fadeOut();
        } else {
            $('.scroll-button-part').fadeIn();
        }
    })
}

