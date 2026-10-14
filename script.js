
const lengthText = document.getElementById("length");
const widthText = document.getElementById("width");
const inso = document.getElementById("inso");
const gutter = document.getElementById("gutter");
const totalDisplay = document.getElementById("total");
const areaDisplay = document.getElementById("area");
const singleStory = document.getElementById("story1");
const doubleStory = document.getElementById("story2");



function calculateTotal() {

    const length = Number(lengthText.value);
    const width = Number(widthText.value);

    const area = (length * width) * 1.2;

    let total = area * 120;

    if (gutter.checked) {
        total += (width + length) * 85;
    }

    if (inso.checked) {
        total += area * 20;
    }

    if (doubleStory.checked) {
        total += 500;
    }


    totalDisplay.textContent = total.toLocaleString(
        "en-AU",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }

    );
    areaDisplay.textContent = area.toLocaleString();

}

lengthText.addEventListener("input", calculateTotal);
widthText.addEventListener("input", calculateTotal);
inso.addEventListener("input", calculateTotal);
gutter.addEventListener("input", calculateTotal);
singleStory.addEventListener("input", calculateTotal);
doubleStory.addEventListener("input", calculateTotal);

calculateTotal();