function getSum( a,b ){
   //Good luck!
    if(a === b){
       return a;
    }
    else{
        let diferencia = 0;
        let flag = true;
        if(a > b){
            diferencia = a - b;
            flag = true;
        }
        else{
            diferencia = b - a;
            flag = false;
        }
        while(diferencia > 0){
            switch(flag){
                case true:
                    b = b+1;
                    diferencia--;
                    break;
                case false:
                    a = a+1
                    diferencia--;
                    break;
            }
        }
        if(flag)
            return b;
        else
            return a;
    }
   
}

console.log(getSum(30,10));