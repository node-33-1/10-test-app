const multiply = (a, b) => {
    return a * b;
}

const average = (a, b, c) => {
    return (a + b + c) / 3;
}

const convert = celsius => {
    return celsius * (9/5) + 32;
}

// beforeAll(() => {
//     console.log("Me ejecuté antes que todos");
// });

// beforeEach(() => {
//     console.log("Me ejecuté antes de cada test");
// });

// afterAll(() => {
//     console.log("Me ejecuté después de todos los tests");
// });

// afterEach(() => {
//     console.log("Me ejecuté después de cada tests");
// });

test("2 * 2 debe retornar 4", () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
});

test("3 * 7 debe retornar 21", () => {
    const result = multiply(3, 7);
    expect(result).toBe(21);
});

test("el promedio de 5, 10 y 15 debe retornar 10", () => {
    const result = average(5, 10, 15);
    expect(result).toBe(10);
});

test("Convertir 20°C debe retornar 68°F", () => {
    const result = convert(20);
    expect(result).toBe(68);
});
