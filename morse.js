//required to read from the file
const fs = require('fs');
//reqiuired for user input
const prompt = require('prompt-sync')({sigint: true});

function morseCodeTree() {
    return [
        'E', [
            'I', [
                'S', [
                    'H', [
                        '5', [null, null],
                        '4', [null, null]
                    ],
                    'V', [null,
                        '3', [null, null]]
                ],
                'U', [
                    'F', [null, null],
                    '', [null,
                        '2', [null, null]]
                ]
            ],
            'A', [
                'R', [
                    'L', [null, null],
                    '', [
                        '+', [null, null],
                        null
                    ]
                ],
                'W', [
                    'P', [null, null],
                    'J', [null,
                        '1', [null, null]]
                ]
            ]
        ],
        'T', [
            'N', [
                'D', [
                    'B', [
                        '6', [null, null],
                        '=', [null, null]
                    ],
                    'X', [
                        '/', [null, null],
                        null
                    ]
                ],
                'K', [
                    'C', [null, null],
                    'Y', [null, null]
                ]
            ],
            'M', [
                'G', [
                    'Z', [
                        '7', [null, null],
                        null
                    ],
                    'Q', [null, null]
                ],
                'O', [
                    '', [
                        '8', [null, null],
                        null
                    ],
                    '', [
                        '9', [null, null],
                        '0', [null, null]
                    ]
                ]
            ]
        ],
    ];
}

function read(file) {

    try {
        const data = fs.readFileSync(file, 'utf8')
        console.log('This is the morse code: ' , data);
        return data;
        } catch (err) {
        console.error(err)
    }
}


function translate(file) {
    const fileArray = file.split(" ");
    let word = "";
    for (let index = 0; index < fileArray.length; index++) {
        const morseLetter = fileArray[index];
        if (morseLetter === "/") {
            word += " ";
        } else {
            word += convert(morseLetter.split(""), morseCodeTree());
        }
        }
    console.log("This is translated morse code: ", word);
}

function convert(morse, treeLevel) {
    console.log(treeLevel);
    let letter = "";
    let nextTreeLevel;

    const dotDash = morse.shift(); // we assign first array element, and remove it from the list

    if (dotDash === ".") {
      // left

    letter = treeLevel[0];
    nextTreeLevel = treeLevel[1];
      if (morse.length !== 0) return convert(morse, nextTreeLevel); //we travers further only if there are still some dots or dashes in the letter
    } else if (dotDash === "-") {
      //right

    letter = treeLevel[2];
    nextTreeLevel = treeLevel[3];
      if (morse.length !== 0) return convert(morse, nextTreeLevel); //we travers further only if there are still some dots or dashes in the letter
    }

    return letter;
}


let userInput;

while (userInput !== 0) {

    console.log('\n');
    console.log('===============================================');
    console.log('=                  MAIN MENU                  =');
    console.log('===============================================');
    console.log('===============================================');
    console.log('=         Press 1 to select the file          =');
    console.log('=         Press 2 to select the file          =');
    console.log('=         Press 3 to select the file          =');
    console.log('=         Press 4 to select the file          =');
    console.log('=         Press 5 to select the file          =');
    console.log('===============================================');
    console.log('=           Press 0 to end program            =');
    console.log('===============================================');
    console.log('\n');

        // Get user input
        const num  = prompt('Please enter a number from 1 to 5 or 0 to finish.');
        console.log('\n');
         // Convert the string input to a number
        userInput = Number(num);

        console.log('You selected ' , userInput);
        console.log('\n');


    switch (userInput) {
        case 1:
            translate(read('file1.txt'));
            break;
        
        case 2:
            translate(read('file2.txt'));
            break;
                
        case 3:
            translate(read('file3.txt'));
            break;

        case 4:
            translate(read('file4.txt'));
            break;
                    
        case 5:
            translate(read('file5.txt'));
            break;
        
        case 0:
            console.log('Thank you,bye!');
            break;
        default:
            console.log('Invalid entry!\nPlease enter numbers from "1" to "5" or "0" to exit program.');
            break;
    }
}

