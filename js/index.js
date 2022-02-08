
  const mediaQuery = window.matchMedia('(max-width: 768px)');
 
  // ページが読み込まれた時に実行
  handle(mediaQuery);
   
  // ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
  mediaQuery.addListener(handle);
   
  function handle(mm) {
    if (mm.matches) {
      // ウィンドウサイズ768px以下のときの処理
      
    } else {
      // それ以外の処理
      $('.donerblc').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>'
    });
    }
  }