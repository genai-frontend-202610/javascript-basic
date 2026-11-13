function printUser({name,age,city='pusan'}){
    console.log(`Name:${name}, Age:${age} City:${city}`);
    
}

const user ={
    name:'Alice',
    age:25,
    city:'seoul'
}

printUser(user)