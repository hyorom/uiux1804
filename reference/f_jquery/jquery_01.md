# jQuery

**자바스크립트?**: 객체지향 언어, 웹언어 뿐아니라, 다양한 곳에서 사용되고있는 미래형

**jquery?**: 자바스크립트 라이브러리

**라이브러리?** : 사용하기 어려운 부분들을 다소 쉽게 사용 할 수 있도록 만들어진 기능들의 집합
(음식만들때의 조미료), 대표: jQuery, reactJs, VueJs

**프레임워크?** : 다소 복잡한 기능들 단순하게 정리한것(모듈화), 기능이 매우 제한적, 명령어가 제약
(일종의 퍼즐처럼 정해진 규격으로만 처리가능), 대표: angularJs, emberJs, handlebarJs

---

## Setting

1.  **CDN** : http://unpkg.com/jquery
2. **직접 다운받아 사용:** http://code.jquery.com
3. **설치해서 사용** : **npm**(yarn)기능을 이용해서 설치 -반드시 [nodejs](http://nodejs.org) 를 설치



```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>---</title>
    </head>
    <body>
        <script src="jquery.min.js"></script>
        <script src="jquery-ui.min.js"></script>
        <script>
            (function($){
                // jquery 코드 입력
            })(jQuery);
        </script>
    </body>
</html>
```



---

## 사용 코드

### 선택자

**선택자란?** : html상의 다양한 요소와 속성 및 내용을 선택하는 것

- 기본 형태:  `$('선택자')`  
  (단, window, document, 선택자 자체를 지칭하는 것(this)에는 `' '`붙이지 않는다)
- 기본적인 선택자 형태는 **CSS**와 동일
  ( `$('div')`  ,  `$('ul>li>a')` , `$('.file a>span')`)
- **메소드** 형태의 선택자
  - 자식선택자 : `$('div').children('선택자');`
    - 자식의 자식의 자식: `$('div').children('선택자').children('선택').children('선택자');`
  - 자손선택자: `$('div').find('선택자');`
  - 인접형제(+): `$('div').next('선택자');`
  - 동생들(~): `$('div').nextAll('선택자');`
  - 이전형제선택: `$('div').prev('선택자');`
  - 이전형제전부선택: `$('div').prevAll('선택자');`
  - 자신을 제외한 형제:  `$('div').siblings('선택자');`
  - 자신을 기준으로 부모:  `$('div').parent('선택자');`
    - 부모의 부모의 부모를선택:  `$('div').parent('선택자').parent('선택자').parent('선택자');`
  - 자신의 상위조상(어딘가): `$('div').parentUntil('선택자');`
  - 순서를 나타내는 선택자:
    - css의 순서값: `$('ul>li:nth-child(2)');`,  `$('ul>li:nth(2)');`,  `$('li:first');`,  `$('li:last')`
      `$('li').first();`, `$('li').last();`
    - js의 순서값:  `$('ul>li:eq(1)');`, `$('ul>li').eq(1);`
    - 주의사항: **eq()**는  순서를 주어주는것, **index()** 순서를 찾아오는것
  - 이벤트에 따라 선택한 그 자체: `$(this)`
  - 브라우저 자체: `$(window)` 
  - 브라우저의 화면: `$(document)`

---

### 메소드1

- **css()** :  

  - 선언: `$('div').css({color:'#333'});`
  - 가져오는: `$('div').css('color');`
- **animate()** : css()메소드의 기능 동일하게 수행, 애니메이션 효과를 담을 수 있다.
  단, css()메소드의 모든 기능을 전부 수행하지 않는다, css에서 transition 같은 애니메이션 속성이존재할경우 멈춤현상이 생김

  - 사용요령: $('div').animate({속성:'속성값'}, 시간, 반응형태);
  - 시간과, [반응형태](https://easings.net/ko)의 경우는 생략이 가능
  - jQuery기능에서 animate메소드뿐아니라, 애니메이션효과가 처리된다면, 
    해당기능 메소드앞에 `stop() `메소드를 삽입
- **attr()** : attribute의 약자 속성의 상태를 변경하는 기능

  - 수정 : `$('img').attr({src:'사용할 이미지', alt:'사용이미지 설명'});`
  - 가져오기: `$('img').attr('src');`
  - attr()은 속성을 주거나, 변경, 또는 가져오는 처리이며, 삭제하려면 **removeAttr()**
- **removeAttr()** : 주어진 속성을 삭제 `$('a').removeAttr('href');`
- **html()** : html을 생성 `$('div').html('<a href="#">link</a>');`

  - 단, 새로운 요소를 추가로 삽입할 수는 없기때문에, 한번에 생성처리해야한다!
- **remove()** : 선택요소 삭제
- **text()** : 선택된 요소내부에 글자를 삽입, html() 동일하게 추가적인 텍스트는 삽입할 수 없다.
- **empty()** : 선택요소는 남고, 내부의 모든것들은 삭제
- **wrap()** : 선택된 요소의 감싸는 요소(태그)를 생성하는 기능
- **append()/ appendTo()** :  요소를 **내부의 뒤에 삽입**하는 기능

  - 선택자.append( 요소 );   선택자내부의 뒤에 요소를 삽입
  - 선택자.appendTo( 요소 );  요소내부의 뒤에 선택자를 삽입
- **prepend() / prependTo()** : 요소를 **내부의 앞에 삽입**하는 기능

  - 선택자.preppend( 요소 );   선택자내부의 앞에 요소를 삽입
  - 선택자.prendTo( 요소 );   요소내부의 앞에 선택자를 삽입

> append와  prepend는 선택자의 내부의 앞과 뒤에 생성하는 기능
> 생성을 요구시에는 요소의 모양그대로( <li></li> )사용,
> 요소(태그)의 모양 그대로 사용하지않고  처리하면 이동의 의미를 가짐

- **before() / after()** : 
  선택되어진 요소의 형제요소로 이전( before() ), 
  이후( after() )로 생성 또는 이동 하는 기능

- **val()**





---

* 메소드: 

  * 함수의 일종으로 다른 선택자나 이외의 형태와 연결하여 사용된다.(행동을 의미하는 기능)
  * 기본형태는 연결하기위해 `.`을 사용하고, 
  * 메소드의 이름과함께 뒤에 `( )`를 사용, 
  * 이때사용되는 `( )` 내용물이 담길수도 있고 아닐 수도 있다.
  * 내용물이 속성과 그 값을 만들면 (객체) `{ }`를 삽입하여 처리한다.
    (예:  `$('a').css({color:'#aaa', fontSize:'1rem'});`)
  * 객체의 형태에서 2이상의 속성을 사용할경우 `, `로 구분
  * 속성의 값을 나타날때에는 `' '`를 사용( `''`, `" "` )

* **tip**: 대체 `;`는 언제 쓰는것인가?

  - 변수를 선언하고 끝날때
  - 변수값이 변경될때의 끝에
  - 하나의 기능이 끝날때(메소드 종료)

  ```js
  var a = 0;
  a = 10;
  $('div').css({'color':"#333"});
  ```

  - if, for, function구문이 끝날때에는 `;` 을 사용하지 않는다.

  ```js
  if( 조건 ){
      //참의 경우
  } else {
      // 거짓
  }  // ;사용안함
  
  
  for(최초의 값; 조건; 증감연산){
      // 반복 구문
  } // ; 사용안함
  
  function Fn(){
      //함수 내용
  } // ;사용안함
  
  var FF = function(){
      // 함수의 이름을 변수명으로 처리
  }; // ;사용 함
  
  // ;사용은 천체 코드가 한줄로 변했을경우를 고려해보면 쉽게 알수 있다.
  ```

  - `[ ]`, `{ }` 끝에는 `;`사용









