import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";


export default class MegaMenu extends Component {

constructor(props){
    super();
    // this.megaMenu=this.megaMenu.bind(this);
}

componentDidMount(){
    // this.megaMenu();
}

OpenMenu=(event)=>{
    event.target.classList.toggle("active");
    var panel=event.target.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight=null; 
    }else{
        panel.style.maxHeight=panel.scrollHeight+"px";
    }
}



// it was used for static//

// megaMenu(){
//     var acc=document.getElementsByClassName("accordion");
//     var accNum=acc.length;
//     let i;
//     for(i=0; i< accNum; i++){
//         acc[i].addEventListener("click", function(){
//             this.classList.toggle("active");
//             var panel=this.nextElementSibling;
//             if(panel.style.maxHeight){
//                 panel.style.maxHeight=null; 
//             }else{
//                 panel.style.maxHeight=panel.scrollHeight+"px";
//             }
//         })

//     }
// }



    render() {

   let myList= this.props.data;
   let myView= myList.map((myList,i)=>{
       return <div key={i, toString()}>
                  <button onClick={this.OpenMenu} className="accordion"><img className="accordionMenuIcon" src={myList.parentCategoryImage} />{myList.parentCategoryName}</button>
                     <div className="panel">
                     <ul>{
                         (myList.subCategory).map((childList,i)=>{
                        //  return <li><a href="#" className="accordionItem">{childList.category2_name}</a></li>
                         return  <li key={i.toString()}>
                         <Link to={"ProductListBySubCategory/"+childList.cat1_name+"/"+childList.cat2_name} className="accordionItem">{childList.cat2_name}</Link>
                     </li>
                         })
                         
                         }
                            
                            </ul>

                        </div>


       </div>
   });








        return (
            
                <div  className="accordionMenuDiv w-50%">
                 <div   className="accordionMenuDivInside">

                    {myView}

            
                     
                 </div>
                </div>
                
            
        )
    }
}
