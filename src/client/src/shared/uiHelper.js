

export function getRandomColor(op =1) {
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256, op];
    return "rgb(" + rgb.join(",") + ")";

}

export function getRandomOpColors() {
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];

    return {
        full: "rgb(" + rgb.join(",") +  ",1)",
        op:"rgb(" + rgb.join(",") +  ",0.2)"
    };
}