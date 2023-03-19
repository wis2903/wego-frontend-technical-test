# Wego - Technical Test: Senior Frontend Engineer

## Requirement: 
On initial visit to the website, it will show the list of foods for users to order <br />

- Fetch the food results from the provided API and format them into client readable results. <br />
- Use the returned data to display a page of results that matches the given design. <br />
- View foods by different categories <br />
- Allow users to search foods by name <br />

## Install
Please run this command in the command line <br />
```
yarn install
```
or
```
npm install
```

## Start
Please run this command in the command line <br />
```
yarn start
```

## Documents

### Data types/interfaces:

**ICategoryDetails**: *Interface for data of category* <br />
    - id: string <br />
    - name: string <br />

**IFoodDetails**: *Interface for data of food* <br />
    - id: string <br />
    - index: number <br />
    - name: string <br />
    - categoryId: string <br />
    - rating: number <br />
    - minCookTime: number <br />
    - maxCookTime: number <br />
    - restaurant: string <br />
    - imageUrl: string <br />
    - promotion?: FoodPromotion //'gift' | '1+1' | 'discount' <br />
    - isNew?: boolean <br />

### Services:

**Category Service**: *Fetch and process categories data* <br />
- list(): Promise<ICategoryDetails[]> <br />
*Fetch list of categories data from API* <br />

Usage:

```
const service = new CategoryService();
service.list(); // List of categories in ICategoryDetails type
```

**Food Service**: *Fetch and process foods data* <br />
- list(): Promise<IFoodDetails[]> <br />
*Fetch list of foods from API* <br />

Usage:

```
const service = new FoodService();
service.list(); // List of foods in IFoodDetails type
```

### Helpers:
- **parseCategoryData(data: Record<string, unknown>): ICategoryDetails** <br />
*Parse data object to ICategoryDetails type* <br />

Usage:

```
let object = {
      "id": "6288a89f1f0152b8c2cd512b",
      "name": "Sushi"
}
parseCategoryData(object); // Return object in ICategoryDetails type
```

- **parseFoodData(data: Record<string, unknown>): IFoodDetails** <br />
*Parse data object to IFoodDetails type* <br />

Usage:

```
let object =  {
  "id": "628b5decc94a27754f30e6f1",
  "index": 0,
  "rating": 3.9508,
  "promotion": "gift",
  "isNew": false,
  "categoryId": "6288a89fac9e970731bfaa7b",
  "minCookTime": 80,
  "maxCookTime": 100,
  "restaurant": "Niquent",
  "name": "Niquent Drinks",
  "imageUrl": "https://source.unsplash.com/random/400x400?Drinks"
}
parseFoodData(object); // Return object in IFoodDetails type
```

- **searchFoods(data: IFoodDetails[], keyword: string): IFoodDetails[]** <br />
*Search foods by a given keyword using Mini search* <br />

Usage:

```
let foods: IFoodDetails[] = [
  {
    id: ...
    index: ...,
    rating: ...,
    promotion: ...,
    isNew: ...,
    categoryId: ...,
    minCookTime: ...,
    maxCookTime: ...,
    restaurant: ...,
    name: ...,
    imageUrl: ...
  },
  ...,
  ...,
];

searchFoods(foods, 'sushi'); // Return list of foods that have name/restaurant match the keyword
```

### Components: ###
**FoodCard**: *Display food item* <br />

Props: <br />
- className?: string <br />
- data: IFoodDetails <br />

Usage
```
const food = {
    id: ...
    index: ...,
    rating: ...,
    promotion: ...,
    isNew: ...,
    categoryId: ...,
    minCookTime: ...,
    maxCookTime: ...,
    restaurant: ...,
    name: ...,
    imageUrl: ...
}
  
<FoodCard data={food} />
```
