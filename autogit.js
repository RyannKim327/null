#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

const int MAXN = 1000;

vector<int> graph[MAXN];
vector<int> components[MAXN];
stack<int> S;
int index[MAXN], lowlink[MAXN];
bool onStack[MAXN];
int idx, numComponents;

void tarjan(int v) {
    index[v] = idx;
    lowlink[v] = idx;
    idx++;
    S.push(v);
    onStack[v] = true;

    for (int i = 0; i < graph[v].size(); i++) {
        int w = graph[v][i];
        if (index[w] == -1) {
            tarjan(w);
            lowlink[v] = min(lowlink[v], lowlink[w]);
        } else if (onStack[w]) {
            lowlink[v] = min(lowlink[v], index[w]);
        }
    }

    if (lowlink[v] == index[v]) {
        int w;
        do {
            w = S.top();
            S.pop();
            onStack[w] = false;
            components[numComponents].push_back(w);
        } while (w != v);
        numComponents++;
    }
}

void findSCCs(int N) {
    idx = 0;
    numComponents = 0;
    fill(index, index + N, -1);
    fill(lowlink, lowlink + N, 0);
    fill(onStack, onStack + N, false);

    for (int i = 0; i < N; i++) {
        if (index[i] == -1) {
            tarjan(i);
        }
    }

    // Output the strongly connected components
    for (int i = 0; i < numComponents; i++) {
        cout << "Component " << i << ": ";
        for (int j = 0; j < components[i].size(); j++) {
            cout << components[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int N, M;
    cin >> N >> M; // Number of vertices (N) and edges (M)

    for (int i = 0; i < M; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
    }

    findSCCs(N);

    return 0;
}
