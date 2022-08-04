function TopBar__init(){
  //   $() = 괄호 내부를 찾는다
    $(window).scroll(function(){
      let scrollTop = $(window).scrollTop();
  // window전체(html)을 찾아서 scroll의 Top으로부터의 위치.
      if(scrollTop == 0){
        //top-bar라는클래스를 찾는다
        $('.top-bar').removeClass("hover");
      }
      else{
        $('.top-bar').addClass("hover");
      }
    })
    
  }
  TopBar__init();