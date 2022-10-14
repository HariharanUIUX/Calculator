	

function calculate(){
	var arr1=[];			// store input value in array
	var arr2=[];			// store pre value in array			
	var arr3=[];			// store post value in array
	var symbol;			// store symbol separetly in variable
	var pre=0;		
	var post=0;								
	var ans=frm.val.value;							
	var size=ans.length;							
	var result=0;								
	var checks=1;

	//alert("Input Values: "+ans + " ");
	//alert("Size of Input: "+size);

for(var i=0;i<size;i++){			// create for loop


	arr1[i]=ans.charAt(i);				// assign each character value in arr1
	
	temp=parseInt(arr1[i]);				// create temp variabe to store arr1 value in number

	if(isNaN(arr1[i]*1)){
		symbol=arr1[i];				// condition used to pick what symbol is present
			
		}			

	if(checks==1){
				
		
	if(!isNaN(temp*1)) {				

			
			arr2[pre]=temp;			//split pre value in input from present of symbol
		
			pre++;				// store a pre value in arr2
		
			}	
	else {
		checks=2;				// else used for Not a number is present
		}

	}	

	if(checks==2){

		if(!isNaN(temp*1)){			//store a post value in arr3
			arr3[post]=temp;
			post++;
				}

			}				
		}

	arr2=arr2.join('');
	arr3=arr3.join('');				//combine each char as single value

	//alert("pre value " +arr2);
	//alert("post value " +arr3);
	
	arr2=parseInt(arr2);
	arr3=parseInt(arr3);				//pass single value in number
	
	


	switch(symbol){					//check what symbol is entered

		case '+':					
			result=arr2+arr3;
			break;
		case '-':
			result=arr2-arr3;
			break;
		case '*': 
			result=arr2*arr3;
			break;
		case '/':	
			result=arr2/arr3;
		break;
		case '+':
			result= -arr2+arr3;
			break;
	} 
	
	document.getElementById("dis").value=result;

}