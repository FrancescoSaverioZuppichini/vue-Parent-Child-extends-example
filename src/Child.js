import Person from './Person.js'

class Child extends Person {
  constructor(name){
      super(name)
      this.parent = null
  }

  setParent(parent){
    this.parent = parent
  }
}

export default Child
