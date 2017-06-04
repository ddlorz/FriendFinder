var people = [
    {
        name: 'Professor Farnsworth',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GpKUwExcgF1_MBeD-zI01-yfA8Pq1Nd0inYHBMyjf5QhrqzE',
        scores: ['5','5','5','5','5','5','5','5','5','5',]
    },
    {
        name: 'Scruffy Scruffington',
        photo: 'https://vignette4.wikia.nocookie.net/en.futurama/images/1/10/Scruffy.png/revision/latest?cb=20170123190905',
        scores: ['4','4','4','4','4','4','4','4','4','4',]
    },
    {
        name: 'Leela Turanga',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkgMhTIEw2f0QRFkzTK7gr5Ty4FvISkzUeDJDStD_B5d-J3ER',
        scores: ['3','3','3','3','3','3','3','3','3','3']
    },
    {
        name: 'Bender Rodriguez',
        photo: 'https://vignette2.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725',
        scores: ['2','2','2','2','2','2','2','2','2','2']
    },
    {
        name: 'Phillip Fry',
        photo: 'https://vignette4.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest?cb=20110916120042',
        scores: ['1','1','1','1','1','1','1','1','1','1',]
    },
];

module.exports = function(newUser) {
    if (newUser) {
        people.push(newUser);
    }
    return people;
}
