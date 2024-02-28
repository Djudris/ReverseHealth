/*Size is  set in pixels... supports being written as: '250px' */
let magnifierSize = 200;

/*How many times magnification of image on page.*/
let magnification = 3;

function magnifier() {

    this.magnifyImg = function(ptr, magnification, magnifierSize) {
        let $pointer;
        if (typeof ptr == "string") {
            $pointer = $(ptr);
        } else if (typeof ptr == "object") {
            $pointer = ptr;
        }

        if(!($pointer.is('img'))){
            alert('Object must be image.');
            return false;
        }

        magnification = +(magnification);

        $pointer.hover(function() {
            $(this).css('cursor', 'none');
            $('.magnify').show();
            //Setting some variables for later use
            let width = $(this).width();
            let height = $(this).height();
            let src = $(this).attr('src');
            let imagePos = $(this).offset();
            let image = $(this);

            if (magnifierSize == undefined) {
                magnifierSize = '150px';
            }

            $('.magnify').css({
                'background-size': width * magnification + 'px ' + height * magnification + "px",
                'background-image': 'url("' + src + '")',
                'width': magnifierSize,
                'height': magnifierSize
            });

            //Setting a few more...
            let magnifyOffset = +($('.magnify').width() / 2);
            let rightSide = +(imagePos.left + $(this).width());
            let bottomSide = +(imagePos.top + $(this).height());

            $(document).mousemove(function(e) {
                if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
                    $('.magnify').hide();
                    $(document).unbind('mousemove');
                }
                let backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
                $('.magnify').css({
                    'left': e.pageX - magnifyOffset,
                    'top': e.pageY - magnifyOffset,
                    'background-position': backgroundPos
                });
            });
        }, function() {

        });
    };

    this.init = function() {
        $('body').prepend('<div class="magnify"></div>');
    }

    return this.init();
}

$(document).ready(function() {
    let magnify = new magnifier();

    // Now apply the magnify effect to each image
    $("#single-product-carousel .magnifiedImg").each(function() {
        magnify.magnifyImg($(this), magnification, magnifierSize);
    });
});
