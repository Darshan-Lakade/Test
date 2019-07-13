// Selecting elements from the index.html file

const mainDiv = document.querySelector('.main-div');
const popUp = document.querySelector('.pop-up-div');
const backBtn = document.querySelector('.backBtn');
const overlay = document.querySelector('.overlay');
const versionName = document.querySelector('.version-name');


// Adding remove functions to removeClass function
const removeClass = () => {
    popUp.classList.remove("displayIn");
    overlay.classList.remove("overlay-active");
}

// function for popup element

const bgModel = () => {

    // Looping through the versionList
    versionList.forEach((list,i) => {

        // Creating elements to create html structure
        const popUpDiv = document.querySelector('.pop-up-div');
        const dataName = document.createElement('div');
        const verInfo = document.createElement('div');
        const verName = document.createElement('h3');
        const specification = document.createElement('div');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');

        // Adding Classes to element
        dataName.classList.add('data-name');
        verInfo.classList.add('version-info');
        verName.classList.add('version-name');
        specification.classList.add('specification');
        span1.classList.add('span');
        span2.classList.add('span');
        span3.classList.add('span');
        span1.classList.add('span1');
        span2.classList.add('span2');
        span3.classList.add('span3');

        // Adding id to dataName div
        dataName.id = 'dtname'+i;

        // nesting elements 
        popUpDiv.appendChild(dataName);
        dataName.appendChild(verInfo);
        dataName.appendChild(specification);
        verInfo.appendChild(verName);
        specification.appendChild(span1);
        specification.appendChild(span2);
        specification.appendChild(span3);

        // Giving inner text to the created elements
        verName.innerHTML=list.verName;
        span1.innerHTML=list.fuel;
        span2.innerHTML=list.type;
        span3.innerHTML=list.price;

        // Creating onClick actions on particular div
        let onClickData = document.getElementsByClassName('data-name')[i];
        onClickData.addEventListener('click', () => {
            if(i === list.id){
                versionName.innerHTML=list.verName;
                removeClass();
            }
        })
    })
}

// Adding popup function
const popUpBtn = () => {

    mainDiv.addEventListener('click', () => {
        popUp.classList.add("displayIn");
        overlay.classList.add("overlay-active");
    })

    backBtn.addEventListener('click', () => {
        removeClass();
    })

    overlay.addEventListener('click', () => {
        removeClass();
    })
}

popUpBtn();
bgModel();
