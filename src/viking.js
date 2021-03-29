
// Soldier
class Soldier {
    
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack(){
    return this.strength
    }
    
    receiveDamage(damage){
         this.health = this.health - damage
        }
}


// Viking
class Viking extends Soldier{
constructor(name, health, strength){
    super(health, strength)
    this.name = name
    }   

attack(){
    return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
        }else{
        return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health- damage
    

    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
        }
    }
}

// War

class War {
    constructor(){
    }
    vikingArmy = []
    saxonArmy = []

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let saxon1 = Math.floor(Math.random() * this.saxonArmy.length) 
        let viking1 = Math.floor(Math.random() * this.vikingArmy.length)
        let newHealth = this.saxonArmy[Saxon1].health = this.saxonArmy[Saxon1].health - this.vikingArmy.strength
        if(this.saxonArmy[saxon1].health < 0){
            console.log('A Saxon has died in combat')
            return this.saxonArmy.splice(this.saxonArmy,[saxon1])
        }
    
    }

}