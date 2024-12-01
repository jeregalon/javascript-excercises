/** Mediante las clases Point y Line se construye una figura utilizando las
 * coordenadas x, y, de los puntos. Se implementa el cálculo del área de la
 * figura utilizando la fórmula de Gauss.
 */

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Line {
    constructor(_point1, _point2) {
        if (!(_point1 instanceof Point) || !(_point2 instanceof Point)) {
            throw new Error("Los parámetros deben ser instancias de la clase Point.");
          }
        this.point1 = _point1
        this.point2 = _point2
    }
}

class Figure {
    constructor(elements) {
        if (!Array.isArray(elements)) {
          throw new Error("El parámetro debe ser un array.");
        }
    
       // Array para almacenar todos los puntos
        this.points = [];

        elements.forEach((e) => {
        if (e instanceof Point) {
            this.points.push(e);
        } else if (e instanceof Line) {
            this.points.push(e.point1, e.point2);
        } else {
            throw new Error("Los elementos deben ser instancias de Point o Line.");
        }
        });
    }
    area() {
        const n = this.points.length;
        if (n < 3) {
          throw new Error("Se necesitan al menos 3 puntos para calcular el área.");
        }
    
        let sum = 0;
        for (let i = 0; i < n; i++) {
          const x1 = this.points[i].x;
          const y1 = this.points[i].y;
          const x2 = this.points[(i + 1) % n].x; // El siguiente punto (cerrando el polígono)
          const y2 = this.points[(i + 1) % n].y;
    
          sum += x1 * y2 - y1 * x2;
        }
    
        return Math.abs(sum) / 2;
    }
}

let p1 = new Point(0, 0)
let p2 = new Point(0, 1)
let p3 = new Point(1, 1)
let p4= new Point(1, 0)

let l1 = new Line(p1, p2)
let l2 = new Line(p2, p3)
let l3 = new Line(p3, p4)
let l4 = new Line(p4, p1)

let f1 = new Figure([l1, l2, l3, l4])

console.log(f1.area())