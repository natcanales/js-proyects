function gridCreator(rows = 10, columns = 10) {
    let grid = [];

    if ((rows < 5) || (columns < 5)) {
        console.log("The rows and columns must be more than 5");
        return;
    }
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(false);
        }
        grid.push(row);
    }

    return grid;
}

let grid = gridCreator(8, 8);
let obstacles = [
    {x: 2, y: 6},
    {x: 3, y: 1},
    {x: 7, y: 2}
];

function setObstacles(grid, obstacles) {
    obstacles.forEach(object => {
        if ((object.x < grid.length) && (object.y < grid[0].length)
            && (object.x >= 0) && (object.y >= 0)){
            grid[object.x][object.y] = true;
        } else {
            console.log(`Cannot set obstacle at x: ${object.x}, y: ${object.y}`);
        }
    });
}