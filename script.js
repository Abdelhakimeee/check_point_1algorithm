text = "Abdo eats some food.";
// num of characters
var x = 0;  
// num of words
var y = 0;
// The num of vowels
var z = 0; 
for (n of text.toLowerCase()){
    
    x++
    if (n == " " || n == '.'){
        y++
    }if (n == "e" || n == "u" || n == 'a' || n == "o" || n == "i"){
        z++
    }
}
console.log(`In this text "${text}" we have:
    The number of characters ${x}
    The num of words ${y}
    The num of vowels ${z}`)

// result
    // ____________________________________
    // In this text "Abdo eats some food." we have:
    // The number of characters 20
    // The num of words 4
    // The num of vowels 8