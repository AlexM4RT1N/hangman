// var lexa = {
//   name: "Леха",
//   age: "27 года",
//   height: "~177см",
//   luckyColor: [undefined],
//   luckyGames: ["Ведьмак 3","Call of Duty","Не помню название, дурацкая, играли в мелроуз, аймзебест в ней"],
//   character: "Смешной эксперт по видеомэмам"
// };
// var maria = {
//   name: "Машичка",
//   age: "23 года",
//   height: "~172см",
//   luckyColor: ["Яркий","Разноцветный", "~Желто-красный"],
//   character: "Слишком позитивная"
// };
// var kate = {
//   name: "Катичка",
//   age: "24 года",
//   height: "165см",
//   luckyColor: ["Черный","Темно-синий", "Красный"],
//   character: "Беспокойный"
// };
// var pikache = {
//   name: "Пикачу",
//   age: "2 года",
//   height: "26см",
//   luckyColor: ["Желтый","Оранжевый","Светло-коричневый", "Розовый"],
//   character: "Дурненький"
// };
// var chewie = {
//   name: "Чубака",
//   age: "2 года",
//   height: "23см",
//   luckyColor: ["Чорный","Белый","Зеленый"],
//   character: "Спокойный"
// };

// var myname = "Alex";
// var papname = "Alexei";
// var mamname = "Inna";

// var name = "Inn";
// if (name === myname) {
//   console.log("Hello, me!");
// } else if (name === papname) {
//   console.log("Hi, father!");
// } else if (name === mamname) {
//   console.log("Hi, mather!");
// } else {
//   console.log("Hi, man!!!Who is you?")
// }


// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for (i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + " - good animal";
// }
// console.log(animals);


// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomStirng = "";
// var i = 0;
// while (randomStirng.length < 4) {
//   randomStirng += alphabet[Math.floor(Math.random() *
//   alphabet.length)];
// }
// console.log(randomStirng);

  
// var input = "alexmartin, me age twenty four years! yeah!!!";
// var output = "";
// console.log(input);
// for (var i = 0; i < input.length; i++) {
//   if (input[i] === "a") {
//     output += "4";
//   } else if (input[i] === "e") {
//     output += "3";
//   } else if (input[i] === "i") {
//     output += "1";
//   } else if (input[i] === "o") {
//     output += "0";
//   } else {
//     output += input[i];
//   }
// }
// console.log(output);


var words = [
  "исследование",
  "бюрократия",
  "индустриализация",
  "марксизм",
  "конформизм",
  "общество",
  "государство",
  "благосостояние",
  "контроль",
  "информация",
  "идентичность",
  "структура",
  "концепция",
  "демократичность",
  "нетрадиционность",
  "социология" 
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
} 

var remainingLetters = word.length;
var remainingPoints = word.length;
var usedLetters = [];

while (remainingPoints > 0 && remainingLetters > 0) {
  var guess = prompt(answerArray.join(" ") + 
    " ---У вас осталось попыток: <" + 
    remainingPoints + 
    "> Угадайте букву или нажмите Отмена для выхода из игры." + 
    " Вы уже вводили такие буквы: " + usedLetters)
  if (guess === null) {
    break;
  } else if ( guess.length < 1) {
    alert("Пожалуйста, введите хотя бы одну букву.");
  } else {
    for (var y = 0; y < guess.length; y++) {
      var errorGuess = word.length;
      if (usedLetters.length !== 0) {
        var e = 0;
        for (var q = 0; q < (usedLetters.length - e); q++) {
          e = 0;
          if (guess[y] === usedLetters[q]) {                
            alert("Вы уже вводили букву: " + guess[y]);     //..........
          } else {                                          //..........
            usedLetters += guess[y];                        //..........
            e = usedLetters.length;
          }
        }
      } 
      var x = 0;
      for (var j = 0; j < (word.length - x); j++) {
        if (answerArray[j] !== "_" && answerArray[j] === guess[y]) {
          alert("Эта буква уже отгадана.")
          x = word.length;
        } else if (word[j] === guess[y]) {
          if (x != 0) {
            alert("Ура, такая буква есть аж в " + (x + 1) +" местах!");
          } else {
            alert("Ура, такая буква есть!");
          }
          answerArray[j] = guess[y];
          remainingLetters--;
          x++;
        } else {
          errorGuess--;
          if (usedLetters.length === 0) {
            usedLetters += guess[y];
          }
        }
      }
      if (errorGuess === 0) {
        remainingPoints--;
        alert("Сорян, но буква: " + guess[y] + ", не найдена." + " Минус одна попытка!");
      }
    }
  }
}
if (remainingLetters === 0) {
  alert(answerArray.join(" "));
  alert("Поздравляем! Было загадано слово: " + word);
} else {
  alert("Жаль но вы проиграли! " + 
  "А осталось отгадать всего лишь: " + 
  remainingLetters + 
  " букв. " + "Было загадано слово: " + word);
}