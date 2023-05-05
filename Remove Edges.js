// Alice and Bob have an undirected graph of n nodes and three types of edges:

// Type 1: Can be traversed by Alice only.
// Type 2: Can be traversed by Bob only.
// Type 3: Can be traversed by both Alice and Bob.

let n = 4;
let edges = [
  [3, 1, 2],
  [3, 2, 3],
  [1, 1, 4],
  [2, 1, 4],
];

var maxNumEdgesToRemove = function (n, edges) {
    
    let type_1 = [];
    let type_2 = [];
    let type_3 = [];
    nodes = [];
    removedCounter = 0;
    for(let i=0; i<n; i++) {
        nodes.push(i+1);
    }

    for(edges of edges){
        if(edges[0]===3){
            type_3.push(edges[1],edges[2]);
        }else if(edges[0]===1){
            type_1.push([edges[1],edges[2]]);
        }else{
            type_2.push([edges[1],edges[2]]);
        }
    }
    type_3 = [...new Set(type_3)];

    

    const missingElements = nodes.filter((element) => !type_3.includes(element));

    for(value of type_1){
        const isMatch = missingElements.some((element) => value.includes(element));
        if(!isMatch){
            removedCounter+=1;
        }
    }
    for(value of type_2){
        const isMatch = missingElements.some((element) => value.includes(element));
        if(!isMatch){
            removedCounter+=1;
        }
    }
    
    let total_type_1 = type_3;
    type_1.forEach((element)=>{
        total_type_1.push(element[0],element[1]);
    })
    total_type_1 = [... new Set(total_type_1)];
    
    let total_type_2 = type_3;
    type_2.forEach((element)=>{
        total_type_2.push(element[0],element[1]);
    })
    total_type_2 = [... new Set(total_type_1)];

    if(!(total_type_1.length===4) || !(total_type_2.length===4)){
        console.log("-1");
    }
    else{
        console.log(removedCounter);
    }
    
};

maxNumEdgesToRemove(n,edges);