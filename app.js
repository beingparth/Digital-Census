let addMem = document.getElementById('plusone__btn').addEventListener('click',addMemfunc);
function addMemfunc(event){
    event.preventDefault();
    document.getElementById('member__form').innerHTML += '<div id="member__form"><input type="text" placeholder="First Name"><input type="text" placeholder="Last Name"><input type="number" placeholder="Aadhar Number"><select><option value="Male">M</option><option value="Female">F</option><option value="Other">Other</option></select><br /></div>'
}
