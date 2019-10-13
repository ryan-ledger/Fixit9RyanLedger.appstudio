
btnsubmitWords.onclick=function(){
  if (inpStorynouns.value=="pineapple"||inpStorynouns.value=="cow"||inpStorynouns.value=="cat"||inpStorynouns.value=="wolf"||inpStorynouns.value=="dog"){
    if(inpstoryAdjs.value=="stormy"||inpstoryAdjs.value=="gloomy"||inpstoryAdjs.value=="bright"||inpstoryAdjs.value=="windy"||inpstoryAdjs.value=="rainy"){
      if(inpstoryVerbs.value=="jump"||inpstoryVerbs.value=="hide"||inpstoryVerbs.value=="fight"||inpstoryVerbs.value=="sleep"||inpstoryVerbs.value=="crawl"){
        lblmadLibs.value=(A "+inpStorynouns.value+" in Nebraska was arrested this morning after "+inpstoryVerbs.value+"ing in front of a "+inpstoryAdjs.value+" "+inpStorynouns.value+". The perpetrator had a history of "+inpstoryVerbs.value+"ing  but noone not even her "+inpStorynouns.value+" - ever imaginged shed "+inpstoryVerbs.value+" with a "+inpStorynouns.value+".Even her "+inpStorynouns.value+" was surprised. I always thought she was "+inpstoryAdjs.value+", but I hever thought shed do something like this. Either way, we imagine that after witnessing her "+inpstoryVerbs.value+" with a "+inpstoryAdjs.value+" "+inpStorynouns.value+", there are probably a whole lot of "+inpStorynouns.value+"s that are going to need therapy.")
      }else{
        lblmadLibs.value="Pick a word provided."
      }
    }else{
      lblmadLibs.value="Pick a word provided."
    }
        
  }else{
    lblmadLibs.value="Pick a word provided."
  }
}


btnresetStory.onclick=function(){
  inpStorynouns.value=""
  inpstoryAdjs.value=""
  inpstoryVerbs.value=""
  lblmadLibs.value=""
}