const data = {
    arrowX0: 10,
    arrowY0: 10,
    stealDistance: 5,
    targets: [
        { x: 100, y: 50, diameter: 10, prizePoints: 100 },
        { x: 300, y: 300, diameter: 25, prizePoints: 200 },
        { x: 500, y: 300, diameter: 25, prizePoints: 200 }
    ],
    players: [
        {
            id: 'player1',
            shots: [
                { turn: 1, shootAngle: 23 }, // m = tag (angle)
                { turn: 4, shootAngle: 27 }, //
                { turn: 7, shootAngle: 45 }
            ]
        },
        {
            id: 'player2',
            shots: [
                { turn: 2, shootAngle: 25 },
                { turn: 5, shootAngle: 50 },
                { turn: 8, shootAngle: 65 }
            ]
        },
        {
            id: 'player3',
            shots:
                [
                    { turn: 3, shootAngle: 40 },
                    { turn: 6, shootAngle: 55 },
                    { turn: 9, shootAngle: 80 }
                ]
        }
    ]
};

module.exports = data;