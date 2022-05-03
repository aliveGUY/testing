class Task{
  constructor(string){
      this.string = string;
  }

  stringLength(){
    if(this.string.length === 0) {
        return 'length 0'
    } else if (this.string.length > 10){
        return 'out of index range'
    } else {
        return this.string.length
    }
  }
  reverseString(){
    let res = [];
    for(let i = this.string.length - 1; i >= 0; i--){
        res += this.string[i];
    }
    return res
  }
}

module.exports = Task;
