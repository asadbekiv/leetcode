var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let L=1;
        let R=n;

        while(L<R){
            let M=Math.floor((L+R)/2);
            if(isBadVersion(M)){
                R=M;
            }else{
                L=M+1;
            }
        }

        return L;
        

        
        
    };
};