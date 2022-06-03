window.addEventListener('DOMContentLoaded', function () {
    (function () {

        const stage1 = $('#oneScroller');


        stage1.on('wheel', function (e) {
            let v = e.originalEvent.deltaY

            if (v < 0) {
                $('#oneScroller').removeClass('active')
                $('#gnb .gnb_bg').removeClass('on')

            } else {
                $('#oneScroller').addClass('active')
                $('#gnb .gnb_bg').addClass('on')
            }


        })

    })();
    $(".scroller").niceScroll({
        cursorcolor:"#777",
        cursorwidth:5,
        scrollspeed:40,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"#c1c1c1",
        cursorborder:"none",
        autohidemode:false,
        boxzoom:false,
        smoothscroll:true,
        zindex:99999
    });

    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0,
        $flag =  $("#flag");



    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 32);
        $yp += (($mouseY - $yp) / 32);
        $flag.css({left: ($xp-$flag.width()*0.5) + 'px', top: ($yp -$flag.height()*0.5) + 'px'});
    }, 1);


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop === 0){
            $('#oneScroller').removeClass('active')
            $('#gnb .gnb_bg').removeClass('on')
        }

        if(scrollTop >= 0){
            $('#section01 .img_01').addClass('on')
        }
        if(scrollTop >= 0){
            $('#section01 .img_02').addClass('on')
        }
        if(scrollTop >= 860){
            $('#section01 .img_03').addClass('on')
        }
        if(scrollTop >= 1100){
            $('#section01 .img_04').addClass('on')
        }
        if(scrollTop >= 1400){
            $('#section01 .img_05').addClass('on')
        }
        if(scrollTop >= 2160){
            $('#section01 .img_06').addClass('on')
        }
        if(scrollTop >= 2160){
            $('#section01 .img_06').addClass('on')
        }
        if(scrollTop >= 2580){
            $('#section01 .img_07').addClass('on')
        }
        if(scrollTop >= 3150){
            $('#section01 .img_08').addClass('on')
        }
        if(scrollTop >= 3750){
            $('#section01 .img_09').addClass('on')
        }
        if(scrollTop >= 4560){
            $('#section01 .img_10').addClass('on')
        }
        if(scrollTop >= 4990){
            $('#section01 .img_11').addClass('on')
        }
        if(scrollTop >= 6300){
            $('#section02 .trigger_this_02 .fix_this_2 .page01').addClass('on')
        }
        if(scrollTop >= 7000){
            $('#section02 .trigger_this_02 .fix_this_2 .page02 .h02_left_contents').addClass('on')
        }
        if(scrollTop >= 7200){
            $('#section02 .trigger_this_02 .fix_this_2 .page02 .h02_right_contents').addClass('on')
        }
        if(scrollTop >= 7600){
            $('#section02 .trigger_this_02 .fix_this_2 .page03 .h03_left_contents').addClass('on')
        }
        if(scrollTop >= 7800){
            $('#section02 .trigger_this_02 .fix_this_2 .page03 .h03_text').addClass('on')
        }
        if(scrollTop >= 10900){
            $('#section02 .trigger_this_02 .fix_this_2 .page07 .h07_left').addClass('on')
        }
        if(scrollTop >= 11200){
            $('#section02 .trigger_this_02 .fix_this_2 .page07 .h07_right').addClass('on')
        }
        if(scrollTop >= 11800){
            $('#section02 .trigger_this_02 .fix_this_2 .page08 .h08_center_text').addClass('on')
        }
        if(scrollTop >= 11900){
            $('#section02 .trigger_this_02 .fix_this_2 .page08 .h08_text').addClass('on')
        }
        if(scrollTop >= 19640){
            $('#section02 .trigger_this_02 .fix_this_2 .page013 .h09_circle').addClass('on')
        }
        if(scrollTop >= 19400){
            $('#section02 .trigger_this_02 .fix_this_2 .page013').addClass('on')
        }
        if(scrollTop >= 21800){
            $('#section02 .trigger_this_02 .fix_this_2 .page014').addClass('on')
        }
        if(scrollTop >= 24000){
            $('#section02 .trigger_this_02 .fix_this_2 .page014 .startPoint').addClass('on')
        }
        if(scrollTop >= 23000){
            $('#section02 .trigger_this_02 .fix_this_2 .page014 .last_left_text').addClass('on')
        }
        if(scrollTop >= 24000){
            $('#section02 .trigger_this_02 .fix_this_2 .page014 .last_right_text').addClass('on')
        }

        if(scrollTop >= 0 && scrollTop <= 10799){
            $('#gnb').removeClass('on2')
        }
        if(scrollTop >= 10800 && scrollTop <= 14200){
            $('#gnb').addClass('on2')
        }
        if(scrollTop >= 14201){
            $('#gnb').removeClass('on2')
        }




    });


    /*  slide,click event section */

    $(".main_00").slick({
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $(), //prev
        nextArrow: $(), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 1200, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    })


    gsap.to('.fix_this_1', {
        scrollTrigger: {
            trigger: ".trigger_this_01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('.fix_this_2', {
        x:-innerWidth*14.35,
        scrollTrigger: {
            trigger: ".trigger_this_02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
            onLeaveBack: () => {
                $('#gnb .gnb_bg').addClass('on')
            },
            onEnter:()=>{
              $('#gnb .gnb_bg').removeClass('on')
            },
        }
    });


    $("#container").on("mousewheel", function (event, delta) {

        if (delta > 0) {  //마우스 휠을 올렸을때
            $('.h02_circle').css('transform',`rotate(-15deg)`)
        } else if (delta < 0) {//마우스 휠을 내렸을때
            $('.h02_circle').css('transform',`rotate(15deg)`)
        }
        if (delta > 0) {  //마우스 휠을 올렸을때
            $('.h08_pulitzer_img').css('transform',`rotate(-15deg)`)
        } else if (delta < 0) {//마우스 휠을 내렸을때
            $('.h08_pulitzer_img').css('transform',`rotate(15deg)`)
        }

    });



    $('#mega .mm_text > div').mouseenter(function () {
        $('.mm_text > div').removeClass('on')
        $('.mm_line > div').removeClass('on')
        $('.mm_img > div').removeClass('on')
        let v = $('.mm_text > div').index(this)

        $('.mm_text > div').eq(v).addClass('on')
        $('.mm_line > div').eq(v).addClass('on')
        $('.mm_img > div').eq(v).addClass('on')

    }).mouseleave(function () {
        $('.mm_text > div').removeClass('on')
        $('.mm_line > div').removeClass('on')
        $('.mm_img > div').removeClass('on')
    })


    $('.gnb_menu').click(function () {
        $('.gnb_menu').toggleClass('on')
        $('#mega').toggleClass('on')
        $('.gnb_bg').toggleClass('off')

    })








    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: ".page05_bg", //기준
        start: "135% 100%", //기준점, 브라우저
        // end: () => "+=" + 2600,
        end: "160% 100%",//기준점, 브라우저
        scrub: 1,
        horizontal: true,
    });
          //('선택자',{움직임(최종모습)},딜레이(0~1))
    sc02.to(".h05_center_text01",{opacity:1},0);
    sc02.to(".h05_center_text02",{opacity:1},0.1);
    sc02.to(".h05_center_text03",{opacity:1},0.3);
    sc02.to(".h05_center_text04",{opacity:1},0.4);
    sc02.to(".h05_center_text05",{opacity:1},0.5);
    sc02.to(".h05_center_text06",{opacity:1},0.6);
    sc02.to(".h05_center_text07",{opacity:1},0.7);
    sc02.to(".h05_center_text08",{opacity:1},0.8);
    sc02.to(".h05_center_text09",{opacity:1},0.8);
    sc02.to(".h05_center_text10",{opacity:1},1);



    $('.page010 .swiper-wrapper > div').mouseenter(function () {

        $('.page010 .h10_left_img .h10_img > div').removeClass('on')

        let v = $('.page010 .swiper-wrapper > div').index(this)

        $('.page010 .h10_left_img .h10_img > div').eq(v).addClass('on')

    })


    $('.swiper').mouseenter(function () {
        $('#flag > div').fadeIn(1000)
    }).mouseleave(function () {
        $('#flag > div').fadeOut(1000)
    })


    $('.pop_close').click(function () {
        $('.pop').fadeOut(1000)
    })

    $('.img_01').click(function () {
        $('#pop01').fadeIn(1000)
        $('#pop01 .pop01_line').addClass('on')
    })

    $('.img_02').click(function () {
        $('#pop02').fadeIn(1000)
        $('#pop02 .pop02_line').addClass('on')
    })

    $('.img_03').click(function () {
        $('#pop03').fadeIn(1000)
        $('#pop03 .pop03_line').addClass('on')
    })

    $('.img_04').click(function () {
        $('#pop04').fadeIn(1000)
        $('#pop04 .pop04_line').addClass('on')
    })

    $('.img_05').click(function () {
        $('#pop05').fadeIn(1000)
        $('#pop05 .pop05_line').addClass('on')
    })

    $('.img_06').click(function () {
        $('#pop06').fadeIn(1000)
        $('#pop06 .pop06_line').addClass('on')
    })

    $('.img_07').click(function () {
        $('#pop07').fadeIn(1000)
        $('#pop07 .pop07_line').addClass('on')
    })

    $('.img_08').click(function () {
        $('#pop08').fadeIn(1000)
        $('#pop08 .pop08_line').addClass('on')
    })

    $('.img_09').click(function () {
        $('#pop09').fadeIn(1000)
        $('#pop09 .pop09_line').addClass('on')
    })

    $('.img_10').click(function () {
        $('#pop10').fadeIn(1000)
        $('#pop10 .pop10_line').addClass('on')
    })

    $('.img_11').click(function () {
        $('#pop11').fadeIn(1000)
        $('#pop11 .pop11_line').addClass('on')
    })

    $('.h10_text_01').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_02').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_03').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_04').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_05').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_06').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_07').click(function () {
        $('#pop12').fadeIn(1000)
    })

    $('.h10_text_08').click(function () {
        $('#pop12').fadeIn(1000)
    })













})


