// 1)Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.
let num = Math.floor(Math.random() * 100) + 1; // 1-dən 100-ə qədər random ədəd function-u.
console.log(`Random ədəd: ${num}`);
let divides = new Boolean(false);
//burada 3-ə və 7-ə eyni zamanda qalıqsız bölünüb-bölünmədiyini yoxlayırıq (bölünürsə true, bölünmürsə false)
if (num % 3 == 0 && num % 7 == 0) divides = true;
else divides = false;
if (divides) console.log("Ədəd 3-ə və 7-ə qalıqsız bölünür.");
else console.log("Ədəd 3-ə və 7-ə qalıqsız bölünmür.");

// 2)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.
let n = 1; //Math.floor(Math.random() * 100) + 1;
let m = Math.floor(Math.random() * (100 - n)) + n + 1; // m-in n-dən böyük olması üçün function
let oddCount = 0;
let sumOfOdds = 0;
for (let i = n + 1; i < m; i++) {
  //value və datatype-ları yoxlayan condition
  if (i % 2 !== 0) {
    oddCount++;
    sumOfOdds += i;
  }
}
console.log(
  `${n} və ${m} ədədləri aralığındakı tək ədədlərin sayı: ${oddCount}`
);

// 3)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin cemini tapin. (sumOfOdds yuxarıda qeyd olunub: Line15)
console.log(
  `${n} və ${m} ədədləri aralığındakı tək ədədlərin cəmi: ${sumOfOdds}`
);

// 4)Verilmis n tam ededinin sade ve ya murekkeb oldugunu tapin. (n ədədi yuxarıda declare olunub: line 12)
let isComplexNumber = checkComplex(n);
if (isComplexNumber) console.log(`${n} ədədi mürəkkəbdir`);
else console.log(`${n} ədədi sadədir`);

function checkComplex(num) {
  //ədədin sadə və ya mürəkkəb olduğunu yoxlayan function.
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return true;
  }
  return false;
}

// 5)Verilmish arrayin icindeki cut ededlerin cemini tapin.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let sumOfEvens = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) sumOfEvens += arr[i];
}
console.log(`${arr} aralığındakı cüt ədədlərin cəmi: ${sumOfEvens}`);

// 6) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
function sumOfSqrEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += Math.pow(arr[i], 2);
    }
  }
  return sum;
}
console.log(
  `${arr} aralığındakı cüt ədədlərin kvadratları cəmi: ${sumOfSqrEvens(arr)}`
);

// 7) Elə bir funksiya yazın ki 2 parametr qəbul eləsin - hər 2 parametrin rəqəm olub-olmamağını yoxlamalısınız - əgər hər 2si də rəqəmdirsə yazdığınız funksiya həmin 2 rəqəm arasındakı ədədlərin cəmini return etməlidir (misal üçün parametrlər 10 və 15dirsə 10,11,12,13,14,15 cəmini qaytarmalıdır)
let a = 3;
let b = 6;
console.log(
  `${a} və ${b} ədədləri aralığındakı ədədlərin cəmi: ${sumOfBetween(a, b)}`
);

function sumOfBetween(a, b) {
  function isNumber(num) {
    return typeof num === "number";
  }
  let sumOfElements = 0;
  if (isNumber(a) && isNumber(b)) {
    for (let i = a + 1; i < b; i++) {
      sumOfElements += i;
    }
  } else console.log(`elementlər ədəd deyil`);
  return sumOfElements;
}

// 8) HTML-də uzunluğu və hündürlüyü 200px olan element hazırlayın və bir ədəd button hazırlayın - istifadəçi hər dəfə buttona click edəndə uzunluq 50px, hündürlük isə 20px artmalıdır
let btn = document.getElementById("input");
let background = document.getElementById("btn");
btn.addEventListener("click", function () {
  let height=background.offsetWidth+20;
  let width=background.offsetWidth+50;
  background.style.width=JSON.stringify(width)+"px";
  background.style.height=JSON.stringify(height)+"px";
});
