const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '37a0247b65msh466a208c6da9e68p1a664djsn130bf0d93105',
        'X-RapidAPI-Host': 'poll-maker.p.rapidapi.com'
    }
};

fetch('https://poll-maker.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
let popup =document.getElementById('popup');
    function openpopup(){
         popup.classList.add("openpopup")
         }
    function closepopup(){
        popup.classList.remove("openpopup")
            }
            