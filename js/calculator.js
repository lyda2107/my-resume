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


const calculatorForm = document.querySelector('.calculator-form');
calculatorForm.addEventListener('submit', function(event) {
event.preventDefault();
//selectors
const websiteTypeSelect = document.querySelector('#calculator-form-website-type');
const websiteCartValue = document.querySelector('.calculator-form-input-radio-container input:checked');
console.log(websiteCartValue);

//valyes
const websiteTypeValue = websiteTypeSelect.value;
const technologiesValue = technologiesMultiSelect.getValue();
console.log(technologiesValue);
});
