function triangleAreaWithBaseAndHeight(base: number, height: number): number {
    return (base * height) / 2;
}
function triangleAreaHeron(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
