module.exports = function check(str, bracketsConfig) {
  let openBracketsConfig = [];
  let closeBracketsConfig = [];
  let closeBrackets=[];
  let openBrackets= [];
  let countLine = [];
  let isWrong = false;
  bracketsConfig.forEach((element, i) => {
    console.log(bracketsConfig)
     openBracketsConfig.push(element[0]);
     closeBracketsConfig.push(element[1]);
    }
  );
  let array = str.split("");
    console.log("array", array);

  console.log("openBracketsConfig", openBracketsConfig);
  console.log("closeBracketsConfig", closeBracketsConfig);
  array.forEach(element => {
    let indexClose = closeBracketsConfig.indexOf(element);
    let indexOpen = openBracketsConfig.indexOf(element);
    console.log("------------------");
    console.log("element", element);
    if ((element === "|" || element === "7" || element === "8") && countLine.indexOf(element) != -1)
    {
      console.log("  if(element === "|" && countLine)");

      deleteFromOpenBrackets(openBrackets, closeBracketsConfig, openBracketsConfig, element);
      countLine.splice(countLine.indexOf(element), 1);

    } else {

      if (indexOpen!= -1) {
                    console.log(" if (indexOpen!= -1)");

        openBrackets.push(element);
         if(element === "|" || element === "7" || element === "8") {
            countLine.push(element);
         }

      } else if (indexClose!=-1) {
        console.log("openBrackets.length", openBrackets.length);
         if((openBrackets.length) === 0) {
                       console.log("dddd");

           isWrong = true;
         }
          console.log("else if (indexClose!=-1) ");
          deleteFromOpenBrackets(openBrackets, closeBracketsConfig, openBracketsConfig, element);
      }

                                  console.log("openBrackets", openBrackets);
                                  console.log("size", openBrackets.length);

    }


  })
  if (isWrong) {
    return false;
  }

  if (openBrackets.length > 0) {
    return  false;
  } else {
    return  true;
  }
}
function deleteFromOpenBrackets(openBrackets, closeBracketsConfig, openBracketsConfig, element) {
      let indexConfig = closeBracketsConfig.indexOf(element);
         console.log("CloseBract=", element);
      let size = openBrackets.length-1 ;
      if (openBrackets[size] == openBracketsConfig[indexConfig]) {

        openBrackets.pop();
      }
      console.log("openBrackets", openBrackets);


}
