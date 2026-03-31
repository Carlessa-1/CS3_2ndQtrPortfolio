function plotPoint(x0, y0, x, y) {
    console.log(x0, y0, x, y);
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;

    // Remove previous point if any
    const old = document.querySelector('.point');
    if (old) old.remove();

    var point = document.createElement('div');
    point.className = 'point';

    const scale = 2; // 1 unit = 2px, so range -100 to 100 fits in 400px
    const centerX = 200;
    const centerY = 200;
    const dotSize = 6; // half of 12px dot

    point.style.left = (centerX + (x - x0) * scale - dotSize) + 'px';
    point.style.bottom = (centerY + (y - y0) * scale - dotSize) + 'px';

    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0)       out1.innerHTML = "NE";
    else if (x < x0 && y < y0)  out1.innerHTML = "SO";
    else if (x > x0 && y < y0)  out1.innerHTML = "SE";
    else if (x < x0 && y > y0)  out1.innerHTML = "NO";
    else                          out1.innerHTML = "divisa";
}
