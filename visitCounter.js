
fetch('https://3rpncwqyca.execute-api.us-east-2.amazonaws.com/default/api-gateway', {
    method: 'POST',
})
.then(response => response.json())
.then(data => {
  var dataInt = parseInt(data.Visitors);
  document.getElementById("counter").innerHTML = 'You are visitor number:' + ' ' + dataInt;
  console.log('You are visitor number:' + ' ' + dataInt);
})
.catch((error) => {
    console.error('Error:', error);
  });
