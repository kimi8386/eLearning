(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

/*Dinamicko ispisivanje*/


//navbar

let links = [
   
    {
        path : "index.html",
        text: "Home",
        isActive: true
    },
    {
        path : "index.html#about",
        text: "About",
        isActive: false
    },
    {
        path : "index.html#acourses",
        text: "Courses",
        isActive: false
    },
    {
        path : "index.html#contact",
        text: "Contact",
        isActive: false
    }
]


function napraviLink(link) {
    let html = `<a href="${link.path}" class="nav-item nav-link ${link.isActive ? 'active' : ''}">${link.text}</a>`;
    return html
}

let meni = ""

for(let link of links) {
    meni += napraviLink(link)
}

let navMeni = document.querySelector("#meni")

if(navMeni) {
    navMeni.innerHTML = meni
}



//courses

var courses=[
    {
        delay:{
            data:'0.1s'
        },
        imgCourses:{
            src: 'assets/img/course-1.jpg',
            alt: 'slika1'
        },
        cost:{
            money:'$50'
        },
        rec:{
            oc:'(58)'
        },
        cou:{
            rses:'Web Design & Development Course for Beginners'
        },
        plan:{
            ime:'John Doe',
            sat:'2 Hrs',
            broj:'40 Students'
        }
    },
    {
        delay:{
            data:'0.3s'
        },
        imgCourses:{
            src: 'assets/img/course-2.jpg',
            alt: 'slika2'
        },
        cost:{
            money:'$100'
        },
        rec:{
            oc:'(30)'
        },
        cou:{
            rses:'Online marketing & Video editing Course for Beginners'
        },
        plan:{
            ime:'Doris Jones',
            sat:'1.5 Hrs',
            broj:'30 Students'
        }
    },
    {
        delay:{
            data:'0.5s'
        },
        imgCourses:{
            src: 'assets/img/course-3.jpg',
            alt: 'slika3'
        },
        cost:{
            money:'$120'
        },
        rec:{
            oc:'(20)'
        },
        cou:{
            rses:'Web Desing & Graphic Design Course for Beginners'
        },
        plan:{
            ime:'Mark Johnson',
            sat:'1.5 Hrs',
            broj:'20 Students'
        } 
    }
]

var divCouses=document.getElementById('courses')

function napraviCourses(objCourses){
    let courses = `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${objCourses.delay.data}">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" src="${objCourses.imgCourses.src}" alt="${objCourses.imgCourses.alt}">
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h3 class="mb-0">${objCourses.cost.money}</h3>
                            <div class="mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small>${objCourses.rec.oc}</small>
                            </div>
                            <h5 class="mb-4">${objCourses.cou.rses}</h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>${objCourses.plan.ime}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>${objCourses.plan.sat}</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${objCourses.plan.broj}</small>
                        </div>
                    </div>
                </div>`;
return courses;
}
for(let objCourses of courses ){
    divCouses.innerHTML+=napraviCourses(objCourses);
}

//servise

var servise=[
    {   
        delay:{
            data:'0.1s'
        },
        icon:{
            on:'fa-graduation-cap'
        },
        op:{
            in:'Skilled Instructors'
        },
        p:{
            text:'We have very experienced professors in the fields of programming, editing, graphic design and online marketing'

        }
    },
    {
        delay:{
            data:'0.3s'
        },
        icon:{
            on:'fa-globe'
        },
        op:{
            in:'Online Classes'
        },
        p:{
            text:'We have online classes for those who want to learn from home'
        }
    },
    {   
        delay:{
            data:'0.5s'
        },
        icon:{
            on:'fa-home'
        },
        op:{
            in:'Home Projects'
        },
        p:{
            text:'We give them home projects to get used to working in the program environment and to get them to practice'
        } 
    },
    {
        delay:{
            data:'0.7s'
        },
        icon:{
            on:'fa-book-open'
        },
        op:{
            in:'Book Library'
        },
        p:{
            text:'We have a large and rich library with various books in the field of programming, editing and online marketing'
        }
    }
]

var divServise=document.getElementById('service');

function napraviService(objService){
    var service=`<div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="${objService.delay.data}">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x ${objService.icon.on} text-primary mb-4"></i>
                            <h5 class="mb-3">${objService.op.in}</h5>
                            <p>${objService.p.text}</p>
                        </div>
                    </div>
                </div>`;
return service;
}
for(let objServise of servise ){
    divServise.innerHTML+=napraviService(objServise);
}

//instruktors

var inst=[
    {
        delay:{
            data:'0.1s'
        },
        imginst:{
            src:'assets/img/team-1.jpg',
            alt:'slika1'
        },
        inst:{
            ime:'John Doe',
            pr:'Web Designer'
        }
    },
    {
        delay:{
            data:'0.3s'
        },
        imginst:{
            src:'assets/img/team-2.jpg',
            alt:'slika2'
        },
        inst:{
            ime:'Samantha Wagner',
            pr:'Digital Marketing'
        }
    },
    {
        delay:{
            data:'0.5s'
        },
        imginst:{
            src:'assets/img/team-3.jpg',
            alt:'slika3'
        },
        inst:{
            ime:'Mark Johnson',
            pr:'Graphic Designer'
        }
    },
    {
        delay:{
            data:'0.7s'
        },
        imginst:{
            src:'assets/img/team-4.jpg',
            alt:'slika4'
        },
        inst:{
            ime:'Doris Jones',
            pr:'Video Editor'
        }
    }
]

var divInstructors=document.getElementById('instruktors');

function napraviInstructore(objInstructors){
    var Instructors=`<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="${objInstructors.delay.data}">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="${objInstructors.imginst.src}" alt="${objInstructors.imginst.alt}">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href="https://x.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">${objInstructors.inst.ime}</h5>
                            <small>${objInstructors.inst.pr}</small>
                        </div>
                    </div>
                </div>`
return Instructors;
}
for (let objInstructors of inst){
    divInstructors.innerHTML+=napraviInstructore(objInstructors);
}

//select
Options = new Array('Web Desing', 'Online Markteting', 'Graphic Desing','Video Editing');
Values = new Array('web wesing', 'online markteting', 'graphic desing','video editing');

var Select = document.createElement('select');
Select.setAttribute('id', 'select');
Select.classList.add('form-select', 'form-select-lg', 'h-100');

var OptionFirst = document.createElement('option');
OptionFirst.setAttribute('value', '0');
var optionFirstContent = document.createTextNode('Select Courses');

OptionFirst.appendChild(optionFirstContent);
Select.appendChild(OptionFirst);


for (let i = 0; i < Options.length; i++) {
    var Option = document.createElement('option');
    Option.setAttribute('value', Values[i]);

    var optionContent = document.createTextNode(Options[i]);

    Option.appendChild(optionContent);
    Select.appendChild(Option);
}


document.getElementById('select').appendChild(Select);

//RegEx

var frstname=document.getElementById('name');
var frstnameRegEx=/^[A-Z][a-z]{2,15}$/

var lastname=document.getElementById('Surname');
var lastnameRegEx=/^[A-Z][a-zčćšđž]{4,20}$/

var email=document.getElementById('email');
var emailRegEx=/(@gmail\.com|yahoo\.com|ict\.edu\.rs)$/


var btn = document.getElementById('btn');
btn.addEventListener('click', validateForma);


erFirst = document.getElementById('erFirst');
erLast = document.getElementById('erLast');
errEmail = document.getElementById('erEmail');
errselet = document.getElementById('erselet');
errpol = document.getElementById('errpol');
erChb = document.getElementById('errChb');

success = document.getElementById('successMessage'); 


function validateForm() {

    numErr = 0; 

    var box = document.getElementsByName('box');
    var isChb2Checked = box[1].checked;

    if (!isChb2Checked) {
        setErrorStyle(erChb, '*You must agree to terms and conditions', 1);
    } else {
        
        setErrorStyle(erChb, '', 0);
    }

    
    var objpol = document.getElementsByName('radio1');
    var valuepol = '';
    for (let i = 0; i < objpol.length; i++) {
    if(objpol[i].checked){
        valuepol = objpol[i].value;
        break; 
    }
    }

    if(valueGender == ''){
        setErrorStyle(errpol, '*Not selected', 1);
    }
    else{
        
        setErrorStyle(errpol, '', 0);
    }



    const hasFirstNameError = !firstNameRegEx.test(firstName.value);
    setErrorStyle(erFirst, '*Invalid first name', hasFirstNameError);

    const hasLastNameError = !lastNameRegEx.test(lastName.value);
    setErrorStyle(erLast, '*Invalid last name', hasLastNameError);

    var select = document.getElementById('select');
    const hasDropdownError = select.options[select.selectedIndex].value == 0;
    setErrorStyle(errselet, '*Not selected', hasDropdownError);

    const hasEmailError = !emailRegEx.test(email.value);
    setErrorStyle(errEmail, '*Invalid email', hasEmailError);


    if (numErr == 0) {
        successMessage.innerHTML = 'Form submitted successfully!';
        successMessage.style.color = '#06BBCC';
        successMessage.style.display = 'block';
    } else {
        successMessage.innerHTML = '';
        successMessage.style.display = 'none';
    }

    
}
function setErrorStyle(errorElement, errorMessage, hasError) {
    errorElement.innerHTML = errorMessage;
    errorElement.style.color = hasError ? '#ff0000' : 'transparent';
    errorElement.style.display = hasError ? 'block' : 'none';

    if (!hasError) {
        errorElement.innerHTML = ''; 
        errorElement.style.display = 'none';  
    }

    //brojac gresaka
    if(hasError){
        numErr++;
    }
}