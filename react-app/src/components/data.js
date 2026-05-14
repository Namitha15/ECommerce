/*
export const users = [
  { 
    id: 1, 
    firstName: "Anusha", 
    lastName: "K", 
    age: 20, 
    grade: "12th", 
    marks: 450, 
    percentage: "90%", 
    city: "Bangalore" 
  },
  { 
    id: 2, 
    firstName: "Bharath", 
    lastName: "S", 
    age: 21, 
    grade: "Degree", 
    marks: 420, 
    percentage: "84%", 
    city: "Mysore" 
  },
  { 
    id: 3, 
    firstName: "Seema", 
    lastName: "P", 
    age: 19, 
    grade: "11th", 
    marks: 380, 
    percentage: "76%", 
    city: "Mangalore" 
  },
  { 
    id: 4, 
    firstName: "Rohan", 
    lastName: "M", 
    age: 22, 
    grade: "Masters", 
    marks: 480, 
    percentage: "96%", 
    city: "Hubli" 
  },
  { 
    id: 5, 
    firstName: "Priya", 
    lastName: "V", 
    age: 18, 
    grade: "10th", 
    marks: 490, 
    percentage: "98%", 
    city: "Dharwad" 
  },
  { 
    id: 6, 
    firstName: "Kiran", 
    lastName: "L", 
    age: 23, 
    grade: "PhD", 
    marks: 460, 
    percentage: "92%", 
    city: "Belgaum" 
  },
  { 
    id: 7, 
    firstName: "Deepa", 
    lastName: "R", 
    age: 20, 
    grade: "12th", 
    marks: 410, 
    percentage: "82%", 
    city: "Shimoga" 
  },
  { 
    id: 8, 
    firstName: "Vikram", 
    lastName: "J", 
    age: 21, 
    grade: "Degree", 
    marks: 395, 
    percentage: "79%", 
    city: "Gulbarga" 
  },
  { 
    id: 9, 
    firstName: "Sneha", 
    lastName: "B", 
    age: 19, 
    grade: "11th", 
    marks: 435, 
    percentage: "87%", 
    city: "Bellary" 
  },
  { 
    id: 10, 
    firstName: "Arun", 
    lastName: "T", 
    age: 22, 
    grade: "Degree", 
    marks: 405, 
    percentage: "81%", 
    city: "Davangere" 
  }
];
*/
export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
  catch (err) {
    console.log("Failed to get data:", err);
  }
}

export default getProducts;