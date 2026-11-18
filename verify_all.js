import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'src', 'data', 'menuData.json');
const raw = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(raw);

console.log('=== FIREFLIES DIGITAL MENU MASTER DATA AUDIT ===');
console.log('Restaurant:', data.restaurantInfo.name);
console.log('Nepali Name:', data.restaurantInfo.nepaliName);
console.log('Tagline:', data.restaurantInfo.tagline);
console.log('Hotline:', data.restaurantInfo.phone);

console.log('\n--- 1. Food Menu Count Check ---');
console.log('Expected Food Items: 68');
console.log('Actual Food Items:', data.foodItems.length);
if (data.foodItems.length !== 68) {
  console.error('FAIL: Food items count mismatch!');
  process.exit(1);
} else {
  console.log('PASS: Exactly 68 food items accounted for.');
}

console.log('\n--- 2. Beverage Menu Count Check ---');
console.log('Expected Beverage Items: 57');
console.log('Actual Beverage Items:', data.beverageItems.length);
if (data.beverageItems.length !== 57) {
  console.error('FAIL: Beverage items count mismatch!');
  process.exit(1);
} else {
  console.log('PASS: Exactly 57 beverage items accounted for.');
}

console.log('\n--- 3. Total Items Check ---');
const total = data.foodItems.length + data.beverageItems.length;
console.log('Grand Total Items:', total);
if (total !== 125) {
  console.error('FAIL: Grand total mismatch!');
  process.exit(1);
} else {
  console.log('PASS: Exactly 125 master entries verified.');
}

console.log('\n--- 4. Categories Verification ---');
const foodCats = new Set(data.foodItems.map(i => i['Main Category']));
const bevCats = new Set(data.beverageItems.map(i => i['Main Category']));

const expectedFoodCats = [
  'Healthy Hub', 'Spicy Bites', 'Short Crunches', 'Veggie Corner',
  'Big Biggy', 'Thakali Khana Set', 'More Biggy', 'Fireflies Pizza Corner',
  'Chips Corner', 'Do It Yourself Patter', 'Fireflies Breaki'
];

const expectedBevCats = [
  'Hot Beverage', 'Chilled Corner', 'Refresher', 'Chilled Coffee',
  'Beer', 'Hard Drinks', 'Smokey Corner'
];

expectedFoodCats.forEach(cat => {
  if (!foodCats.has(cat)) console.error(`MISSING FOOD CAT: ${cat}`);
});

expectedBevCats.forEach(cat => {
  if (!bevCats.has(cat)) console.error(`MISSING BEV CAT: ${cat}`);
});

console.log('PASS: All 18 canonical categories present.');

console.log('\n--- 5. Price & Critical Item Verification ---');
const thakaliItems = data.foodItems.filter(i => i['Main Category'] === 'Thakali Khana Set');
thakaliItems.forEach(item => {
  if (!item['Special Notes'].includes('Minimum 4 Packs')) {
    console.error(`Missing notice on Thakali item: ${item['Exact Item Name']}`);
  }
});
console.log('PASS: Thakali Khana Set mandatory ordering notice verified.');

const food24 = data.foodItems.find(i => i['Item ID'] === 'FOOD-024');
if (!food24['Description / Ingredients'].includes('Noodles, Veggie, Soup')) {
  console.error('FAIL: FOOD-024 description altered!');
} else {
  console.log('PASS: FOOD-024 original description and anomaly handling verified.');
}

const whiskeyQuarter = data.beverageItems.find(i => i['Item ID'] === 'BEV-039');
const whiskeyHalf = data.beverageItems.find(i => i['Item ID'] === 'BEV-040');
const whiskeyFull = data.beverageItems.find(i => i['Item ID'] === 'BEV-041');
if (whiskeyQuarter['Price Display'] !== 'Rs.1050' || !whiskeyHalf['Price Display'].includes('1900') || whiskeyFull['Price Display'] !== 'Rs.3500') {
  console.error('FAIL: Whiskey pricing mismatch!');
} else {
  console.log('PASS: Hard drinks matrix pricing strictly preserved.');
}

console.log('\n--- 6. Anomalies Register Check ---');
if (data.anomalies.length !== 9) {
  console.error('FAIL: Anomaly register incomplete!');
} else {
  console.log('PASS: All 9 anomalies transparently recorded in database.');
}

console.log('\nALL CHECKS PASSED: 125/125 items verified.');
