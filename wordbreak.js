
function myFunction() {

    document.getElementById("demo").innerHTML = Date();
}

function wordbreak() {
    var Input = document.getElementById("inputText").value;
    var error = "Invalid Input";

    if (Input == null || Input.length == 0) {
        document.getElementById("wordbreakdemo").innerHTML = error;
        return;
    }

    var arr = Input.split('');
 
    var sb = "";
    var resultstr = "";
    var finalresult = "";

    for ( i = 0; i < arr.length; i++)
    {
        sb = sb + arr[i];
        
        if (wordDict(sb) === true)
        {            
            resultstr = sb;
            sb = "";
            finalresult = finalresult + " " +  resultstr;
        }        
    }

    document.getElementById("wordbreakdemo").innerHTML = finalresult.toString();
 }

function wordDict(InputValue)
{
    var words = ["Saab", "Volvo", "BMW", "Toyota" , "Honda" , "Audi", "Tesla"];
    var returnval = false;
    //var words = ["a", "b", "c", "d" , "e" , "f", "g"];
    if (words.indexOf(InputValue) > -1)
    {  
        returnval = true;
    }
    return returnval;
}

function ReverseWords()
{
    var Input = document.getElementById("InputReverseWords").value;
    var error = "Invalid Input";

    if (Input == null || Input.length == 0) {
        document.getElementById("demoReverseWords").innerHTML = error;
        return;
    }

    var arr = Input.split(' ');

    var sb = new Array();
    var resultstr = "";
    var finalresult = "";

    for(i=arr.length -1 ; i >= 0;i--)
    {
        sb.push(arr[i]);
        finalresult = finalresult + arr[i] + " ";
    }
       
    document.getElementById("demoReverseWords").innerHTML = finalresult;
}

function WordLadder()
{
    //Input Values
    var start = document.getElementById("StartWord").value;
    var end = document.getElementById("EndWord").value;
    var dict = document.getElementById("strDictionary").value;

    if ((start == null || start.length == 0) || (end == null || end.length == 0) || (dict == null || dict.length == 0)) {
        document.getElementById("demoWordLadder").innerHTML = error;
        return;
    }
    
    //Split string with ',' and create an array.
    dict = dict.split(",");
    dict.push(end);
    //var str = "abcdefghijklmnopqrstuvwxyz";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //create two different array for words and distance count
    var wordQueue = new Array();
    var distanceQueue = new Array();
    var wordLadder = "";


    //push word and disrance to an array
    wordQueue.push(start);
    distanceQueue.push(1);

    //loop through each character in word and replace it with all alphabetical character 
    // and look for matching word in Dictionary. If it exist then add it to ladder and increase distance by 1.
    //remove matched word from a dictionary.
    var currWord, currDistance;

    while (dict.length > 0) {

        //get latest word and 
        if (wordQueue.length > 0 && distanceQueue.length > 0 )
        {
               currWord = wordQueue.pop();
               currDistance = distanceQueue.pop();
        }
        else
        {
            document.getElementById("demoWordLadder").innerHTML = "error";
            return;
        }
 
        if(currWord === end){
            return currDistance;
        }

        for(var i=0; i<currWord.length; i++)
        {
            var currCharArr = currWord.split("");

            for (var j = 0; j < str.length; j++)
            {
                currCharArr[i]= str[j];

                var newWord = currCharArr.join("");
   
                if (dict.indexOf(newWord) > -1)
                {
                    wordQueue.push(newWord);
                    distanceQueue.push(currDistance + 1);
                
                    var index = dict.indexOf(newWord);
                    dict.splice(index, 1);
                    wordLadder = wordLadder + newWord + " ";
                }
            }
        }     
    }
    document.getElementById("demoWordLadder").innerHTML = wordLadder + currDistance;
}

