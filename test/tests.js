const test = QUnit.test;

function subtract(x, y) {
    return x - y;
}



test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 12;
    const y = 6;
    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    
    const minus = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(minus, expected);
});


function multiply(x, y) {
        return x * y;
    }

test('multiply function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 4;
    const y = 3;
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    
    const mult = multiply(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(mult, expected);
});

function divide(x, y) {
    return x / y;
}

test('divide function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 7;
    const y = 0;
    const expected = Infinity;

    //Act 
    // Call the function you're testing and set the result to a const
    
    const div = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(div, expected);
});

function isEven (x) {
    return x % 2 === 0
}

test('isEven function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    
    const even = isEven(x);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(even, expected);
});

    function getNumbers (upTo) {
        const numbers = [];
        for (let i = 5; i <= upTo; i++) {
            numbers.push(i);
        }
        return numbers;
    }


test('getNumbers function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const upTo = 12;
    const expected = [5, 6, 7, 8, 9, 10, 11, 12];

    //Act 
    // Call the function you're testing and set the result to a const
    
    const numbers = getNumbers(upTo);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(numbers, expected);
});


    function getEvens (evens) {
        const evenNumbers = [];
        for (let i = 2; i <= evens; i++) {
            const evenArray = i % 2 === 0;
            if 
    }


test('getEvens function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const evens = 10
    const expected = [2, 4, 6, 8, 10];

    //Act 
    // Call the function you're testing and set the result to a const
    
    const goat = getEvens(evens);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(goat, expected);
});