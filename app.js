// Grab button 1 and add event listener to it
document.getElementById('button1').addEventListener('click', getText)

// BUTTON 2 FOR JSOM
document.getElementById('button2').addEventListener('click', getJson)

// BUTTON 3 FOR JSOM
document.getElementById('button3').addEventListener('click', getExJson)

//-----------------------------------------------------
//                GET LOCAL TEXT FILE
function getText() {
  // we wanna use text. pass w/e we wanna get. fetch returns promises... .then()
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    // res.text returns a promise so we use .thn again
    .then(function (data) {// data is what promise retrn
      console.log(data);
      // out put the data to html
      document.getElementById('output').innerHTML = data
    })
    .catch(function (err) { //if error we use .catch
      console.log(err);
    })
}

// To get the response for promise we have to use .then(), so lets return res.text
//---------------------------------------------------
//                GET LOCAL JSON DATA
function getJson() {
  fetch('posts.json')
    .then(function (res) { // 1st then is file/type
      return res.json();
    })
    .then(function (data) { // 2nd get the data
      console.log(data);
      //if we wanna ouput we have to loop casue issa arr
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      // output the loop output with inner html
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    })
}

//--------------------------------------------------------
//             GET FROM EXTERNAL API
function getExJson() {
  fetch('https://api.github.com/users') // external json
    .then(function (res) { // 1st then is file/type
      return res.json();
    })
    .then(function (data) { // 2nd get the data
      console.log(data);
      //if we wanna ouput we have to loop casue issa arr
      let output = '';
      data.forEach(function (user) { // user 
        output += `<li><a href='${user.html_url}'>${user.login}</a></li>`; // username
      });
      // output the loop output with inner html
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    })
}


























