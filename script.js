document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('customVideo');
    let isSeeking = false;

    // Double tap on right to move 10 seconds forward
    video.addEventListener('dblclick', function (e) {
        if (e.clientX > window.innerWidth / 2) {
            video.currentTime += 10;
        }
    });

    // Double tap on left to move 5 seconds backward
    video.addEventListener('dblclick', function (e) {
        if (e.clientX < window.innerWidth / 2) {
            video.currentTime -= 5;
        }
    });

    // Double tap in the middle to play/pause the video
    video.addEventListener('dblclick', function (e) {
        if (e.clientX > window.innerWidth / 3 && e.clientX < (2 * window.innerWidth) / 3) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    });

    // Press and hold on the left side to go back at 1x speed
    video.addEventListener('mousedown', function (e) {
        if (e.clientX < window.innerWidth / 3) {
            isSeeking = true;
            video.playbackRate = 1;
        }
    });

    // Press and hold on the right side to go forward at 2x speed
    video.addEventListener('mousedown', function (e) {
        if (e.clientX > (2 * window.innerWidth) / 3) {
            isSeeking = true;
            video.playbackRate = 2;
        }
    });

    // Release the mouse click to stop seeking
    document.addEventListener('mouseup', function () {
        if (isSeeking) {
            video.playbackRate = 1;
            isSeeking = false;
        }
    });
});
