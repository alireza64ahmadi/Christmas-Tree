const baubles = document.querySelectorAll("li")
const lights = document.querySelectorAll("li:nth-child(odd)")
const maxX = 30;
const maxY = 35;
const baublesLength = baubles.length;

baubles.forEach((baubles, i ) => {
    const y = Math.pow(i / baublesLength, 0.5) * maxY * 2 - maxY;
    const x = Math.pow((maxX * i ) / baublesLength , 0.5) * 5.5 * Math.random() * (i % 2 === 0 ? 1 : -1)
    const r = Math.random();
    const n = Math.random()



    baubles.style.setProperty("--x", `${x}vmin`);
    baubles.style.setProperty("--y", `${y}vmin`);
    baubles.style.setProperty("--r", `${r}turn`);
    baubles.style.setProperty("--sign",  n > 0.5 ? -1: 1);
    baubles.style.setProperty("--s",  Math.random() * 0.875 + 0.125);
    baubles.style.setProperty("--hue",  Math.random() * 360);


    baubles.textContent = Math.random() >= 0.2 ? "0" :Math.random() >= 0.5 ? "1🎅":"0❄️";


    if( i % 2 === 0){
        baubles.animate(
            { opacity : [1,1,0]},
            {
                duration: 2000 + Math.random() * 3000,
                iterations: Infinity,
                direction: "alternate",
                delay: Math.random() * -16000,
                easing : "ease-in"
            }
        )
    }
    const animation = baubles.animate(
        {transform : ["rotateX(1turn) rotateY(2turn)"]},
        {
            duration: 7000 + Math.random() * 13000,
            iterations: Infinity,
            direction: "alternate",
            delay: Math.random() * -16000,
            easing : "ease-in" ,
            composite: "add"
        }
    )
    if (i % 2 === 1 || 
        !window.matchMedia?.("(prefer-reduced-motion: no-preference)")
        ) {
        animation.pause()
    }
})