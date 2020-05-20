class X {
    constructor(x1,x2) {
        this.x1 = x1;
        this.x2 = x2;
    }
}
class Y extends X {
    constructor(x1,x2,y) {
        super(x1,x2);
        this.y = y;
        
    }
    run(){
        this.sum = this.y*this.y+this.x1*this.x1+this.x2 *this.x2;   
    }
    print(){
        console.log(this.sum);
    }
}

let arr = (prompt()).split(" ");
let sum = new Y(arr[0],arr[1],arr[2]);
sum.run();
sum.print();
let text =[sum.sum];
document.write(
        '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
    )



