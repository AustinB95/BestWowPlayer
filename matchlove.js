var n = Math.random() * 100 + 1;

n = Math.floor(n);
alert("Would you like to see how compatible you and your crush are?");
var name = prompt("What is your name?").trim().toLowerCase();
var crush = prompt("What is your Crushes name").trim().toLowerCase();
// alert(name + " and " + crush +  " are a " + n + "% match!" )

name.toLowerCase;
crush.toLowerCase;



    if ((name === 'kelly' && crush === 'austin') || (name === 'austin' && crush === 'kelly')) {
    alert("Doesn't matter what the % is, You guys are meant to be!");
            } else if((name === 'kelly' && crush != 'austin') || (name === 'austin' && crush != 'kelly')
            || (name != 'kelly' && crush === 'austin') || (name != 'austin' && crush === 'kelly')){
            alert("Not Compatible")}
                else if (n < 50){
                alert("Sorry! Your score is " + n)}
                        else {
                        alert("Congrats! Your score is " + n)};

                        //  } else if (n < 50 && name != 'kelly' && name != 'austin' && crush != 'kelly' && crush != 'austin'){
                        //    alert("Sorry! Your score is " + n)}
                        //          else if (n > 50 && name != 'kelly' && name != 'austin' && crush != 'kelly' && crush != 'austin'){
                        //            alert("Congrats! Your score is " + n)};
                            




      
     








// if (name === 'kelly' && crush === 'austin'){
//     alert("Doesn't matter what the % is, You guys are meant to be!");
// }

// if (name === 'austin' && crush === 'kelly'){
//     alert("Doesn't matter what the % is, You guys are meant to be!");
// }



// if (name === 'kelly' && crush != 'austin'){
//     alert("Sorry, Kelly does not belong with anyone else.");
// }

// if (name != 'austin' && crush === 'kelly'){
//     alert("Sorry, Kelly does not belong with anyone else.");
// }






// if (n < 50 && name != 'kelly' && name != 'austin' && crush != 'kelly' && crush != 'austin'){
//         alert("Sorry! Your score is " + n);}

// if (n > 50 && name != 'kelly' && name != 'austin' && crush != 'kelly' && crush != 'austin'){
//         alert("Congrats! Your score is " + n);}





// if (n < 50 && name != 'kelly' + 'austin' && crush != 'kelly' + 'austin'){
//     alert("Oh No! It looks like " + name +  " and " + crush + " Are not a very good Match at " + n + "%!");
// }

// if (n > 50 && name != 'kelly' + 'austin' && crush != 'kelly' + 'austin'){
//     alert("Contrats! It looks like " + name +  " and " + crush + " Are a Great Match at " + n + "%!" );}





