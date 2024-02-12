function AStarSearch(grid, start, goal) {
    const openSet = [start]; // Open set to keep track of cells to be evaluated
    const closedSet = []; // Closed set to keep track of visited cells

    start.g = 0;
    start.h = heuristic(start, goal);
    start.f = start.h;

    while (openSet.length > 0) {
        // Find the cell with the lowest f value in the open set
        let current = openSet[0];
        let currentIndex = 0;
        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < current.f) {
                current = openSet[i];
                currentIndex = i;
            }
        }

        // Move the current cell from the open set to the closed set
        openSet.splice(currentIndex, 1);
        closedSet.push(current);

        // Check if the current cell is the goal
        if (current === goal) {
            return reconstructPath(current);
        }

        // Generate neighbors of the current cell
        const neighbors = generateNeighbors(current);

        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];

            // Skip neighbors already in the closed set or are obstacles
            if (closedSet.includes(neighbor) || neighbor.obstacle) {
                continue;
            }

            const gScore = current.g + 1; // Assume the cost to move from one cell to its neighbor is 1

            if (!openSet.includes(neighbor) || gScore < neighbor.g) {
                neighbor.g = gScore;
                neighbor.h = heuristic(neighbor, goal);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = current;

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    // No path found
    return null;
}

function heuristic(cell, goal) {
    // Return the Manhattan distance as the heuristic
    return Math.abs(cell.x - goal.x) + Math.abs(cell.y - goal.y);
}

function generateNeighbors(cell) {
    // Generate all valid neighboring cells
    const neighbors = [];
    const directions = [
        { x: -1, y: 0 }, // Left
        { x: 1, y: 0 }, // Right
        { x: 0, y: -1 }, // Up
        { x: 0, y: 1 } // Down
    ];

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        const newX = cell.x + direction.x;
        const newY = cell.y + direction.y;

        // Check if the new coordinates are within the grid boundaries
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
            const neighbor = grid[newX][newY];
            neighbors.push(neighbor);
        }
    }

    return neighbors;
}

function reconstructPath(cell) {
    const path = [];
    let current = cell;

    while (current) {
        path.unshift(current);
        current = current.parent;
    }

    return path;
}
