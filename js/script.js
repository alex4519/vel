let knpPodMenu = document.querySelector(".knp_pod_menu");
let podMenu = document.querySelector(".navigation");
    knpPodMenu.addEventListener("click",function(){
      podMenu.classList.toggle("active_navigation");
    });


let knpAbout = document.querySelector(".knp_about");
let about = document.querySelector(".about");
    knpAbout.addEventListener("click",function(){
      about.scrollIntoView({
        block:"center",
        behavior:"smooth"
      });

    });


    let knpWork = document.querySelector(".knp_work");
    let work = document.querySelector(".work");
        knpWork.addEventListener("click",function(){
          work.scrollIntoView({
            block:"start",
            behavior:"smooth"
          });

        });


        let knpShop = document.querySelector(".knp_shop_two");
        let shop = document.querySelector(".container_knp_shop");
            knpShop.addEventListener("click",function(){
              shop.scrollIntoView({
                block:"end",
                behavior:"smooth"
              });

            });

          let knpContact = document.querySelector(".knp_contact");
          let contact = document.querySelector(".container_email");
                knpContact.addEventListener("click",function(){
                  contact.scrollIntoView({
                    block:"start",
                    behavior:"smooth"
                  });

                });


let productsItem = document.querySelectorAll(".products_item");
let box = document.querySelectorAll(".box");

    productsItem[0].addEventListener("mouseover",function(){
      box[0].classList.add("box_active");
    });

    productsItem[0].addEventListener("mouseout",function(){
      box[0].classList.remove("box_active");
    });

    productsItem[1].addEventListener("mouseover",function(){
      box[1].classList.toggle("box_active");
    });

    productsItem[1].addEventListener("mouseout",function(){
      box[1].classList.toggle("box_active");
    });

    productsItem[2].addEventListener("mouseover",function(){
      box[2].classList.add("box_active");
    });

    productsItem[2].addEventListener("mouseout",function(){
      box[2].classList.remove("box_active");
    });



    
