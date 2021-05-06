canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundimage="racing.jpg";
car1image="car1(1).png";
car2image="download.png";
function add(){
    background_img=new Image();
background_img.onload=uploadbackground;
background_img.src=backgroundimage;
car1image_img=new Image();
car2image_img=new Image();
car1image_img.onload=uploadcar1;
car2image_img.onload=uploadcar2;
car1image_img=car1image;
car2image_img=car2image;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
car1x=10;
car1y=10;
car2x=10;
car2y=20;
function uploadcar1(){
    ctx.drawImage(car1image_img,car1x,car1y,100,100);
}
    function uploadcar2(){
        ctx.drawImage(car2image_img,car2x,car2y,100,100);
}