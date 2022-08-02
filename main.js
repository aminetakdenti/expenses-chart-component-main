getApi();

// Fetch Api
function getApi() {
  fetch("data.json")
    .then((data) => data.json())
    .then((json) => {
      const data = json;
      const days = document.querySelectorAll(".diag .text");
      const daysInfo = document.querySelectorAll(".diag .progress .info");
      let amountArr = [];
      for (let i = 0; i < data.length; i++) {
        days.item(i).innerText = data[i]["day"];
        daysInfo.item(i).style.height = `${data[i]["amount"] + 30}px`;
        daysInfo.item(i).dataset.prog = `$${data[i]["amount"]}`;
        amountArr.push(data[i]["amount"]);
      }
      let max = amountArr.indexOf(Math.max(...amountArr));
      daysInfo.item(max).style.backgroundColor = `hsl(186, 34%, 60%)`;
      daysInfo.item(max).onmouseover = () =>
        (daysInfo.item(max).style.backgroundColor = `hsl(186, 34%, 70%)`);
      daysInfo.item(max).onmouseout = () =>
        (daysInfo.item(max).style.backgroundColor = `hsl(186, 34%, 60%)`);
    })
    .catch((err) => err);
}
