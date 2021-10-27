var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '(＃°Д°) 停止响应了!';
        clearTimeout(titleTime);
    } else {
        document.title = '(*´∇｀*) 骗你的啦~~';
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});
