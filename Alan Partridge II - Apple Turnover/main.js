// if (x) squared is more than 1000, return 'It's hotter than the sun!!', 
// else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.


function apple(x){
    let num = Math.pow(x,2)
    if (num > 1000) {
        return "It's hotter than the sun!!"
    }
    else if (num < 1000) {
        return "Help yourself to a honeycomb Yorkie for the glovebox."
    }

}