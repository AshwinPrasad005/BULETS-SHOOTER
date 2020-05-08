function collision(obj1,obj2){

  if(obj1.x-obj2.x<=obj1.width+obj2.width&&
    obj2.x-obj1.x>=obj1.width+obj2.width){

       obj1.velocityX = 0; 

    }

}