function ReversePolishNotation()
{
    var input = document.getElementById("InputReversePolishNotation").value;
    var arr = input.split(',');

    var stack = new Array();
    var specialchar = "+-*/";

    for (var i = 0 ; i < arr.length ; i++)
    {

        if( arr[i] >= 0 || arr[i] <= 9)
        {
            stack.push(parseInt(arr[i]));
        }
        else if (specialchar.indexOf(arr[i]) > -1 && stack.length >= 2)
        {
            var a = stack.pop();
            var b = stack.pop();
            var c ;

            switch(arr[i])
            {  
                case '*':
                     c = (a * b );
                     break;
                case '+' :
                     c = a + b;
                     break;
                case '-':
                    c = a - b;
                    break;
                case '/':
                    c = b/a;
                    break;
            }

            stack.push(c);
        }
        else
        {
            alert("Invalid Input value");
        }
    }

    var finalresult = stack.pop();
    document.getElementById("demoReversePolishNotation").innerHTML = finalresult;
}

function TwoSum()
{
    var input = document.getElementById("InputNumbers").value;
    var target = document.getElementById("target").value;

    var inputArr = input.split(',');
    var index = new Array();

    for (var i = 0 ; i < inputArr.length; i++)
    {
        for (var j = i + 1; j < inputArr.length; j++)
        {      
            var twosum = parseInt(inputArr[i]) + parseInt(inputArr[j]);

            if (twosum === parseInt(target))
            {
                index[0] = i + 1;
                index[1] = j + 1;
                break;
            }
        }
    }

    document.getElementById("demoTwoSum").innerHTML = index[0] + "," + index[1];
}

function TwoSum()
{
    var input = document.getElementById("InputNumbers").value;
    var target = parseInt(document.getElementById("target").value);

    var inputArr = input.split(',');
    var ht = {};
    var arr = new Array();
  
    for (var i = 0 ; i < inputArr.length; i++)
    {
        var value = parseInt(inputArr[i]);

        if (ht.hasOwnProperty(value))
        {
            arr[0] = ht[value];
            arr[1] = i;
            break;
        }
        else
        {
            ht[target - value] = i;
        }
    }

    document.getElementById("demoTwoSum").innerHTML = arr[0] + "," + arr[1];
}

function ThreeSum()
{
    var input = document.getElementById("3sumInputNumbers").value;
    var target = document.getElementById("3sumResult").value;

    var inputArr = input.split(' ');
    var index = new Array();

    var result = new Array();

    if (inputArr.length < 3)
        return ;
 
    // sort array
    inputArr.sort();
 
    for (var i = 0; i < inputArr.length - 2; i++) {

        // //avoid duplicate solutions
        if (i == 0 || inputArr[i] > inputArr[i - 1])
        { 
            var negate = -inputArr[i];
 
			var start = i + 1;
			var end = inputArr.length - 1;
 
			while (start < end)
			{
        //case 1
			    if (inputArr[start] + inputArr[end] == negate)
			    {
					var temp = "";
					temp = temp +inputArr[i] + " ";
					temp = temp + inputArr[start] + " ";
					temp = temp +inputArr[end] + " ";
 
					result.push(temp);
					start++;
					end--;

              //avoid duplicate solutions
					while (start < end && inputArr[end] == inputArr[end + 1])
						end--;
 
					while (start < end && inputArr[start] == inputArr[start - 1])
						start++;      
			    }
			    else if (inputArr[start] + inputArr[end] < negate)
			    {
                  start++;
			    }
			    else
			    {
				  end--;
                }
            } 
         }
    }
  
    var tempstr = ""
    for (i = 0; i < result.length; i++)
    {
        tempstr = tempstr + result.pop() + " ";
    }
 
    document.getElementById("demoThreeSum").innerHTML = tempstr;
}



