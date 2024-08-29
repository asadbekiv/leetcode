const maximumWealth = function(accounts) {
    let n1=0;
    for(let i=0;i<accounts.length;i++){
        let n2=0;
        for(let j=0;j<accounts[i].length;j++){
            n2 += accounts[i][j];
        }
        n1=Math.max(n1,n2)
    }

    return n1;

};