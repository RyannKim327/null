type Node = string | number;
type Graph = Map<Node, Node[]>;  // Adjacency list representation
function bidirectionalSearch(graph: Graph, start: Node, goal: Node): Node[] | null {
    if (start === goal) return [start];

    // Frontiers for search from start and goal
    const frontierStart = new Set<Node>([start]);
    const frontierGoal = new Set<Node>([goal]);

    // Visited maps to keep track of paths
    const visitedStart = new Map<Node, Node | null>([[start, null]]);
    const visitedGoal = new Map<Node, Node | null>([[goal, null]]);

    while (frontierStart.size > 0 && frontierGoal.size > 0) {
        // Expand from the start side
        const meetNode = expandFrontier(graph, frontierStart, visitedStart, visitedGoal);
        if (meetNode !== null) {
            return constructPath(meetNode, visitedStart, visitedGoal);
        }

        // Expand from the goal side
        const meetNodeReverse = expandFrontier(graph, frontierGoal, visitedGoal, visitedStart);
        if (meetNodeReverse !== null) {
            return constructPath(meetNodeReverse, visitedStart, visitedGoal);
        }
    }

    // No path found
    return null;
}
function expandFrontier(
    graph: Graph,
    frontier: Set<Node>,
    visitedThisSide: Map<Node, Node | null>,
    visitedOtherSide: Map<Node, Node | null>
): Node | null {
    const nextFrontier = new Set<Node>();
    for (const current of frontier) {
        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            if (!visitedThisSide.has(neighbor)) {
                visitedThisSide.set(neighbor, current);
                if (visitedOtherSide.has(neighbor)) {
                    // Meeting point found
                    return neighbor;
                }
                nextFrontier.add(neighbor);
            }
        }
    }
    frontier.clear();
    for (const node of nextFrontier) frontier.add(node);
    return null;
}
function constructPath(
    meetNode: Node,
    visitedStart: Map<Node, Node | null>,
    visitedGoal: Map<Node, Node | null>
): Node[] {
    const pathStart = [];
    let current: Node | null = meetNode;
    while (current !== null) {
        pathStart.push(current);
        current = visitedStart.get(current) || null;
    }
    pathStart.reverse();

    const pathGoal = [];
    current = visitedGoal.get(meetNode) || null;
    while (current !== null) {
        pathGoal.push(current);
        current = visitedGoal.get(current) || null;
    }

    return pathStart.concat(pathGoal);
}
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['A', 'D']],
    ['C', ['A', 'D']],
    ['D', ['B', 'C', 'E']],
    ['E', ['D']]
]);

const path = bidirectionalSearch(graph, 'A', 'E');
console.log(path);  // Output: ['A', 'B', 'D', 'E'] (or similar shortest path)
