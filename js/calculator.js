
const technologiesSelect = document.querySelector('#calculator-form-technologies');
const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

calculatorSum();
const calculatorForm = document.querySelector('.calculator-form');
calculatorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  calculatorSum();

});

function calculatorSum() {
  //selectors
  const websiteTypeSelect = document.querySelector('#calculator-form-website-type');
  const websiteCart = document.querySelector('#calculator-form-input-cart input:checked');
  const websiteReception = document.querySelector('#calculator-form-input-reception input:checked');


  //valyes
  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
  const technologiesValue = getTechnologiesSum(technologiesMultiSelect.getValue());
  const websiteCartValue = convertCartOptintoPrice(websiteCart.value);
  const websiteReceptionValue = convertReceptionOptintoPrice(websiteReception.value);
  console.log(websiteTypeValue);
  console.log(technologiesValue);
  console.log(websiteCartValue);
  console.log(websiteReceptionValue);

  const totalSum = websiteTypeValue + technologiesValue + websiteCartValue + websiteReceptionValue;
  renderSum(totalSum);


}


function renderSum(sum) {
  const costElement = document.querySelector('.calculator-form-total-cost')

  costElement.textContent = 'Calculating...';
  setTimeout( function() {
    costElement.textContent = sum + '$'
  }, 2000);

  ;
}

function convertCartOptintoPrice(option) {
  if (option === 'yes') {
    return 300;
  }
  return 0;
}
function convertReceptionOptintoPrice(option) {
  if (option === 'yes') {
    return 500;
  }
  return 0;
}



function getTechnologiesSum(techologiecArr) {
  let totalSum = 0;
  techologiecArr.forEach(function (tech) {
    totalSum = totalSum + extractPriceFromValue(tech.value)
  })
  return totalSum;
}
function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}