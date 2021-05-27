class Food {
constructor(){
this.foodStock
this.lastFed 
}

getFoodStock(){

}

updateFoodStock(){

}

deductFood(){

}

display(){

}

draw(){
    Fill(255,255,254);
    textSize(15);
    if(lastFed>=12){
        text("last Feed : "+"PM",350,30);
    } 
    else if(lastFed==0){
        text("last Feed : 12 AM",350,30);
    }
    else{
        text("last Feed : "+ lastFed + " AM",350,30);
    }

    

}