function validParentheses()
{    
    var input = document.getElementById("InputString").value;

    if (input == null || input.length == 0) {
        document.getElementById("demoValidParentheses").innerHTML = "Invalid input";
        return;
    }
    var map = {
        "[": "]",
        "(": ")",
        "{": "}"
    };
    var charArray = input.split('');
    var stack = new Array();
    var bool = true;
    for( var i = 0 ; i < charArray.length ; i++)
    {
        if (map[charArray[i]]) {

            stack.push(charArray[i]);
           
        }
        else if (stack.length > 0) {

            var key = stack.pop();

            if (map[key] !== charArray[i])
            {
                bool = false;
                break;
            }          
        }
        else
        {
            bool = false;
            break;
        }
            
    }
 
    if (stack.length == 0  && bool == true)
    {
        document.getElementById("demoValidParentheses").innerHTML = "Valid Input" ;
    }
    else
    {
        document.getElementById("demoValidParentheses").innerHTML = "Invalid Input";
    }
}

function removeDuplicates() {
    var input = document.getElementById("Input").value;

    if (input == null || input.length == 0) {
        document.getElementById("demoRemoveDuplicates").innerHTML = "Invalid input";
        return;
    }

    var A = input.split(',');
    var ht = {};

    if (A.length < 2)
        return A;
 
    for (var i = 0; i < A.length; i++)
    {
        if (ht.hasOwnProperty(A[i]) == false) {
            ht[A[i]] = A[i];
        }
    }
    var value = "";

   Object.keys(ht).forEach(function (key) {
       value = value + ht[key] + ",";
        // iteration code
    })

    document.getElementById("demoRemoveDuplicates").innerHTML = value;   
}

function stringtoInteger()
{
    var stringInput = document.getElementById("stringInput").value;

    if (stringInput == null || stringInput.length == 0) {
        document.getElementById("demoRemoveDuplicates").innerHTML = "Invalid input";
        return;
    }

    stringInput = stringInput.trim();

    var flag = '+';

    // check negative or positive
    var i = 0;
    if (stringInput.charAt(0) == '-') {
        flag = '-';
        i++;
    } else if (stringInput.charAt(0) == '+') {
        i++;
    }

    // use double to store result
    var result = 0;

    // calculate value
    while (stringInput.length > i && stringInput.charAt(i) >= '0' && stringInput.charAt(i) <= '9')
    {
        result = result * 10 + (stringInput.charAt(i) - '0');
        i++;
    }

    if (flag == '-')
        result = -result;
 
    //// handle max and min
    //if (result > Integer.MAX_VALUE)
    //    return Integer.MAX_VALUE;
 
    //if (result < Integer.MIN_VALUE)
    //    return Integer.MIN_VALUE;
 
    document.getElementById("demostringtoInteger").innerHTML = result;
}


function MergeArray()
{
    var arrayA = document.getElementById("arrayA").value;
    var arrayB = document.getElementById("arrayB").value;

    var A = arrayA.split(',');
    var B = arrayB.split(',');
    var m = A.length;
    var n = B.length;
    var k = 0;
    var C = new Array();

    while (m > 0 || n > 0) {
        if (parseInt(A[m - 1]) > parseInt(B[n - 1]))
        {
            C[k] = A[m - 1];
            m--;
        }
        else if (parseInt(A[m - 1]) < parseInt(B[n - 1]))
        {
            C[k] = B[n - 1];
            n--;
        }
        else if (parseInt(A[m - 1]) == parseInt(B[n - 1]))
        {
            C[k] = A[m - 1];
            m--;
            n--;
        }
        else if(m > 0 && n ==0)
        {
            C[k] = A[m - 1];
            m--;
        }
        else if (m == 0 && n > 0) {
            C[k] = B[n - 1];
            n--;
        }
        k++;
    }

    //while (n > 0) {
    //    A[m + n - 1] = B[n - 1];
    //    n--;
    //}

    var str = "";
    for (var k = C.length -1 ; k >= 0; k--)
    {
        str = str + C[k] + ",";
    }

    document.getElementById("demoMergeArray").innerHTML = str;
}