import Child from './Child.js'
import Parent from './Parent.js'

class Store{
  constructor(){
    this.parent = new Parent("Francesco")
    let luca = new Parent("Luca")
    luca.addChild(new Child("Mario"))
    this.parent.addChild(luca)
    this.parent.addChild(new Child("Marco"))

  }

  getParent(){
    return this.parent
  }
}

const store = new Store()
export default store
