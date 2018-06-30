// y = mx + c => y0 - m*x0 = c
function calculateLineParams({ x, y , shootAngle }) {
    let m = Math.tan(toRadians(shootAngle));
    let c = y - m * x;

    return {
        m,
        c
    };
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

// let line = {  x: 10, y: 10 , angle: 23 }
// let circle = { x: 100, y: 50, diameter: 10 }

// a. y= m*x + c
// b. (x−p)^2 + (y−q)^2 = r^2
// c. Replaces a into b. (x−p)^2+(mx+c−q)^2 = r^2
// d. (x−p)^2 + (mx+c−q)^2 - r^2 = 0
// f. (x^2 - 2xp + p^2) + ( m^2x^2 + c^2 + q^2 + 2mxc - 2mxq- 2cq) - r^2
// g. x^2 + m^2x^2 - 2xp + 2mxc - 2mxq + p^2 + c^2 + q^2 - 2cq - r^2
// h. (m^2+1) x^2 + 2(mc−mq−p) x + (q^2−r^2+p^2−2cq+c^2) = 0
// i. A = (m^2+1); B = 2(mc−mq−p); C = (q^2−r^2+p^2−2cq+c^2);
// ------------------------------
// x0 = (- B - Math.sqrt( B * B - 4 * A * C )) / (2*A)
// B*B - 4AC < 0 MISS
// B*B - 4AC >= 0 HIT
// y0 = m * x0 + c

function calculateLineCirclePhysicIntersection(line, circle) {
    let { m, c } = calculateLineParams(line);
    let  { p, q , r } = { p: circle.x , q: circle.y, r: circle.diameter };
    let A = m * m + 1;
    let B = 2 * (m*c - m*q - p );
    let C = q*q - r*r + p*p - 2*c*q + c*c;

    let discriminant = B*B - 4*A*C;

    //console.log(B*B - 4*A*C);
    //console.log(m,c,p,q,r);
    //console.log(A,B,C);

    if (discriminant >= 0) {
        let x = (- B - Math.sqrt(discriminant)) / (2*A);
        //let x2 = (- B + Math.sqrt(discriminant)) / (2*A);
        let y = m * x + c;
        //let y2 = m * x2 + c;
        return {
            x,
            y,
            //x2,
            //y2,
            hit: true
        }
    } else {
        return {
            hit: false
        }
    }
}

module.exports = {
    calculateLineParams,
    calculateLineCirclePhysicIntersection
};