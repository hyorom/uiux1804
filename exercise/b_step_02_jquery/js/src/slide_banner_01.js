// slide_banner_01.js
(function($) {

  // indicator 선택자를 변수로 처리
  var banner     = $('.banner');
  var bannerUl   = banner.children('ul');
  var banLi      = bannerUl.children('li');
  // banner_wrap 내부 div 선택자를 변수로 처리
  var bannerWrap = $('.banner_wrap');
  var bannerIn   = bannerWrap.children('div');
//  -------------------------------------------------

  // banLi 클릭하면,
    // 선택되지 않은 요소에는 클래스 이름을 제거
    // 해당 요소(선택된 요소)에 클래스이름을 부여('active')
    // 선택된요소의 순서값( index() ) 파악
    // 광고배너의 클래스 이름을 제거
    // 선택요소와 동일한 위치의 광고배너 클래스이름을 부여('active')

//  ----------------------------------------------
  // banLi 클릭(이벤트)하면,
  banLi.click(function(event){
    event.preventDefault();
    // 해당 요소(선택된 요소)에 클래스이름을 부여('active')
    $(this).addClass('active');
    // 선택된 요소의 다른 형제 요소에는 클래스 이름을 제거
    $(this).siblings('li').removeClass('active');
    //  ====
    var i = $(this).index();
    console.log(i); //검증:순서값 파악
    // 광고배너의 클래스 이름을 제거
    bannerIn.removeClass('active');
    // 선택요소와 동일한 순서의 광고배너 클래스이름을 부여('active')
    bannerIn.eq(i).addClass('active');
  });


})(jQuery);