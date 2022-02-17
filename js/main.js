//CONTADOR DE NÚMEROS

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


//HEADER SROLL

var oS = 0;

$(document).scroll(() => {
    var sT = $(document).scrollTop();
    var sY = window.scrollY;

    if (sT == 0) {
        $('header').removeClass('_re')
        $(".niv-tip").toggleAttr('hide');
    } else {
        $('header').addClass('_re')
        $(".niv-tip").toggleAttr('hide');
    }

    if (sT !== 0) {
        $("header").addClass("_hi");
    } else {
        $("header").removeClass("_hi");
    }

    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && oS <= currentScroll) {
        oS = currentScroll;
        nivFollow(false);
    } else {
        $("header").removeClass("_hi");
        nivFollow(true);
        oS = currentScroll;

    }

})

var empty;

(function ($) {
    $.fn.showModal = function () {
        $(this).attr('show', '');

        return this;
    }


    $.fn.hideModal = function () {
        $(this).removeAttr('show');
        return this;
    }

})(jQuery);

$('.modal .close-modal').click(function () {
    $($(this).closest('.modal')).hideModal()
})


$('.modal button.cancel').click(function () {
    $($(this).closest('.modal')).hideModal()
})
// NIV-FADE

$(document).ready(() => {
    $("[niv-fade]:first-child").removeAttr("niv-fade");

    $(".backdrop").animate(
        {
            opacity: 0,
        },
        3000
    );

    var i = 0;
    $(document).scroll(() => {
        $("[niv-fade]").each(function () {
            if (
                $(document).scrollTop() >=
                $(this).closest("div.niv").offset().top -
                ($(window).height() * 3) / 4
            ) {
                $(this).removeAttr("niv-fade");
            }
        });
    })
})





$(document).ready(() => {

    // SET
    $('[niv-follow]').each(function () {
        var min = $(this).attr('niv-follow').split('-')[0];
        var max = $(this).attr('niv-follow').split('-')[1];

        $(this).css('transform', `translateY(${min}px)`);
    })


})



function nivFollow(scrollDirection) {
    $('[niv-follow]').each(function () {
        var min = $(this).attr('niv-follow').split('-')[0];
        var atual = parseInt($(this).css('transform').split(',')[5]);
        var max = $(this).attr('niv-follow').split('-')[1];

        var statementUP = atual > min ? true : false;
        var statementDOWN = atual < max ? true : false;


        if (!scrollDirection) {
            if (statementDOWN) {
                $(this).css('transform', `translateY(${atual + 20}px)`);
            }
        }
        else {
            if (statementUP) {
                $(this).css('transform', `translateY(${atual - 40}px)`);
            }
        }
    })
}
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });



$('form label input[name = "telefone"]').mask("(00) 00000-0000");
$('form label input[name = "expiracao"]').mask("00/0000");
$('form label input[name= "numero"]').mask("0000 0000 0000 0000");

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

console.log("%c👋 Opa, bom dia!\n%cEstá perdido? a estrada é pelo %coutro lado!!\n%cMas já que já está aqui, da uma olhadinha no nosso site\n%chttps://hyp8.com.br ✨", "font-family: consolas;", "font-family: consolas;", "font-family: consolas; font-weight: bold;color: red;", "font-family: consolas;", "font-family: consolas; color:$FF3434; ")



// MODALS

setTimeout(() => {
    $('.modal_box').showModal()
}, 3000);


(function ($) {
    $.fn.toggleAttr = function (attr) {
        if ($(this).attr(attr) == '') {
            $(this).removeAttr(attr)
        } else {
            $(this).attr(attr, '')
        }
        return this;
    }

})(jQuery);

//SETAR CLICKS
var case1 = $('section.hero div.niv div.case.case--1');
var case2 = $('section.hero div.niv div.case.case--2');
var case3 = $('section.hero div.niv div.case.case--3');

var heroButtons = $('section.hero div.niv div.niv-arrows button');
var isHoverButton = false;
var indicator = $('section.hero div.niv div.niv-text .indicator div span');


heroButtons.mouseenter(() => {
    isHoverButton = true;
})
heroButtons.mouseleave(() => {
    isHoverButton = false;
})


function changeHero() {
    defineCase1();

    setInterval(() => {
        if ($(document).scrollTop() !== 0 || isHoverButton) return false;

        if (case1.attr('hide') == "" && case2.attr('hide') == "") {
            //APARECENDO o 3
            defineCase1();


        } else if (case2.attr('hide') == "" && case3.attr('hide') == "") {
            //APARECENDO o 1
            defineCase2();


        } else if (case3.attr('hide') == "" && case1.attr('hide') == "") {
            //APARECENDO o 2
            defineCase3();
        }
    }, 4000)
}

function defineCase1() {
    case1.removeAttr('hide');
    case2.attr('hide', '');
    case3.attr('hide', '');

    indicator.removeAttr('active');
    $(indicator[0]).attr('active', '');



    $(heroButtons[0]).click(() => {
        defineCase2();
    })
    $(heroButtons[1]).click(() => {
        defineCase3();
    })

}

function defineCase2() {
    case1.attr('hide', '');
    case2.removeAttr('hide');
    case3.attr('hide', '');

    indicator.removeAttr('active');
    $(indicator[1]).attr('active', '');


    $(heroButtons[0]).click(() => {
        defineCase3();
    })
    $(heroButtons[1]).click(() => {
        defineCase1();
    })

}

function defineCase3() {
    case1.attr('hide', '');
    case2.attr('hide', '');
    case3.removeAttr('hide');

    indicator.removeAttr('active');
    $(indicator[2]).attr('active', '');


    $(heroButtons[0]).click(() => {
        defineCase1();
    })
    $(heroButtons[1]).click(() => {
        defineCase2();
    })
}

$(document).ready(function () {
    changeHero();


})


