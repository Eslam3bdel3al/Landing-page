/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 */
// _________ My Work Eslam Abdelaal______________

const MyButton = document.getElementById("MyButton");
const MyHeader = document.querySelector(".page__header");

// define sections and the ul that li will be abbended to
const sections = document.getElementsByTagName('section');
const MyUl = document.getElementById('navbar__list');

//loop to dynamically add li for each section in the navbar
for (i=0 ; i<sections.length ; i++){
    
    //for each loop define the section selected and other sections
    const MySec = sections[i];
    const OtherSecId = [];
    for (a=0 ; a<sections.length ; a++){
        if (sections[a].id !== sections[i].id){
            OtherSecId.push(sections[a].id);
        }
    }    

    //create nav-menu
    const lis = document.createElement('li');
    lis.className="menu__link";
    lis.setAttribute('id' , "Li" + MySec.id);
    //when the the section is clicked from navbar the window scroll to the section and it is highlighted
    lis.addEventListener('click' , function(){
        window.scrollTo({
            left: 0,
            top: MySec.offsetTop,
            behavior: 'smooth'
        });
        
        MySec.setAttribute("class" , "your-active-class");
        lis.style.cssText = " background: #333; color: #fff;"; // this is to highlight the section in navbar
        //loop to remove the highlight from all other sections and from navbar too
        for (r=0 ; r < OtherSecId.length ; r++){
            document.getElementById(OtherSecId[r]).classList.remove("your-active-class");
            document.getElementById("Li" + OtherSecId[r]).style.removeProperty("background");
            document.getElementById("Li" + OtherSecId[r]).style.color = "#000";
        }
        
        // hide the navbar after selecting a section for clear readig
        MyHeader.style.display = "none";
        });
    lis.textContent = MySec.id;
    
    MyUl.appendChild(lis);
    
    //highlight the section when scroll through it
    window.addEventListener("scroll" , function(){
       if ( MySec.getBoundingClientRect().top <= 50){
        MySec.setAttribute("class" , "your-active-class");
        lis.style.cssText = " background: #333; color: #fff;"; // this is to highlight the section in navbar
        //loop to remove the highlight from all other sections and from navbar too
        for (s=0 ; s < OtherSecId.length ; s++){
            document.getElementById(OtherSecId[s]).classList.remove("your-active-class");
            document.getElementById("Li" + OtherSecId[s]).style.removeProperty("background");
            document.getElementById("Li" + OtherSecId[s]).style.color = "#000";
        }
       }
    });
}
// open navbar an close

MyButton.addEventListener('click' , function(){
    MyHeader.style.display = "block";
    });

window.onscroll = function(){MyHeader.style.display = "none";};