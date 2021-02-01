const price = document.getElementById("price");
const rangeSlider = document.getElementById("slide");
const amountofViews = document.getElementById("amount");
const monthlyorYearly = document.querySelector("#check");

var discount = 0;
var currentValue = 16;

const calculateDiscount = (value, discount) => {
  return (discount * value) / 100;
};

monthlyorYearly.addEventListener("click", function (e) {
  let { checked } = e.target;

  if (checked) {
    discount = 25;
    price.innerHTML = currentValue - calculateDiscount(rangeSlider.value, discount);
  } else {
    discount = 0;
    price.innerHTML = currentValue;
  }
});

rangeSlider.addEventListener("input", function (e) {
  const { value } = e.target;
  currentValue = value;
  // console.log(rangeSlider[0].value);
  // let sliderValue = rangeSlider[0].value;
  if (discount > 0) {
    price.innerHTML = value - calculateDiscount(value, discount);
  } else {
    price.innerHTML = value;
  }
  getPageviews(value);
});

function getPageviews(value) {
  switch (value) {
    case "8":
      amountofViews.innerHTML = "10K";
      break;
    case "12":
      amountofViews.innerHTML = "50K";
      break;
    case "16":
      amountofViews.innerHTML = "100K";
      break;
    case "24":
      amountofViews.innerHTML = "500K";
      break;
    case "36":
      amountofViews.innerHTML = "1M";
      break;
    default:
      break;
  }
}
