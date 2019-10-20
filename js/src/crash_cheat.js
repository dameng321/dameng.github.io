var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
       // $('[rel="icon"]').attr('href', "/images/TEP.ico"); //如果需要图标一起变，那么就将这行取消注释并选择正确的图片路径
        document.title = ' 😉快回来看看 ~';//要显示的信息
        clearTimeout(titleTime);
    }
    else {
        //$('[rel="icon"]').attr('href', "/favicon.ico"); 同上
        document.title = '😍欢迎回来~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});