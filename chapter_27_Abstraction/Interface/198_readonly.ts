interface Point {
    readonly x: number;
    readonly y: number;
}

const point1 : Point = {
    x: 10,
    y: 20
}

//point1.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.