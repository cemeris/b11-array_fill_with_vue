const app = new Vue({
    el: "#app",
    data: {
        examples: []
    },
    methods: {
        getExampleTemplate: function () {
            return [
                ['0', '0', '0'],
                ['0', '0', '0'],
                ['0', '0', '0']
            ];
        },
        generateExample(callback) {
            let example = this.getExampleTemplate();
            this.examples.push(callback(example));
        }
    }
});

app.generateExample(function (template) {
    return template;
});

/*
Piemērs #1
    [x, x, x],
    [x, x, x],
    [x, x, x]
*/
app.generateExample(function (template) {
    for (let r = 0; r <= 2; r++) {
        for (let c = 0; c <= 2; c++) {
            template[r][c] = 'x';
        }
    }
    return template;
});

/**
1. Uzdevuma noformulēšana un saprašana.
2. Kas? Kur? Risināšanas idejas.
    Q1: Kur? 
    A: rindu pirms return template;
    Q2: Kas būs jāpielieto?

3. Sadalam apakšuzdevumos.
 */

/*
Piemērs #2
    [x, 0, x],
    [x, 0, x],
    [x, 0, x]
*/
app.generateExample(function (template) {
    for (let r = 0; r <= 2; r++) {
        for (let c = 0; c <= 2; c += 2) {
            template[r][c] = 'x';
        }
    }
    return template;
});

/*
Piemērs #3
    [x, x, x],
    [x, x, x],
    [0, 0, 0]
*/
app.generateExample(function (template) {
    for (let r = 0; r <= 1; r++) {
        for (let c = 0; c <= 2; c++) {
            template[r][c] = 'x';
        }
    }
    return template;
});
/*
Piemērs #4
    [x, 0, 0],
    [0, x, 0],
    [0, 0, x]
*/
app.generateExample(function (template) {
    for (let n = 0; n <= 2; n++) {
        template[n][n] = 'x';
    }
    
    return template;
});

/*
Piemērs #5
    [0, 0, x],
    [0, 0, x],
    [x, x, x]
*/
app.generateExample(function (template) {
    /*
    template[0][2] = 'x';

    template[1][2] = 'x';

    template[2][2] = 'x';
    template[2][1] = 'x';
    template[2][0] = 'x';
    */
    for (let r = 0; r <= 2; r++) {
        for (let c = 2; c >= 0; c--) {
            if (c < 2 && r < 2) {
                break;
            }
            template[r][c] = 'x';
        }
    }
    return template;
});

/*
Piemērs #6
    [6, 0, 5],
    [4, 0, 3],
    [2, 0, 1]
*/
app.generateExample(function (template) {
    return template;
});

/*
Piemērs #7
Fibonačī virkne
    [8, 0, 5],
    [3, 0, 2],
    [1, 0, 1]
*/
app.generateExample(function (template) {
    return template;
});

/*
Piemērs #8
Fibonačī virkne
    [5, -1, 1],
    [-8, 2, 0],
    [13, -3, 1]

    1, 0, 1, -1, 2, -3, 5, -8, 13
*/
app.generateExample(function (template) {
    return template;
});

/*
Piemērs #9
Fibonačī virkne
    [1, 5, 8],
    [1, x, 13],
    [2, 3, 21]
*/
app.generateExample(function (template) {
    return template;
});

/*
Piemērs #10
    [a1, a2, a3],
    [b1, b2, b3],
    [c1, c2, c3]
*/
app.generateExample(function (template) {
    return template;
});