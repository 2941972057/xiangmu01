/**
 * Created by dllo on 17/7/29.
 */
var oNav_list = document.getElementsByTagName("li");
var oGoTop = document.getElementById("goTop");
var oTheHead = document.getElementById("theHead");
//导航栏
for (var i = 0; i < oNav_list.length; i++) {
    oNav_list[i].onclick = function () {
        for (var j = 0; j < oNav_list.length; j++) {
            oNav_list[j].setAttribute("class", "");
        }
        this.setAttribute("class", "active");
    }
}
//置顶
window.onscroll = function () {
    if (document.body.scrollTop >= 1000) {
        oGoTop.style.display = "block";
    } else {
        oGoTop.style.display = "none";
    }
}
oGoTop.onclick = function () {
    document.body.scrollTop = 0;
}
//导航栏显示
document.onmousewheel = function (ev) {
    var ev = ev || window.event;
    if (ev.wheelDelta > 0) {
        linearMove(oTheHead, "top", 10, 0);
    } else {
        if (document.body.scrollTop >= 50) {
            linearMove(oTheHead, "top", -10, -100);
        }
    }
}

function linearMove(obj, attr, speed, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var attrValue = parseInt(getStyle(obj, attr));
        if (Math.abs(iTarget - attrValue) <= Math.abs(speed)) {
            obj.style[attr] = iTarget + "px";
            clearInterval(obj.timer);
        } else {
            obj.style[attr] = attrValue + speed + "px";
        }
    }, 30);
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj)[attr];
    }
}
