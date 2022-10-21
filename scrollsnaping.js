<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .top-news {
      
    }
    .top-news__inner{
      display: flex;
      
    }
    .top-news__item {
      width: 250px;
    }
    .post-item__thumb {
      display: block;
      opacity: 1;
      -webkit-transition: opacity .3s ease-out;
      transition: opacity .3s ease-out;
    }
    .img_16_9 {
      overflow: hidden;
      position: relative;
      padding-bottom: 56.25%;
    }
    .img_16_9 im_ {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .img_responsive {
      display: block;
      max-width: 100%;
      height: auto;
    }
    .top-news__title{
      display: block;
      padding: 10px 5px;
      line-height: 20px;
      font-size: .75em;
      color: #000;
      /* font-family: 'Times New Roman', Times, serif; */
      text-decoration: none;
    }
    @media(min-width: 992px){
      .top-news {
        margin-bottom: 50px;
      }
      .top-news__item {
        width: 20%;
        float: left;
      }
      .top-news__title {
        padding-bottom: 0px;
      }
    } 
    .img_responsive{width:100%; animation:fading 10s infinite}
 @keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
  </style>
</head>
<body>
  <div class="top-news">
    <div class="top-news__inner">
      <div class="top-news__item">
        <a href="https://www.facebook.com/photo?fbid=10217111582940943&set=a.10217111586301027" class="post-item__thumb img_16_9">
          <img class="img_responsive" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/309063863_10217111582380929_1258978957053346955_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=tslYY0Uvkc8AX8FR2zr&tn=rKXPTRjtTlBnsds2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8l81svDBt0yhTK-RwlwcsOXSMLRSGFqsVWDavXODabdg&oe=6357D086" alt="">
        </a>
        <a class="top-news__title" href="https://www.facebook.com/photo?fbid=10217111582940943&set=a.10217111586301027">Vừa kết thúc chuyến Thuỵ Sỹ, tụi tớ lại chuẩn bị cho chuyến Sydney vào tháng 12 này.</a>
      </div>
      <div class="top-news__item">
        <a href="https://www.facebook.com/photo/?fbid=10217105058777843&set=a.10211190133948419" class="post-item__thumb img_16_9">
          <img class="img_responsive" src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/312025154_10217105058737842_8208615088663389485_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7f5W0Fx6P_4AX8lQadM&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-5lzxhnv2vjeGgCXI-zhkLyNjTBzdATEtA3wLpa7H_GA&oe=6356E129" alt="">
        </a>
        <a class="top-news__title" href="https://www.facebook.com/photo/?fbid=10217105058777843&set=a.10211190133948419">Có những thứ chỉ trải nghiệm thật nhiều rồi bất chợt chúng ta mới nhận ra một sự thật nào đó.</a>
      </div>
      <div class="top-news__item">
        <a href="https://www.facebook.com/photo/?fbid=10217053825577045&set=a.3168737276588" class="post-item__thumb img_16_9">
          <img class="img_responsive" src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/311020053_10217053825537044_4320692772904533207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=K390puA-HJIAX9su4d8&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9-oNoURQnG2gTo4NjYfYWOb1SXbF8oK3Hltu1wBFxRIA&oe=6357CFF3" alt="">
        </a>
        <a class="top-news__title" href="https://www.facebook.com/photo/?fbid=10217053825577045&set=a.3168737276588">Bạn sẽ không bao giờ bước một mình! Tớ sẽ luôn bên bạn và cổ vũ cho bạn! Người bạn tốt nhất của tớ Kris Lê</a>
      </div>
      <div class="top-news__item">
        <a href="https://www.facebook.com/photo/?fbid=10216966939924958&set=pcb.10216966979445946" class="post-item__thumb img_16_9">
          <img class="img_responsive" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306531664_10216966983126038_8783649206169867637_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ZxAQhY0m7I4AX9llY0s&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8rO6gfNwE33fIWYIB0bKpgGPSt1q-D6yRQXn1NxGXwjQ&oe=63580220" alt="">
        </a>
        <a class="top-news__title" href="https://www.facebook.com/photo/?fbid=10216966939924958&set=pcb.10216966979445946">at Jungfrau - Top of Europe, Switzerland</a>
      </div>
      <div class="top-news__item">
        <a href="https://www.facebook.com/photo/?fbid=10216943677943423&set=a.3168737276588" class="post-item__thumb img_16_9">
          <img class="img_responsive"  src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/305361205_10216943677903422_4218627976708933650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_-Q_vmxdIrcAX_q8NtE&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_ZvtWkO1zxmGKdqPzdL2VDXsknV0e52F4moJ99wonT2w&oe=6357AD79" alt="">
        </a>
        <a class="top-news__title" href="https://www.facebook.com/photo/?fbid=10216943677943423&set=a.3168737276588">Thuyền to thì sóng lớn. Càng cao danh vọng càng dày gian nan !
          Cuộc sống có nhiều lựa chọn. Tôi chọn thách thức!
          -Kris Lê-</a>
      </div>
    </div>
  </div>
  <script>
    var img_responsive = 0;
    Carouel ();
    function Carouel (){
      
      var x = document.getElementsByClassName("img_responsive");
      var b =  x.length;
      for(var i = 0; i < b; i++){
          x[i].style.display = "none";
      }
      img_responsive++;
      if (img_responsive > b) {img_responsive = 1};
      x[img_responsive - 1].style.display = "block";
      setTimeout(Carouel, 7000);
    }
  </script>
</body>
</html>
