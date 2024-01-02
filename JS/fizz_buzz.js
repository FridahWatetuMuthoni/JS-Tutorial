function fizz_buzz(number)
{
    for(let i = 1; i < number + 1; i++){
        let str = ''

        if(i % 3 === 0){
            str += 'fizz'
        }
        if(i % 5 === 0){
            str += 'buzz'
        }
        console.log(str || i)
    }
}

fizz_buzz(20)