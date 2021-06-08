import React, { Component } from 'react'

export default class MegaMenuMobile extends Component {

    constructor(){
        super();
        this.megaMenu=this.megaMenu.bind(this);
    }
    
    componentDidMount(){
        this.megaMenu();
    }
    
    megaMenu(){
        var acc=document.getElementsByClassName("accordionMobile");
        var accNum=acc.length;
        let i;
        for(i=0; i< accNum; i++){
            acc[i].addEventListener("click", function(){
                this.classList.toggle("active");
                var panel=this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight=null; 
                }else{
                    panel.style.maxHeight=panel.scrollHeight+"px";
                }
            })
    
        }
    }




    render() {
        return (
            <div  className="accordionMenuDivMobile w-50%">
                 <div   className="accordionMenuDivInsideMobile">
                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>

                     </div>
                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>


                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>


                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>


                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>


                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>

                     <button className="accordionMobile"><img className="accordionMenuIconMobile" src="/images/T-shirt.svg" />Men's Clothing</button>
                     <div className="panelMobile">
                     <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            
                        </ul>

                     </div>

                 </div>
                </div>
        )
    }
}
