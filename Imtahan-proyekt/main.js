function closeNav() {
    const sidenav = document.getElementById("sideMenu");
    const sidenav1=document.getElementById("sideMenu-1");
    const sidebar_title=document.querySelectorAll(".sidebar-title")
    const kodaze=document.querySelectorAll(".kodaze")
    const a=document.querySelectorAll(".a")
    const hamburger_menu=document.getElementById("menu-outline")
    const sidebar_li=document.querySelectorAll(".sidebar-li>ion-icon")
    const sidebar_ul=document.querySelectorAll(".sidebar-ul")
    
    if (sidenav.classList.contains("left-side")==true) {
      hamburger_menu.setAttribute("name", "close-outline")
      sidenav.className="col-1";
      // sidenav.style.width="4.33333333%"
      sidenav.style.minWidth="68px"
      sidenav.style.maxWidth="68px"
      // sidenav.className+=" left-side";
      sidenav.style.backgroundColor="#073763";
      sidenav.style.color="#f2fbfe";
      sidenav.style.position="sticky"
      sidenav.style.top="0"
      sidenav.style.left="0"
      sidenav.style.overflow="auto"
      sidenav.style.height="100vh"
      sidebar_title.forEach(function(el){el.style.display="none"})
      kodaze.forEach(function(el){el.style.textAlign="center"})
      a.forEach(function(el){el.style.display="none"})
      sidebar_li.forEach(function(el){el.style.setProperty("margin-left", "0px", "important")})
      sidebar_ul.forEach(function(el){el.style.setProperty("margin-top", "20px", "important")})
      sidenav1.className="";
      sidenav1.style.width="100%"
      sidenav1.style.display="inline-block"
      sidenav1.className+="right-side";
    }else if(sidenav.classList.contains("col-1")==true){
      // alert("selemun alekum")
      hamburger_menu.setAttribute("name", "menu-outline")
      sidebar_title.forEach(function(el){el.style.display="inline-block"})
      kodaze.forEach(function(el){el.style.display="inline-block"})
      a.forEach(function(el){el.style.display="inline-block"})
      sidenav.style.display="inline-block"
      
      sidenav.className="";
      sidenav.style.minWidth="250px"
      sidenav.style.maxWidth="250px"
      sidenav.className+="left-side";

      sidenav1.className="";
      sidenav1.style.width="100%"
      // sidenav1.style.display="inline-block"
      sidenav1.className+="right-side";
    }
}

// function closeNavMobile(x){
//   const sidenav = document.getElementById("sideMenu");
//   const sidenav1=document.getElementById("sideMenu-1");
//   const sidebar_title=document.querySelectorAll(".sidebar-title")
//   const kodaze=document.querySelectorAll(".kodaze")
//   const a=document.querySelectorAll(".a")
//   const hamburger_menu=document.getElementById("menu-outline")
//   const sidebar_li=document.querySelectorAll(".sidebar-li>ion-icon")
//   const sidebar_ul=document.querySelectorAll(".sidebar-ul")
//   if (x.matches) {
//     if(sidenav.classList.contains("left-side")==true){
//       hamburger_menu.setAttribute("name", "close-outline")
//       sidenav.className="col-1";
//       // sidenav.style.width="4.33333333%"
//       sidenav.style.minWidth="68px"
//       sidenav.style.maxWidth="68px"
//       // sidenav.className+=" left-side";
//       sidenav.style.backgroundColor="#073763";
//       sidenav.style.color="#f2fbfe";
//       sidenav.style.position="sticky"
//       sidenav.style.top="0"
//       sidenav.style.left="0"
//       sidenav.style.overflow="auto"
//       sidenav.style.height="100vh"
//       sidebar_title.forEach(function(el){el.style.display="none"})
//       kodaze.forEach(function(el){el.style.textAlign="center"})
//       a.forEach(function(el){el.style.display="none"})
//       sidebar_li.forEach(function(el){el.style.setProperty("margin-left", "0px", "important")})
//       sidebar_ul.forEach(function(el){el.style.setProperty("margin-top", "20px", "important")})
//       sidenav1.className="";
//       sidenav1.style.width="100%"
//       sidenav1.style.display="inline-block"
//       sidenav1.className+="right-side";
//   }else if(sidenav.classList.contains("col-1")==true){
//     hamburger_menu.setAttribute("name", "menu-outline")
//     sidebar_title.forEach(function(el){el.style.display="inline-block"})
//     kodaze.forEach(function(el){el.style.display="inline-block"})
//     a.forEach(function(el){el.style.display="inline-block"})
//     sidenav.style.display="inline-block"
    
