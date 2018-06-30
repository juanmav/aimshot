const data = require('./gamedata');
const { calculateLineCirclePhysicIntersection } = require('./helpers');
console.log('The results');

function matchResumen(data) {
    let point = { x: data.arrowX0, y: data.arrowY0 };
    let { targets, players } = data;
    return players.map( p =>  {
        let shots = playerTableScore(p, point, targets);
        let score = shots.reduce( (acc, s) => acc + s.prizePoints, 0);
        return {
            id: p.id,
            score,
            shots,
        }
    } )
}

function playerTableScore(player, playerPosition, targets) {
    return player.shots.map( s => {
        return targets.map(t => {
            let result = calculateLineCirclePhysicIntersection({ ...s, ...playerPosition }, t) ;
            if (result.hit) result.prizePoints = t.prizePoints;
            return result;
        }).find( r => r.hit);
    }).filter( s => s);
}

let mrs = matchResumen(data);
console.log('---------- Resumen: --------------');
console.log(JSON.stringify(mrs,null,4));
console.log('----------------------------------');

let sortMrs = mrs.sort((a,b) => b.score - a.score);
let winner = sortMrs[0];

console.log('-------------The winner! -----------');
console.log(winner.id);
console.log('----------------------------------');