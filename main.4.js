
    class Rectangle {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
}

    render(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
}

    let canvas = document.getElementById("bai4");
    let rect1 = new Rectangle(100, 100, 300, 200, "#000000");;
    rect1.render(canvas)