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