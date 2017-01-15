import Person from './Person.js'

class Parent extends Person {
  constructor(name){
      super(name)
      this.children = []
  }

  addChild(child){
    this.children.push(child)
  }

  getChildren(){
    return this.children
  }
}

export default Parent
