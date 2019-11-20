i = 0;
imagesArray = new Array();
imagesArray[0] = new Image();
imagesArray[1] = new Image();
imagesArray[2] = new Image();
imagesArray[3] = new Image();
imagesArray[4] = new Image();
imagesArray[5] = new Image();
imagesArray[6] = new Image();
imagesArray[7] = new Image();
imagesArray[8] = new Image();
imagesArray[9] = new Image();
imagesArray[10] = new Image();
imagesArray[11] = new Image();
imagesArray[12] = new Image();
imagesArray[13] = new Image();
imagesArray[14] = new Image();
imagesArray[15] = new Image();
imagesArray[16] = new Image();
imagesArray[17] = new Image();
imagesArray[18] = new Image();

imagesArray[0].src = "images/frame_0_delay-0.04s.png";
imagesArray[1].src = "images/frame_4_delay-0.04s.png";
imagesArray[2].src = "images/frame_8_delay-0.04s.png";
imagesArray[3].src = "images/frame_12_delay-0.04s.png";
imagesArray[4].src = "images/frame_16_delay-0.04s.png";
imagesArray[5].src = "images/frame_20_delay-0.04s.png";
imagesArray[6].src = "images/frame_24_delay-0.04s.png";
imagesArray[7].src = "images/frame_28_delay-0.04s.png";
imagesArray[8].src = "images/frame_32_delay-0.04s.png";
imagesArray[9].src = "images/frame_36_delay-0.04s.png";
imagesArray[10].src = "images/frame_40_delay-0.04s.png";
imagesArray[11].src = "images/frame_44_delay-0.04s.png";
imagesArray[12].src = "images/frame_48_delay-0.04s.png";
imagesArray[13].src = "images/frame_52_delay-0.04s.png";
imagesArray[14].src = "images/frame_56_delay-0.04s.png";
imagesArray[15].src = "images/frame_60_delay-0.04s.png";
imagesArray[16].src = "images/frame_64_delay-0.04s.png";
imagesArray[17].src = "images/frame_68_delay-0.04s.png";
imagesArray[18].src = "images/frame_71_delay-0.04s.png";

function animateImage() {
  document.images[0].src = imagesArray[i].src;
  i++;
  if (i > 18)
    i = 0;
  setTimeout("animateImage()", 100);
}

function positiv(obj) {
  var num = 0;
  var mas = String(obj.t1.value).split(" ");
  for (var i = 0; i < mas.length; i++) {
    if (Number(mas[i]) > 0) {
      num++;
    }
  }
  obj.t2.value = num;
}


function elemmax(obj) {
  var mas = String(obj.p1.value).split(" ");
  var max = Number(mas[0]);
  for (var i = 1; i < mas.length; i++) {
    if (max < Number(mas[i])) {
      max = Number(mas[i]);
    }
  }
  obj.p2.value = max;
}