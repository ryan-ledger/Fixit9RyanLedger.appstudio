
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

function lblcheckName(members,firstName){
  for(i=0;i<members.length;i++){
       if(intFirstName.value==members[i])
          return true
       return false
       }
}

btnsubmitName.onclick=function(){
    if (lblcheckName(members,inptFirstName)==true){
    Check.value="Your name is already available."
  }else if (lblcheckName(members,inptFirstName)==false){
    members.push(intFirstName.value)
    Check.value="New name added to list."
  }else{
    Check.value="Error try again."
  }
}
