



// const popup = document.getElementById('header');

// window.addEventListener('scroll', function() {

//   $('header').text(window.pageYOffset);
// })



// thank you for visiting 
$(function() {
  $('.inview').on('inview', function (event, isInview) {
    if(isInview) {
      $(this).addClass('is-show');
    }
  });

});

// navbarの色を変える
// https://snownotes.org/how-to-change-header-color-when-scroll-page/#javascript
$(window).on('scroll', function() {
  if($(this).scrollTop() > 650) {
    $('.navbar-brand').addClass('change-color');
    $('.bar1, .bar2, .bar3').addClass('change-color');
    $('.nav-item a').addClass('change-color');
  } else {
    $('.navbar-brand').removeClass('change-color');
    $('.bar1, .bar2, .bar3').removeClass('change-color');
    $('.nav-item a').removeClass('change-color');


}
})



// hamburger

$(function() {
  $('.bar1, .bar2, .bar3').removeClass('open');


  $('.navbar button').click(function() {
    $('.bar1, .bar2, .bar3').toggleClass('open');
  }) 
});






// 画像スライドイン

$(function() {
  $('.from-left').on('inview', function(event, isInview) {
    if (isInview) {
      $(this).addClass('fadeInLeft');
    } else {
      $(this).removeClass('fadeInLeft');
      $(this).css('opacity', 0);
    }
  });

  $('.from-right').on('inview', function(event, isInview) {
    if (isInview) {
      $(this).addClass('fadeInRight');
    } else {
      $(this).removeClass('fadeInRight');
      $(this).css('opacity', 0);
    }
  });

})





// ------------------------------------------


//scroolされたら黒になるようにしたい
// const scrollHead = document.querySelector('.greet');

// window.addEventListener('scroll', function(event) {

//     scrollHead.getElementbyClass('greet').style.backgroundColor = 'black';
// })

//functionの短縮形
// scrollHead.addEventListener('click', e => {
//     scrollHead.style.color = 'black';
// })


//Web Dev Blog
// const buttons = document.querySelectorAll("[data-modal-id]");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const modalId = button.dataset.modalId
//     const modal = document.getElementById(modalId)
//     modal.classList.add("Hi");
//   });
// });

//Web Dev Learn DOM Manipulation In 18 Minutes

// const iAm = document.getElementById('iam');

// console.log(iAm.dataset.testDaa);

// //dataを新しくする
// iAm.dataset.newName = 'Hiiiii'

// iAm.classList.toggle('hi22222', true)



// bounceがvewに入ったら

$(function() {
  $('.trigger').on('inview', function (event, isInview) {
    if(isInview) {
      $(this).addClass('animate animated animate bounce delay-1');

      $(this).removeClass('trigger');
    } else {
      $(this).removeClass('animate animated animate bounce delay-1');
    }
  });

});


//無限ループスライダー
$(function(){
  $('.slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定 無限ループさせたいので0
    speed: 8000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});




// const popup = document.getElementById('header');

// window.addEventListener('scroll', function() {

//   $('header').text(window.pageYOffset);
// })









//scroolされたら黒になるようにしたい
// const scrollHead = document.querySelector('.greet');

// window.addEventListener('scroll', function(event) {

//     scrollHead.getElementbyClass('greet').style.backgroundColor = 'black';
// })

//functionの短縮形
// scrollHead.addEventListener('click', e => {
//     scrollHead.style.color = 'black';
// })


//Web Dev Blog
// const buttons = document.querySelectorAll("[data-modal-id]");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const modalId = button.dataset.modalId
//     const modal = document.getElementById(modalId)
//     modal.classList.add("Hi");
//   });
// });

//Web Dev Learn DOM Manipulation In 18 Minutes

// const iAm = document.getElementById('iam');

// console.log(iAm.dataset.testDaa);

// //dataを新しくする
// iAm.dataset.newName = 'Hiiiii'

// iAm.classList.toggle('hi22222', true)


//無限ループスライダー
$(function(){
  $('.slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定 無限ループさせたいので0
    speed: 8000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});

// const makeServer = new Promise 