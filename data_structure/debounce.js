/** 
 * 函数的防抖
 * 思路说明：执行函数设置延时，当没达到延时的时间，清除
 * 定时器重新设置延时，超过延时时间执行函数
 * 总结：函数连续触发多次，只有最后一次生效
*/

function debounce(callback, delay=300) {
    var t = null;
    return function() {
        clearTimeout(t);    // 清除上一次定时器
        t = setTimeout(callback, delay);
    }
}

window.onscroll = debounce(function() {
    console.log('函数调用了一次');
}, 300);

/** 
 * 函数的节流
 * 思想说明：执行函数设置一个固定时间，当函数再次触发时
 * 间没有超过固定时间不执行，超过固定时间执行函数，重置固定时间
 * 总结：多次触发函数，在固定的时间间隔内只触发一次
*/

function throttle(callback, duration) {
    var lasttime = new Date().getTime();
    return function() {
        var now = new Date().getTime();
        if(now - lasttime > duration) {
            callback();
            lasttime = now
        }
    }
}

window.onscroll = throttle(function() {
    console.log('函数调用了一次');
} ,500);

