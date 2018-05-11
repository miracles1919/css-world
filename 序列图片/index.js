/**
 * 最简单做法
 */

var img = document.getElementById('test')
var playBtn = document.getElementById('play')
var pauseBtn = document.getElementById('pause')
var stopBtn = document.getElementById('stop')
var i = 1, imgLen = 205
var timer = null

var play = function () {
    timer = setInterval(function () {
        i++
        if (i > imgLen) {
            i = 1
        }
        img.src = './img/' + i + '.jpg'
    }, 100)
}

var pause = function () {
    if (timer) {
        clearInterval(timer)
    }
}

playBtn.onclick = play
pauseBtn.onclick = pause
stopBtn.onclick = function () {
    pause()
    i = 1
    img.src = './img/' + i + '.jpg'
}