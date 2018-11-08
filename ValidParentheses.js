function validParentheses(str){
  
  if(str.length===0){return true;}
  if(str[0]===")"||str[str.length-1]==="("){
    return false;
  }else{ 
    if(str[1]===")"){
      return validParentheses(str.slice(2));
    }else {
     var index=str.indexOf(")");
     return validParentheses(str.slice(0, index-1) + str.slice(index + 1));
    }
  }
}
