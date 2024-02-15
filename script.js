/* 3. Save image links in a object or an array, and display one image in img tag  */
const images =  [];
images[0] = "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
images[1] = "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
images[2] = "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.getElementById("gallery").src = images[0];


// Left  button 
document.getElementById("left").addEventListener('click',function(){
leftArr(images)})

function leftArr(images){  

// Finds the last index of the array of images.
 document.getElementById("gallery").src = images[images.length - 1];
return images;
}

// Right Button 
document.getElementById("right").addEventListener('click',function(){
rightArr(images)})

function rightArr(images){

// Finds the second index number for the array of images
  document.getElementById("gallery").src =  images[1];

    return images;
}

