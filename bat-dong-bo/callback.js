var getImage = function(){
    return fetch('https://picsum.photos/400/300')
}

var getImageCallBack = function(url, cb){
    fetch(url)
    .then(res => cb(res))
}
// Function
function renderImage(id, value){
    var temp = document.querySelector(id)
    temp.src = value
}
getImageCallBack("https://picsum.photos/1000/600", function(res){
    console.log(res);
    renderImage("#image1", res.url)
})

getImageCallBack("https://picsum.photos/300/200", function(res){
    console.log(res);
    renderImage("#image2", res.url)
})
