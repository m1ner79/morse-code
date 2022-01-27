const fs = require('fs');


const morseCodeTree = () => {
    return [
      'E',[
        'I',[
          'S',[
            'H',[
              '5',[null, null],
              '4',[null, null]],
            'V',[null,
              '3',[null, null]]],
          'U',[
            'F',[null, null],
            '',[null,
              '2',[null, null]]]],
        'A',[
          'R',[
            'L',[null, null],
            '',[
              '+',[null, null],
              null]],
          'W',[
            'P',[null, null],
            'J',[null,
              '1',[null, null]]]]],
      'T', [
        'N',[
          'D',[
            'B',[
              '6',[null, null],
              '=',[null, null]],
            'X',[
              '/',[null, null],
              null]],
          'K',[
            'C',[null, null],
            'Y',[null, null]]],
        'M',[
          'G',[
            'Z',[
              '7',[null, null],
              null],
            'Q',[null, null]],
          'O',[
            '',[
              '8',[null, null],
              null],
            '',[
              '9',[null, null],
              '0',[null, null]]]]],
    ];
  };
  

  fs.readFile('file1', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
  const file1 = '- .... .. ... / - --- --- .-.. / .-- --- .-. -.- ...';
  const file2 = '  -- --- .-. ... . / -.-. --- -.. .';
  const file3 = '... --- ..-. - .-- .- .-. . / -.-- . .- .-. / - .... .-. .';
  const file4 = '.. - -.-. .- .-. .-.. --- .--';
  const file5 = '-- .. -.-. .... .- .-..';
  // let fr = new FileReader();
  // let word = "";

  // document.getElementById('inputFile').addEventListener('change', function () {
    
  //   fr.onload = function () {
  //     document.getElementById('outputFile').textContent = fr.result;
  //   };

  //   fr.readAsText(this.files[0]);
  // });

  // document.getElementById('translate').onclick = translate(fr.result);
  // //document.getElementById('outputTranslation').textContent = word;
// console.log('\n');
// console.log('===============================================');
// console.log('=                  MAIN MENU                  =');
// console.log('===============================================');
// console.log('===============================================');
// console.log('=         1. PRESS 1 TO SELECT A FILE         =');
// console.log('=         2. PRESS 2 TO SELECT A FILE         =');
// console.log('=         3. PRESS 3 TO SELECT A FILE         =');
// console.log('=         4. PRESS 4 TO SELECT A FILE         =');
// console.log('=         5. PRESS 5 TO SELECT A FILE         =');
// console.log('===============================================');
// console.log('=            PRESS T TO TRANSLATE             =');
// console.log('=            PRESS F TO FINISH                =');
// console.log('===============================================');
// console.log('\n');

//const sound = require('play-sound')(opts = {})//('beep.wav');

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
    console.log("translated file:", word);
  }

  function convert(morse, treeLevel) {
    //console.log(treeLevel);
    let letter = "";
    let nextTreeLevel;

    const dotDash = morse.shift(); // we assign first array element, and remove it from the list

    if (dotDash === ".") {
      // left
      // sound.play('beep.wav', { timeout: 100 }, function(err){
      //   if (err) throw err
      // })
      letter = treeLevel[0];
      nextTreeLevel = treeLevel[1];
      if (morse.length !== 0) return convert(morse, nextTreeLevel); //we travers further only if there are still some dots or dashes in the letter
    } else if (dotDash === "-") {
      //right
      // sound.play('beep.wav', { timeout: 1000 }, function(err){
      //   if (err) throw err
      // })
      letter = treeLevel[2];
      nextTreeLevel = treeLevel[3];
      if (morse.length !== 0) return convert(morse, nextTreeLevel); //we travers further only if there are still some dots or dashes in the letter
    }

    return letter;
  }

  translate(file1);
  translate(file2);
  translate(file3);
  translate(file4);
  translate(file5);
  
  
  
  
  
  