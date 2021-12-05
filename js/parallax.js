        var background_image_parallax = function ($object, multiplier) {
            multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
            multiplier = 1 - multiplier;
            var $doc = $(document);
            $object.css({ "background-attatchment": "fixed" });
            $(window).scroll(function () {
                var from_top = $doc.scrollTop(),
                    bg_css = 'center ' + (multiplier * from_top - 200) + 'px';
                $object.css({ "background-position": bg_css });
            });
        };

        /**
         * detect IE
         * returns version of IE or false, if browser is not Internet Explorer
         */
        function detectIE() {
            var ua = window.navigator.userAgent;

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            // var edge = ua.indexOf('Edge/');
            // if (edge > 0) {
            //     // Edge (IE 12+) => return version number
            //     return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            // }

            // other browser
            return false;
        }

        $(document).ready(function () {

            // Detect IE
            if (detectIE()) {
                alert('Please use the latest version of Chrome, Firefox, or Edge for best browsing experience.');
            }

            $('select').formSelect();
            // Parallax image background
            background_image_parallax($(".tm-parallax"), 0.40);

            // Darken image when its radio button is selected
            $(".tm-radio-group-1").click(function () {
                $('.tm-radio-group-1').parent().siblings("img").removeClass("darken");
                $(this).parent().siblings("img").addClass("darken");
            });

            $(".tm-radio-group-2").click(function () {
                $('.tm-radio-group-2').parent().siblings("img").removeClass("darken");
                $(this).parent().siblings("img").addClass("darken");
            });

            $(".tm-checkbox").click(function () {
                $(this).parent().siblings("img").toggleClass("darken");
            })
        });