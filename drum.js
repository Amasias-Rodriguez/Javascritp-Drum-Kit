window.addEventListener('keydrown', function(e) {
    const audio = document.querySelector(`audio[data-keys="${e.keycode}"]`);
    const key = document.querySelector(`.key[data-keys="${e.keycode}"]`);
    if(!audio) return;
    audio.currenTime = 0;
    audio.play();
    key.classList.add('playing');
});