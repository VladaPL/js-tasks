// Функция должна выводить true, если есть все закрывающие скобки.
// Вывести false, если скобки закрывающей нет.

function checkBrackets(str) {
    const stack = []; // собираем сюда открывающиеся скобки

    for(let i = 0; i < str.length; i++) { // проходим по строке
        const bracket = str[i]; // обращаемся к каждой скобке
        if (bracket === "(") {
            stack.push(bracket);
            console.log(`Это каждая скобка в итерации ${bracket}`)
            console.log(`Это стэк ${stack}`);
        } else {
            const lastEl = stack.pop(); // вытаскиваем последний элемент массива
            console.log(`Это последний элемент массива из ( : ${lastEl}`)
            if(!lastEl) { // если массив пустой, то есть НЕ true
                return false; // возвращаем false
            }
        }
    }
    if(stack.length !== 0) return false;
    return true;
}

console.log(checkBrackets("((())"));
