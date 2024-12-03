export function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = ",";
    let numbersString = numbers;
  
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].substring(2);
      numbersString = parts[1];
    }
  
    const nums = numbersString.split(new RegExp(`[${delimiter}\n]`));
    const parsedNums = nums.map(num => parseInt(num, 10));
  
    const negatives = parsedNums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return parsedNums.reduce((sum, num) => sum + num, 0);
  }
  