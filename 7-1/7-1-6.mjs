const View = (count) =>{
    if(count > 100) return
    console.log(count)
    View(count * 2)
}

View(10)
View(25)