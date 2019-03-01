const morphing = anime({
    targets: ".path",
    d: [
        { value: "M-1.13686838e-13,0 L1257,0 L1257,813.191148 C1176.39936,465.431865 1084.64656,291.552224 981.741603,291.552224 C827.384166,291.552224 754.432955,664.983234 612.721513,664.983234 C471.010071,664.983234 414.008384,406.595574 256.684648,406.595574 C151.802157,406.595574 66.2406078,542.127432 -1.13686838e-13,813.191148 L-1.13686838e-13,0 Z" },
        { value: "M-1.13686838e-13,0 L1257,0 L1257,4.78117097 C1170.65995,4.97691883 1076.03745,5.07479276 973.132491,5.07479276 C818.775054,5.07479276 716.667946,5.07479276 574.956504,5.07479276 C433.245062,5.07479276 428.282433,5.07479276 270.958696,5.07479276 C166.076205,5.07479276 75.7566398,5.07479276 -1.13686838e-13,5.07479276 L-1.13686838e-13,0 Z" }
    ],
    easing: "easeInQuad",
    duration: 1500,
    loop: false,
    autoplay: false
});

myApp = {};


{
    class MorphingBG {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
            this.animate();
        }
        animate() {
            this.DOM.paths.forEach((path) => {
                setTimeout(() => {
                    anime({
                        targets: path,
                        duration: anime.random(3000, 5000),
                        easing: [0.5, 0, 0.5, 1],
                        d: path.getAttribute('pathdata:id'),
                        loop: true,
                        direction: 'alternate'
                    });
                }, anime.random(0, 1000));
            });
        }
    };
    new MorphingBG(document.querySelector('svg.scene'));
};


    $(function(){
        $("button").on("click", () => {
            morphing.restart();
            $("button").addClass("animated bounceOutUp slow");
            $(".about").addClass("animated bounceInUp delay-1s").css("display", "flex");
            setTimeout(() => {
                $(".shape").hide();
            }, 1500);
        });

        $(".aboutButton").on("click", ()=> {
            const position = $(".how").offset().top;
            $("HTML, BODY").animate({ scrollTop: position }, 3000);
        });

        $(".howButton").on("click", () => {
            const position = $(".why").offset().top;
            $("HTML, BODY").animate({ scrollTop: position }, 3000);
        })

        $(".whyButton").on("click", ()=> {
            const position = $(".codeAlong").offset().top;
            $("HTML, BODY").animate({ scrollTop: position }, 3000);
        })


        $(".container1").hover(
            function(){
                myApp.hoverAnimation1 = anime({
                    targets: '.underline1',
                    points: [
                        { value: "232.257813 47.3476562 297 0 275.359375 147.242187 0 10" }
                    ],
                    direction: 'alternate',
                    easing: 'easeInOutQuad',
                    duration: 3000,
                    loop: true
                })

            }, 
            function() {
                myApp.hoverAnimation1.restart();
                myApp.hoverAnimation1.pause();

            }
        )

        $(".container2").hover(
            function () {
                myApp.hoverAnimation2 = anime({
                    targets: '.underline2',
                    points: [
                        { value: "232.257813 47.3476562 297 0 275.359375 147.242187 0 10" }
                    ],
                    direction: 'alternate',
                    easing: 'easeInOutQuad',
                    duration: 3000,
                    loop: true
                })

            },
            function () {
                myApp.hoverAnimation2.restart();
                myApp.hoverAnimation2.pause();

            }
        )

        $(".container3").hover(
            function () {
                myApp.hoverAnimation3 = anime({
                    targets: '.underline3',
                    points: [
                        { value: "232.257813 47.3476562 297 0 275.359375 147.242187 0 10" }
                    ],
                    direction: 'alternate',
                    easing: 'easeInOutQuad',
                    duration: 3000,
                    loop: true
                })

            },
            function () {
                myApp.hoverAnimation3.restart();
                myApp.hoverAnimation3.pause();

            }
        )
    })