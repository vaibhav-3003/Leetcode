var predictPartyVictory = function(senate) {
    const queueR = [], queueD = [];
    const n = senate.length;
    
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            queueR.push(i);
        } else {
            queueD.push(i);
        }
    }
    
    while (queueR.length > 0 && queueD.length > 0) {
        //shift() method removes first element of the queue and return it
        const senatorR = queueR.shift();
        const senatorD = queueD.shift();
        
        if (senatorR < senatorD) {
            queueR.push(senatorR + n);
        } else {
            queueD.push(senatorD + n);
        }
    }
    
    return queueR.length > 0 ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory("RD"));

