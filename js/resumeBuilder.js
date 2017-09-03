var bio = {
    "name": "Claudia Estupinan",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(+57) 313 355 1203",
        "email": "claudiainbytes@gmail.com",
        "github": "claudiainbytes",
        "twitter": "@claudiainbytes",
        "blog": "http://claudiainbytes.wordpress.com",
        "location": "Bogotá, Colombia"
    },
    "welcomeMessage": "Expert in nothing, eternal learner",
    "skills": ["patient", "creative", "enthutiastic", "fun"],
    "bioPic": "images/biopic.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Seidor Colombia",
            "title": "SSR PHP Developer",
            "dates": "JAN 2016 - FEB 2017",
            "location": "Bogotá, Colombia",
            "description": "MINTIC Territorial Platforms. Develop requirements under the ActionApps CMS architecture at the back end, and HTML, CSS, Javascript at the front end."
        },
        {
            "employer": "Pontificia Universidad Javeriana",
            "title": "PHP Laravel Junior Web Developer",
            "dates": "JUN 2015 - AGO 2015",
            "location": "Bogotá, Colombia",
            "description": "Requirement analysis, development and testing modules of the research information system application - as know as SIAP - with Laravel and Angular.JS."
        },
        {
            "employer": "Universidad Manuela Beltrán",
            "title": "PHP Web Developer",
            "dates": "APR 2013 - JUL 2014",
            "location": "Bogotá, Colombia",
            "description": "Develop and support PHP modules of the academic information system application AULANET."
        },
        {
            "employer": "LGL LatinMedios",
            "title": "Web Developer",
            "dates": "ENE 2012 - FEB 2013",
            "location": "Bogotá, Colombia",
            "description": "Develop and support websites and projects for digital marketing campaigns using Codeigniter PHP Framework, HTML5 and jQuery."
        },
        {
            "employer": "Ennovva",
            "title": "Junior Web Developer",
            "dates": "MAR 2011 - NOV 2011",
            "location": "Bogotá, Colombia",
            "description": "Develop and support websites, landing pages with PHP, jQuery and Drupal 6 y 7."
        }
    ]
};

var education = {
    "schools": [
        {
          "name": "American School Way",
          "location": "Bogotá, Colombia",
          "degree": "English Course",
          "majors": ["Level B2.1", "Level B2.2", "Level C1"],
          "dates": "2016 - 2017"
        },
        {
          "name": "Universidad Santo Tomás",
          "location": "Bogotá, Colombia",
          "degree": "Multimedia Management Specialization",
          "majors": ["Planning", "Digital contents", "Applications", "Business model"],
          "dates": "2013 - 2015"
        },
        {
          "name": "Universidad Simón Bólivar",
          "location": "Cúcuta, Colombia",
          "degree": "Computer Systems Engineering",
          "majors": ["CS"],
          "dates": "2000 - 2006"
        },
        {
          "name": "Colegio Cardenal Sancha",
          "location": "Cúcuta, Colombia",
          "degree": "Secondary School",
          "majors": ["Science"],
          "dates": "1989 - 1999"
        }
    ],
    "onlineCourses": [
        {
          "title": "Front-End Web Developer",
          "school": "Udacity",
          "dates": "JUN 2017 - now",
          "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
          "title": "ES6 Fundamentals",
          "school": "Udemy",
          "dates": "AUG 2017",
          "url": "https://www.udemy.com/ecmascript-6-es2015"
        },
        {
          "title": "Javascript Fundamentals",
          "school": "Udemy",
          "dates": "JUL 2017",
          "url": "https://www.udemy.com/javascript-de-cero-hasta-los-detalles"
        },
        {
          "title": "Intro To Ruby Programming",
          "school": "Udemy",
          "dates": "JUNE 2017",
          "url": "https://www.udemy.com/curso-ruby-rails/"
        },
        {
          "title": "Angular JS",
          "school": "Udemy",
          "dates": "MAY 2017",
          "url": "https://www.udemy.com/aprende-angularjs-facilmente/"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "JanKenPo!",
            "dates": "2017",
            "description": "The popular game as known as Rock, Paper or Scissors. Made using Javascript to understand functions as objects.",
            "images": ["11-img-small.jpg", "11-img-small-2.jpg"],
            "url": "https://github.com/claudiainbytes/jankenpo"
        },
        {
            "title": "Ruby Sinatra Workshops School",
            "dates": "2017",
            "description": "This is a demo app to create workshops using Ruby and Sinatra. Milligram as micro CSS Framework.",
            "images": ["12-img-small.jpg","12-img-small-2.jpg"],
            "url": "https://github.com/claudiainbytes/ruby-sinatra-workshops-school"
        },
        {
            "title": "User and Roles",
            "dates": "2017",
            "description": "Basic app using MVC model view controler in PHP.",
            "images": ["13-img-small.jpg", "13-img-small-2.jpg"],
            "url": "https://github.com/claudiainbytes/users-and-roles-mvc"
        }
    ]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    this.contactInfo("#topContacts");

    HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(HTMLbioPic);

    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(HTMLwelcomeMsg);

    if( bio.skills.length > 0 ) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    }

};

bio.contactInfo = function(idContactInfo){

    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(idContactInfo).append(HTMLmobile);

    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    $(idContactInfo).append(HTMLemail);

    HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $(idContactInfo).append(HTMLtwitter);

    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $(idContactInfo).append(HTMLgithub);

    HTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
    //$(idContactInfo).append(HTMLblog);

    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(idContactInfo).append(HTMLlocation);

};

education.display = function() {

    this.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        formattedName += " " + HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedName);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        if(school.majors.length > 0) {

            var majors = " ";
            school.majors.forEach(function(major, i, arr) {
                    if (i < (arr.length - 1)) {
                        majors += major + ", ";
                    } else { 
                        majors += major;
                    }
            });

            var formattedMajor = HTMLschoolMajor.replace("%data%", majors);
            $(".education-entry:last").append(formattedMajor);

        }

    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {

        $("#education").append(HTMLonlineClassesStart);

        var formattedCourse = HTMLonlineTitle.replace("%data%", course.title);
        formattedCourse += " " + HTMLonlineSchool.replace("%data%", course.school);
        formattedCourse += HTMLonlineDates.replace("%data%", course.dates);
        formattedCourse += HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedCourse);

    });

};

work.display = function() {

    for( var job in work.jobs ){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

};

projects.display = function() {

    var locations = [];

    this.projects.forEach(function(project){

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProjectURL = HTMLprojectURL.replace("%url%", project.url);
        var formattedProjectDU= formattedProjectDescription + formattedProjectURL;
        $(".project-entry:last").append(formattedProjectDU);

        if( project.images.length > 0 ){

            var formattedProjectImage = "";
            project.images.forEach(function(image){
                formattedProjectImage = HTMLprojectImage.replace("%data%", "images/" + image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        }

    });

};

function inName(name) {

    var finalName = name;

    finalName = finalName.toLowerCase();
    finalName = finalName.split(" ");
    finalName = finalName[0].charAt(0).toUpperCase() + finalName[0].slice(1) + " " + finalName[1].toUpperCase();

    return finalName;
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#footerContacts").append(bio.contactInfo("#footerContacts"));











