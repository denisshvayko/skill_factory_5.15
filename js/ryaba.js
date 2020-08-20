const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";
const startButton = $('.butn1');
const changeButton = $('.butn2');
const textInput = $('.result');
const startTextObj = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]}


function handleButton(event) {
  $.getJSON(event.data.url, function(data) {
    textInput.html(data.text)
  });
}

startButton.click({url: dataURL}, 
                  handleButton)


function handleData(data) {
  const var1 = $("input[name=var1]").val()
  const var2 = $("input[name=var2]").val()
  const var3 = $("input[name=var3]").val()  
  const var4 = $("input[name=var4]").val()
  const var5 = $("input[name=var5]").val()
  const var6 = $("input[name=var6]").val()
  const speach7 = $("input[name=speach]").val()
	let text = data.text;
  let text2 = []
  for(let j=0;j<text.length;j++) {
    text2.push(text[j].replace('{var1}', var1).replace('{var2}', var2).replace('{var3}', var3).replace('{var4}', var4).replace('{var5}', var5).replace('{var6}', var6).replace('{speach}', speach7))
  }
  console.log(text2)
  return(text2)
}

changeButton.click(function() {
  textInput.html(handleData(startTextObj))
})
