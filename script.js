  $(document).ready(function () {
    $(".thumbnail").each(function () {
      var thumb = $(this);
      $(this).children().each(function () {
        if ($(this).is("img")) {
          console.log("in here boys");
          var width = $(this).width();
          var height = $(this).height();

          if (width > height) {
            console.log('yo man');
            thumb.width(600);
            thumb.height(400);
          } else if (height > width) {
            thumb.width(300);
            thumb.height(600);
            thumb.css({
              'margin-left': '35%'
            });
          } else {
            thumb.width(600);
            thumb.height(600);

          }
        }

      });

    });
  });