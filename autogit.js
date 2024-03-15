function tarjan(vertices) {
    let index = 0;
    let stack = [];
    let result = [];
    
    for (let v of vertices) {
        if (v.index === undefined) {
            strongConnect(v);
        }
    }
    
    return result;
    
    function strongConnect(v) {
        v.index = index;
        v.lowlink = index;
        index++;
        stack.push(v);
        v.onStack = true;
        
        for (let w of v.neighbors) {
            if (w.index === undefined) {
                strongConnect(w);
                v.lowlink = Math.min(v.lowlink, w.lowlink);
            } else if (w.onStack) {
                v.lowlink = Math.min(v.lowlink, w.index);
            }
        }
        
        if (v.lowlink === v.index) {
            let component = [];
            let w;
            do {
                w = stack.pop();
                w.onStack = false;
                component.push(w);
            } while (w !== v);
            
            result.push(component);
        }
    }
}

// Example usage
class Vertex {
    constructor() {
        this.index = undefined;
        this.lowlink = undefined;
        this.onStack = false;
        this.neighbors = [];
    }
}

let v1 = new Vertex();
let v2 = new Vertex();
let v3 = new Vertex();
let v4 = new Vertex();

v1.neighbors = [v2];
v2.neighbors = [v3];
v3.neighbors = [v1, v4];
v4.neighbors = [v2];

let vertices = [v1, v2, v3, v4];
let sccs = tarjan(vertices);

console.log(sccs);
