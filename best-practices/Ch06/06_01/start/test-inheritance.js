class A{
  static find(){
    return this.my;
  }
  static get my(){
    return "rejid";
  }
}

class B extends A{
  
    static get my(){
      return "lejik";
    }
}


console.log(B.find());
