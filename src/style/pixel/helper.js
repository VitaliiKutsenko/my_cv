export function createPixel(widthConteiner, heightConteiner, XY) {
    let str = "";
    for (let i = XY - XY; i <= widthConteiner; i = i + XY + 1) {
        for (let z = XY - XY; z <= heightConteiner - XY; z = z + XY + 1) {
            str += `rgba(125,125,125,${(
                createRandomMinMax(20, 50) / getRandom()
            ).toFixed(2)}) ${i}px ${z}px,`;
        }
    }
    return str.slice(0, str.length - 1);
}

function createRandomMinMax(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getRandom() {
    return Math.random() * 10 >= 5 ? 500 : 1000;
}
