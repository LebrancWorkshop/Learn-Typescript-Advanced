type Point = {x: number, y: number};

const p: Point = {x: 1, y: 2};

type TypePoint = Point[keyof Point];