//     sidenav.className="";
//     sidenav.style.minWidth="250px"
//     sidenav.style.maxWidth="250px"
//     sidenav.className+="left-side";

//     sidenav1.className="";
//     sidenav1.style.width="100%"
//     // sidenav1.style.display="inline-block"
//     sidenav1.className+="right-side";
//   }
//   } else {
    
//   }

// }

// function closeNavMobile1(x){
//   const sidenav = document.getElementById("sideMenu");
//   const sidenav1=document.getElementById("sideMenu-1");
//   const sidebar_title=document.querySelectorAll(".sidebar-title")
//   const kodaze=document.querySelectorAll(".kodaze")
//   const a=document.querySelectorAll(".a")
//   const hamburger_menu=document.getElementById("menu-outline")
//   const sidebar_li=document.querySelectorAll(".sidebar-li>ion-icon")
//   const sidebar_ul=document.querySelectorAll(".sidebar-ul")
//   if (x.matches) {
//     if(sidenav.classList.contains("left-side")==true){
//       hamburger_menu.setAttribute("name", "close-outline")
//       hamburger_menu.style.setProperty("margin-right", "15px", "important")
//       sidenav.className="col-1";
//       // sidenav.style.width="4.33333333%"
//       sidenav.style.minWidth="68px"
//       sidenav.style.maxWidth="68px"
//       // sidenav.className+=" left-side";
//       sidenav.style.backgroundColor="#073763";
//       sidenav.style.color="#f2fbfe";
//       sidenav.style.position="sticky"
//       sidenav.style.top="0"
//       sidenav.style.left="0"
//       sidenav.style.overflow="auto"
//       sidenav.style.height="100vh"
//       sidebar_title.forEach(function(el){el.style.display="none"})
//       kodaze.forEach(function(el){el.style.textAlign="center"})
//       a.forEach(function(el){el.style.display="none"})
//       sidebar_li.forEach(function(el){el.style.setProperty("margin-left", "-3px", "important")})
//       sidebar_ul.forEach(function(el){el.style.setProperty("margin-top", "20px", "important")})
//       sidenav1.className="";
//       sidenav1.style.width="100%"
//       sidenav1.style.display="inline-block"
//       sidenav1.className+="right-side";
//   }else if(sidenav.classList.contains("col-1")==true){
//       hamburger_menu.setAttribute("name", "menu-outline")
//       hamburger_menu.style.setProperty("margin-right", "5px", "important")
//       sidebar_title.forEach(function(el){el.style.display="inline-block"})
//       kodaze.forEach(function(el){el.style.display="inline-block"})
//       a.forEach(function(el){el.style.display="inline-block"})
//       sidenav.style.display="inline-block"
      
//       sidenav.className="";
//       sidenav.style.minWidth="280px"
//       sidenav.style.maxWidth="280px"
//       sidenav.className+="left-side";

//       sidenav1.className="";
//       sidenav1.style.width="100%"
//       // sidenav1.style.display="inline-block"
//       sidenav1.className+="right-side";
//   }
//   } else {
    
//   }

// }

// var x = window.matchMedia("(max-width: 1497.6px)")
// closeNavMobile(x)
// x.addListener(closeNavMobile)

// var x = window.matchMedia("(min-width: 1497.6px)")
// closeNavMobile1(x)
// x.addListener(closeNavMobile1)




  

