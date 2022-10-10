export async function getData(body) {
    fetch("https://hookb.in/eK160jgYJ6UlaRPldJ1P", {
  method: "post",
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(body)
})
.then( (response) => { 
    console.log(response)
   //do something awesome that makes the world a better place
});

}