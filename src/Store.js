import Child from './Child.js'
import Parent from './Parent.js'

class Store{
  constructor(){
    this.parent = new Parent("Francesco")
    this.parent.addChild(new Child("Luca"))
    this.parent.addChild(new Child("Marco"))

  }

  getParent(){
    return this.parent
  }
}

const store = new Store()
export default store
