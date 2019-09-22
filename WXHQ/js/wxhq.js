
var imagesList = ['images/1HAO.jpg',
                 'images/2HAO.jpg',
                 'images/3HAO.jpg',
                 'images/4HAO.jpg',
                 'images/5HAO.jpg',
                 'images/CHEQI.jpg',
                 'images/QIANZIQI.jpg',
                 'images/ZHUOQI.jpg',
                 'images/yingxiongjinianbei.jpg',
                 'images/CHINA.jpg',
                 'images/MOON.jpg',
                 'images/greatwall.jpg',
                 ];

var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = "url("+ imagesList[9] + ")";
body.style.margin = '0 0';
body.style.backgroundRepeat = "repeat";
body.style.backgroundAttachment = "fixed";
body.style.backgroundPosition = "top center";
body.style.backgroundColor = "#000";
body.style.backgroundSize = "contain";

var Box = document.getElementById("Box");
Box.style.width = window.innerWidth;
Box.style.height = window.innerHeight;
Box.style.backgroundImage = "url("+ imagesList[9] + ")";
Box.style.margin = '0 0';
Box.style.backgroundRepeat = "repeat";
Box.style.backgroundAttachment = "fixed";
Box.style.backgroundPosition = "top center";
Box.style.backgroundColor = "#000";
Box.style.backgroundSize = "contain";
Box.style.overflow = 'hidden';
Box.style.zoom = 1;

var MBox = document.createElement("div");
MBox.className = "MBox";
MBox.style.backgroundImage = "url("+ imagesList[0] + ")";
MBox.style.margin = '0 0';
MBox.style.backgroundRepeat = "repeat";
MBox.style.backgroundAttachment = "fixed";
MBox.style.backgroundPosition = "0px 0px";
MBox.style.backgroundColor = "#000";
MBox.style.position = 'absolute';
MBox.style.zIndex = 9999;
Box.appendChild(MBox);

var LBox = document.createElement("div");
var imageL = new Image();
imageL.src = imagesList[8];
LBox.className = "LBox";
LBox.style.backgroundImage = "url("+ imagesList[8] + ")";
LBox.style.margin = '0 0';
LBox.style.backgroundRepeat = "repeat";
LBox.style.backgroundAttachment = "fixed";
LBox.style.backgroundColor = "#000";
LBox.style.position = 'absolute';
LBox.style.overflow = 'hidden';
LBox.style.top = 0;
LBox.style.left = 0;
Box.appendChild(LBox);

var RBox = document.createElement("div");
var imageR = new Image();
imageR.src = imagesList[8];
RBox.className = "RBox";
RBox.style.backgroundImage = "url("+ imagesList[8] + ")";
RBox.style.margin = '0 0';
RBox.style.backgroundRepeat = "repeat";
RBox.style.backgroundAttachment = "fixed";
RBox.style.backgroundColor = "#000";
RBox.style.position = 'absolute';
RBox.style.overflow = 'hidden';
RBox.style.top = 0;
RBox.style.right = 0;
Box.appendChild(RBox);

var TBox = document.createElement("div");
var imageT = new Image();
imageT.src = imagesList[10];
TBox.className = "TBox";
TBox.style.backgroundImage = "url("+ imagesList[10] + ")";
TBox.style.margin = '0 0';
TBox.style.backgroundRepeat = "repeat";
TBox.style.backgroundAttachment = "fixed";
TBox.style.backgroundColor = "#000";
TBox.style.position = 'absolute';
TBox.style.overflow = 'hidden';
TBox.style.top = 0;
TBox.style.left = 0;
TBox.style.backgroundPosition = "top center";
Box.appendChild(TBox);

var BBox = document.createElement("div");
var imageB = new Image();
imageB.src = imagesList[11];
BBox.className = "BBox";
BBox.style.backgroundImage = "url("+ imagesList[11] + ")";
BBox.style.margin = '0 0';
BBox.style.backgroundRepeat = "repeat";
BBox.style.backgroundAttachment = "fixed";
BBox.style.backgroundColor = "#000";
BBox.style.position = 'absolute';
BBox.style.overflow = 'hidden';
BBox.style.bottom = 0;
BBox.style.left = 0;
BBox.style.backgroundPosition = "bottom center";
Box.appendChild(BBox);


window.onload = function() {
    createData();
};

function createData() {
    var div_width = window.innerWidth,
        div_height = window.innerHeight;
    if (div_width*2/3 <= div_height) {
        width = div_width;
        height = parseInt(div_height/(div_width*2/3))*(div_width*2/3);
    } else {
        height = div_height;
        width = parseInt(div_width/(height*3/2))*(height*3/2);
    }
    var left = parseInt((div_width - width) / 2),
        top = parseInt((div_height - height) / 2);
    if (height == div_height) {
        imgWrapWidth = height*3/2;
        imgWrapHeight = height;
    } else {
        imgWrapWidth = width;
        imgWrapHeight = width*2/3;
    }
    MBox.style.width = width + 'px';
    MBox.style.height = height + 'px';
    MBox.style.top = top + 'px';
    MBox.style.left = left + 'px';
    MBox.style.backgroundSize = imgWrapWidth + "px " + imgWrapHeight + "px";
    MBox.style.backgroundPosition = left + "px " + top + "px";

    LBox.style.width = left + 'px';
    LBox.style.height = div_height + 'px';
    LBox.style.backgroundSize = "auto " + div_height + "px";
    realHeight = imageL.height;
    realWidth = imageL.width;
    LBox.style.backgroundPosition = -((div_height/realHeight)*realWidth-left)/2 + "px";

    RBox.style.width = left + 'px';
    RBox.style.height = div_height + 'px';
    RBox.style.backgroundSize = "auto " + div_height + "px";
    realHeight = imageR.height;
    realWidth = imageR.width;
    RBox.style.backgroundPosition = div_width-(left/2)-(((div_height/realHeight)*realWidth)/2) + "px";

    TBox.style.width = div_width + 'px';
    TBox.style.height = top + 'px';
    TBox.style.backgroundSize = "auto " + top + "px";

    BBox.style.width = div_width + 'px';
    BBox.style.height = top + 'px';
    BBox.style.backgroundSize = "auto " + top + "px";

    return ;
}


window.onresize = function() {
    createData();
};
