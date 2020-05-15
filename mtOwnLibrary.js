function collision(obj1,obj2){

  if(obj1.x - obj2.x < (obj1.width/2 + obj2.width/2)&&
     obj2.x - obj1.x < (obj1.width/2 + obj2.width/2)){

       return true;

    }

}