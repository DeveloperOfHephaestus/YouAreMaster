
//Developed By (Developer of Hephaestus)
//Do some support if you are using it thank you !


//This is Advance way of creating DOM by js 
 
//Uses Super Objects to invoke Different classes

//Used Inheritance and Super objects 
//Include this file in your html as <script src="The-DOM.js"></script>   and then add your own script have fun
//You can also just copy this whole and paste in your script and use it
//Or you can import the {Advance_DOM} class and use it 


class Hyper_DOM{
   
  SpeakAPI=class YouWillSpeak{
    Utterance=undefined;
    Trigger=undefined
    constructor (messageTOSpeak,SpeakTrigger){
     this.Trigger=SpeakTrigger;
     this.Utterance=new SpeechSynthesisUtterance(messageTOSpeak); //This is the API that i have created my own
     this.speakingNow()
    }
    speakingNow(){
        
        if(this.Utterance==undefined)
        console.error("No message was written");
        else 
        {if(this.Trigger==true)speechSynthesis.speak(this.Utterance);
        else console.warn("Triiger is not true so i am not speaking now");
        }
    }
}
DOM_Horus=class DOM_Horus{
    Element_To_Create={
        asDOM:undefined,
        thisMany:undefined,
        Styling:undefined,textContent:undefined
    };
    DOMElements=[];
    Appendthis=undefined;
    IDS=[];
    constructor(Elements_Type_To_Create="",How_Many=0,StyleOfElement="",textToShow="",What_to_Append){
     this.Element_To_Create.asDOM=Elements_Type_To_Create;
     this.Element_To_Create.thisMany=How_Many;
     this.Element_To_Create.Styling=StyleOfElement;
    this.Element_To_Create.textContent=textToShow;
    this.Appendthis=What_to_Append;
    if(typeof What_to_Append!="object")console.warn("Horus can append only html elements, this is not html element")
    try {
        for(let i=0;i<=How_Many-1;i++){
            this.DOMElements[i]=document.createElement(this.Element_To_Create.asDOM)
            this.Appendthis.appendChild(this.DOMElements[i]);
            this.DOMElements[i].style=this.Element_To_Create.Styling;
            if(this.Element_To_Create.textContent==""){
                this.DOMElements[i].textContent="";
                console.warn("There is no text content for children ");
            }
            else {
                this.DOMElements[i].textContent=this.Element_To_Create.textContent;
            }
        }
      //  this.Shift_Children_Randomly();

    } catch (error) {
        
      
            console.error("Horus can only create DOM elements , not a JS varriable")
       
       
    }

    }
    Destroy_Children(Children_To_Destroy="which children to destroy (first) or (last) ",Quantity=0){
        if(Children_To_Destroy.includes("all")){
            for(let i=0;i<=this.DOMElements.length-1;i++)
            document.body.removeChild(this.DOMElements[i])
            console.warn(" as you didnt specify the number or identity of childen so Horus have destroyed all its Children")
        }
        if(Children_To_Destroy.includes("first")&&Quantity!=0)
        {for(let i=0;i<Quantity-1;i++){
            document.body.removeChild(this.DOMElements[i])
            console.warn("Horus have destroyed its first "+Quantity+" children ");
        }

        }
        if(Children_To_Destroy.includes("last")&&Quantity!=0)
        {for(let i=this.DOMElements.length-1;i>Quantity;i--){
            document.body.removeChild(this.DOMElements[i])
            console.warn("Horus have destroyed its last "+Quantity+" children ");
        }

        }

    }
    Shift_Children_Randomly(){
        for(let i=0;i<=this.Element_To_Create.thisMany-1;i++){
            let l=Math.floor(Math.random()*90);
            let t=Math.floor(Math.random()*90);
            if(this.Element_To_Create.Styling.includes("absolute")||this.Element_To_Create.Styling.includes("relative")){
                this.DOMElements[i].style.left=l+"%";
                this.DOMElements[i].style.top=t+"%";
            }
            else {
                console.warn("Horus will not shift children because you did not set CSS position to either relative or absolute");
            }
        //    this.Make_Children_Responsive_Normal("click"); //by default i have set them click event
        }
    }
    Make_Children_Responsive_Normal(What_Kind_of_Responsive="",What_They_do_In_function){
        for(let i=0;i<=this.Element_To_Create.thisMany-1;i++){
            this.DOMElements[i].addEventListener(What_Kind_of_Responsive,What_They_do_In_function,true);
        }
        console.log("Children have made Responsive by as  "+What_Kind_of_Responsive+"and they will execute callback you passed");
    }
    ID_Assigner(ID_Array=[]){
        for(let i=0;i<this.DOMElements.length;i++){
            this.DOMElements[i].id=ID_Array[i];
            this.IDS=ID_Array;
        }
    }
}
Random_Element_Placer=class RandomPlaceDOMGroupArray{
    Top={
        max:undefined,min:undefined
    };
    Left={
        max:undefined,MIN:undefined
    };
   ToPlace=[];
  
    constructor(Array,minTop,maxTop,minLeft,maxLeft)
    { this.ToPlace=Array;
        this.Left.MIN=minLeft;
        this.Left.max=maxLeft;
        this.Top.max=maxTop;
        this.Top.min=minTop;

   if(typeof Array!="object"){
    console.error("This can  only be used on DOM elements");
    if(Array[0].style.position!="relative"||Array[0].style.position!="absolute")
    console.error("Placement can only be applied when CSS Position is either absolute or relative");
   }
   else{

   if(minTop>maxTop)console.warn("The Minimum Top property is greater than Maximum ");
   if(minLeft>maxLeft)console.warn("The Minimum Left property is greater than Maximum ");


   this.placeNow()
   }

    }
    placeNow(){
        for(let i=0;i<this.ToPlace.length;i++){
          let top=Math.floor(Math.random()*(this.Top.max+1))
          if(top<this.Top.min){
             top=Math.floor(Math.random()*(this.Top.max+1))
          }

          let left=Math.floor(Math.random()*(this.Left.max+1))
          if(left<this.Left.MIN){
             left=Math.floor(Math.random()*(this.Left.max+1))
          }
          this.ToPlace[i].style.left=left+"%";
          this.ToPlace[i].style.top=top+"%";

        
        }
    }
  
}

DOM_Behemoth=class DOM_Behemoth{
    test=document.createElement("form");  //this is to check if target is form or not
       Forum={
           inDOM:[] ,   //to get the input elements
           inputs:[],  //to get the input elements seperately
           inputs_values:[],  //to store input values
           Submittion_Trigger:undefined ,
           id:undefined //for future use
       };
       DataBase={
           inputs_values:[], inputs_placeholders:[]
       }
       Action=undefined;
       constructor(Target_Forum_id="",Redirect_or_Action=""){
           if(typeof document.getElementById(Target_Forum_id)!=typeof this.test){
               alert("Hey ! the target is not a form html element ,please write inputs in a form tag");
               console.error("Hey ! the target is not a form html element ,please write inputs in a form tag");
           }
           else { if(!Redirect_or_Action.includes(".html")){
            console.warn("You have not set the action on form , usually its another html page , so pass it now");
           }
               this.Forum.id=Target_Forum_id;
           this.Forum.inDOM=document.getElementById(Target_Forum_id).getElementsByTagName("input");
            this.Action=Redirect_or_Action;
            if(Redirect_or_Action=="") alert("Forum action is not added please pass a forum action you want ");
            else  document.getElementById(Target_Forum_id).action=this.Action;
          for(let i=0;i<this.Forum.inDOM.length;i++){
           this.Forum.inputs[i]=this.Forum.inDOM[i]
           this.Forum.inputs_values[i]=this.Forum.inputs[i].value;
          }
          try{
        this.Forum.Submittion_Trigger=document.getElementById(Target_Forum_id).getElementsByTagName("button");
       console.log("Forum is submitted by this"+this.Forum.Submittion_Trigger)}
        catch{ console.error("DOM behemoth only works when submit is a button  ");
  
        }
        this.DataBase.inputs_values=this.Forum.inputs_values;
        for(let i=0;i<this.Forum.inputs.length;i++)
        this.DataBase.inputs_placeholders[i]=this.Forum.inputs[i].placeholder;
        localStorage.setItem("Placeholders",this.DataBase.inputs_placeholders.toString());
  localStorage.setItem("values",this.DataBase.inputs_values.toString());
        console.log(this.DataBase);
       }
       }
   Erase_All_Data(){
       this.DataBase.inputs_placeholders=null;
       this.DataBase.inputs_values=null;
       this.Forum.inDOM=null;
       this.Forum.inputs=null;
       this.Forum.inputs_values=null;
       console.warn("Behemoth have erased its data ");
       localStorage.clear();
  
   }
   Replicate_itself(How_many_times=0){
     let Behemoths=[];
       for(let i=0;i<=How_many_times-1;i++)
     {Behemoths[i]=new DOM_Behemoth(this.Forum.id,this.Action);
      localStorage.setItem("Behemoth "+i+" | Placeholdres ",Behemoths[i].DataBase.inputs_placeholders.toString() )
      localStorage.setItem("Behemoth "+i+" | values ",Behemoths[i].DataBase.inputs_values.toString() )
      
      alert("Behemoth have replicated itself , open console");
       console.warn("Behemoth replicated itself ");
     }
   }
  Show_Data() //to display data on other page use this fxn ,copy this whole function and paste in code !
   {     try {
       let Data={
       placeholdres:localStorage.getItem("Placeholders").split(",") , values:localStorage.getItem("values").split(",")
   }
   for(let i=0;i<Data.placeholdres.length;i++){
     let th=document.createElement("th");
     th.textContent=Data.placeholdres[i];
     document.querySelector("table").querySelector("tr").appendChild(th);
   }
   for(let i=0;i<Data.values.length;i++){
       let td=document.createElement("td");
     td.textContent=Data.values[i];
     document.querySelector("table").lastChild.appendChild(td);
   }
   } catch (error) {
       console.warn("Looks Like Behemoth was never created or Destroyed its data");
       let warn=document.createElement("h2");
       warn.textContent="Looks Like Behemoth was never created or Destroyed its data";
       document.body.appendChild(warn);
       
   }
  
   }
  
   }
   DOM_Activator=class DOM_Activator{
    //picks the html element and makes it AI
    Target_id=undefined;
    Activation_Ability=undefined;
    Purpose_for_Activation="undefined";
    Picked_Element={
        id:undefined,style:undefined
        ,value:undefined,DOM_events:[],
        inDOM:undefined, 
        Reveal:function(Trigger=false)  //this can be used to reveal the element
        {
            if(Trigger==true){
            document.getElementById(this.id).style.backgroundColor="red";
            document.getElementById(this.id).style.zIndex="3";
            document.getElementById(this.id).innerHTML="i am here on page";
            document.getElementById(this.id).style.position="absolute";
        }
         }
}
EventsOnMe=[];
AppendingFrom=undefined;

    constructor(Target_id="",Purpose="",Activation_Ability=0){
        this.Picked_Element.id=Target_id;
        this.Target_id=Target_id;
        this.Activation_Ability=Activation_Ability;
console.warn("Element is made active ,If element has red background it is active ,if not it means it is not revealig itself , To make it reveal itself call the Reveal function of element in Picked-Element");
     this.Purpose_for_Activation=Purpose;
     this.Picked_Element.inDOM=document.getElementById(this.Picked_Element.id);
     this.Picked_Element.style=document.getElementById(this.Picked_Element.id).style;
     this.Picked_Element.value=document.getElementById(this.Picked_Element.id).value;
     if(Activation_Ability>50)
     this.Events_Getter()
     else console.warn("Activation ability is less than 50 , so respond function is not called automatically ! but you can call it when you need");

    }
    Events_Getter(id=undefined){   //currently supports getting info about click,mouseover,mouseleave,rightclick,dblclick,onplay,onpause,mousemove
        //Only works when DOM events are called in html like onclick="" , onmouseleave="" etc
        id=this.Target_id;

       this.Picked_Element.DOM_events.push("click event test : "+document.getElementById(id).onclick);
       if(this.Picked_Element.DOM_events[0].includes("function"))console.warn("Click event is present on me");
       else console.error("Click event is not found in html");

       this.Picked_Element.DOM_events.push("Mouseleave event test : "+document.getElementById(id).onmouseleave);
       if(this.Picked_Element.DOM_events[1].includes("function"))console.warn("Mouseleave event is present on me");
       else console.error("Mouseleave event is not found in html");

       this.Picked_Element.DOM_events.push("dblclick event test : "+document.getElementById(id).ondblclick);
       if(this.Picked_Element.DOM_events[2].includes("function"))console.warn("dblClick event is present on me");
       else console.error("dblClick event is not found in html");

       this.Picked_Element.DOM_events.push("Mouseover event test : "+document.getElementById(id).onmouseover);
       if(this.Picked_Element.DOM_events[3].includes("function"))console.warn("Mouseover event is present on me");
       else console.error("Mouseover event is not found in html");

       this.Picked_Element.DOM_events.push("Right click event test : "+document.getElementById(id).oncontextmenu);
       if(this.Picked_Element.DOM_events[4].includes("function"))console.warn(" Right Click event is present on me");
       else console.error("Right Click event is not found in html");

       this.Picked_Element.DOM_events.push("Play event test : "+document.getElementById(id).onplay);
       if(this.Picked_Element.DOM_events[5].includes("function"))console.warn(" Play event is present on me");
       else console.error("Play event is not found in html");

       this.Picked_Element.DOM_events.push("Pause event test : "+document.getElementById(id).onpause);
       if(this.Picked_Element.DOM_events[6].includes("function"))console.warn(" Pause event is present on me");
       else console.error("Pause event is not found in html");

       this.Picked_Element.DOM_events.push("MouseMove event test : "+document.getElementById(id).onmousemove);
       if(this.Picked_Element.DOM_events[7].includes("function"))console.warn(" MouseMove event is present on me");
       else console.error("Mousemove event is not found in html");
       
       console.log(this.Picked_Element.DOM_events);
       this.EventsOnMe=this.Picked_Element.DOM_events;
       this.AppendingFrom=this.Picked_Element.inDOM.parentElement
//No need of finding event listerners as they can be viewed in chrome
if(this.Activation_Ability>50)
this.Make_Respond();
}
Make_Respond(){
    let speakutterances=["i am a "+ this.Picked_Element.inDOM,"i was appended from "+this.AppendingFrom,"my background color red shows i am active",
"my purpose for activation was "+this.Purpose_for_Activation];

 for(let i=0;i<this.EventsOnMe.length;i++){
    if(this.EventsOnMe[i].includes("function"))
    speakutterances.push("i am responsive to this dome event "+this.EventsOnMe[i]);
    else speakutterances.push(" i do not have this dome event "+this.EventsOnMe[i]+" in html but maybe in js");

 }

for(let i=0;i<speakutterances.length;i++){
    let x=new SpeechSynthesisUtterance(speakutterances[i]);
     x.rate=1.5;
    speechSynthesis.speak(x);
    console.log(x.text);
   
}

    


}
}

}
export class Advanced_DOM extends Hyper_DOM{
    InternalData={
        //for Horus
        //will be extended for AI use
        //for Horus

        //for Speaker
        
        //for Speaker

        //for placer
        
        //for placer

        //for Behemoth
        

    }
SuperObject_Horus={invoker:this.DOM_Horus,   //Super object invoking Horus
ElementsToCreate:undefined,HowMany:undefined,
CSS:undefined,
  
}

SuperObject_Speaker={invoker:this.SpeakAPI, //Super Object invoking Speaker
messageTOSpeak:undefined,
        Trigger:undefined,
}

SuperObject_HtmlPlacer={ invoker:this.Random_Element_Placer, //Super object invoking Placer
eArray:[],minTop:undefined,maxTop:undefined,minLeft:undefined,maxLeft:undefined,

}
SuperObject_Behemoth={ invoker:this.DOM_Behemoth,  //Super object invoking Behemoth
    
Target_Forum_id:undefined,
        Action:undefined
}
SuperObject_DOM_Activator={
    invoker:this.DOM_Activator //Super Object inoking Activator which makes html element respond like AI
}
NameofDOM=undefined;
constructor(NameofDOM=""){
    if(NameofDOM=="")console.warn("Advance DOM is invoking double times , to stop this , please pass Name of DOM in Advance_DOM");
    super();
   this.NameofDOM=NameofDOM;
   console.warn("Your DOM is created with Name "+this.NameofDOM);
    console.log("Advanced DOM is Active now !.first invoke Advance_DOM class and then invoke the Super_Object (properties of Advance_DOM class) you want to use");
    //alert("Advanced DOM is Active now !.first invoke Advance_DOM class and then invoke the Super_Object you want to use");
}

    

}

