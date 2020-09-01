const content = document.querySelector("#content");

for (var i = 2; i <= 9; i++) {
    let chartSpace = document.createElement("div");
    chartSpace.setAttribute('class', 'col-4');
    chartSpace.classList.add('chartSpaceDistance');
    let str1 = '';
    let str2 = '';
    let str3 = '';
    for (var x = 1; x <= 9; x++) {
        if (x <= 3) {
            //存放leftSide的內容
            str2 += `<div class="chartResult h4 d-flex justify-content-center">${i} x ${x} = ${i * x}</div>`
        } else {
            //存放rightSide的內容
            str3 += `<div class="chartResult h4">${i} x ${x} = ${i * x}</div>`
        }
    };
    str1 += `
    <div class="chartSpace">
    <div class="row">
    <div class="col-6 leftSide">
        <h2 class="chartTitle font-weight-bold d-flex justify-content-center">${i}</h2>
        ${str2}
    </div>
    <div class="col-6 rightSide d-flex flex-column justify-content-end">
        ${str3}
    </div>
</div></div>`;
    chartSpace.innerHTML = str1;
    content.appendChild(chartSpace);
}