/* Name: Shilpi Sarkar
    Student ID#: 040749357 
    File Name: projects.js 
    Date Created: October 29, 2023
    Purpose:To generate slideshow with next and previous navigation  */

/* This JavaScript code for a simple slideshow with next and previous navigation.*/

let slideshowIndex = 0;

function nextProject(n) {
    slideshowIndex = slideshowIndex + n;
    showProject(slideshowIndex);
}

function showProject(n) {
    let projects = document.getElementsByClassName("project");

    if (n >= projects.length) {
        slideshowIndex = 0;
    }
    if (n < 0) {
        slideshowIndex = projects.length - 1;
    }


    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }

    projects[slideshowIndex].style.display = "flex";
}

showProject(slideshowIndex);