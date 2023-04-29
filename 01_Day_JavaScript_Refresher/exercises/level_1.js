// TODO: Declare an empty array;
array = []
// TODO: Declare an array with more than 5 number of elements
array = [1,2,3,4,5]
// TODO: Find the length of your array
len = array.length
// TODO: Get the first item, the middle item and the last item of the array
first = array[0] 
middle = array[array.length/2]
last = array[array.length-1]
// TODO: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
array = [1,2,3,"a","b","c"]
len = array.length
console.log(len > 5)
// TODO: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// TODO: Print the array using console.log()
console.log(companies.toString())
// TODO: Print the number of companies in the array
console.log(companies.length)
// TODO: Print the first company, middle and last company
console.log(companies[0], companies[Math.floor(companies.length/2)], companies[companies.length-1])
// TODO: Print out each company
companies.forEach(element => console.log(element))
// TODO: Change each company name to uppercase one by one and print them out
companies.forEach(element => console.log(element.toUpperCase()))
// TODO: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
sentence = ""
companies.forEach(element => element === "Amazon" ? sentence += element + " are big IT companies." : sentence += element + ", ")
console.log(sentence)
// TODO:     Check if a certain company exists in the  IT Companies array. If it exist return the company else return a company is not found
company = "Exxon"
companies.includes(company) ? console.log(company) : console.log("Company is not found")
// TODO: Filter out companies which have more than one 'o' without the filter method
_companies = [...companies]
companies.forEach(element => _companies = element.match(/o/g) !== null && element.match(/o/g).length > 1 ? _companies.slice(companies.indexOf(element)) : _companies)
console.log(`Filtered: ${_companies}`)
// TODO: Sort the array using sort() method
console.log(`Sorted: ${companies.sort()}`)
// TODO: Reverse the array using reverse() method
console.log(`Reverse Sorted: ${companies.reverse()}`)
// TODO: Slice out the first 3 companies from the array
console.log(`Slice First 3: ${companies.slice(0,3)}`)
// TODO: Slice out the last 3 companies from the array
console.log(`Slice Last 3: ${companies.slice(companies.length-3,companies.length)}`)
// TODO: Slice out the middle IT company or companies from the array
console.log(`Slice Middle: ${companies.slice(Math.floor(companies.length/2),Math.floor(companies.length/2)+1)}`)
// TODO: Remove the first IT company from the array
console.log(`Remove First: ${companies.shift()}`)
// TODO: Remove the middle IT company or companies from the array
console.log(`Remove Middle: ${companies.splice(Math.floor(companies.length/2),Math.floor(companies.length/2)+1)}`)
// TODO: Remove the last IT company from the array
console.log(`Remove Last: ${companies.pop()}`)
// TODO: Remove all IT companies
console.log(`Remove All: ${companies.splice(0,companies.length)}`)