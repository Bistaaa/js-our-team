const teamInfo = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "picture": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "picture": "img/angela-caroll-chief-editor.jpg", 
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "picture": "img/walter-gordon-office-manager.jpg", 
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "picture": "img/angela-lopez-social-media-manager.jpg", 
    },
    {
        "name": "Scott Estrada	",
        "role": "Developer",
        "picture": "img/scott-estrada-developer.jpg", 
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "picture": "img/barbara-ramos-graphic-designer.jpg", 
    }
];

for (let i = 0; i < teamInfo.length; i++) {

    //image
    const pictureArray = teamInfo[i].picture;
    const pictureDom = document.createElement("img");
    pictureDom.src = pictureArray;

    //nome
    const nameArray = teamInfo[i].name;
    const nameDom = document.createElement("h2");

    //role
    const roleArray = teamInfo[i].role;
    const roleDom = document.createElement("p");

    const container = document.getElementById("team_info");
    container.appendChild(pictureDom);
    container.append(nameDom, roleDom);
    nameDom.append(nameArray);
    roleDom.append(roleArray);
}