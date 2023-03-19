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

- Category details<br />

<b>ICategoryDetails</b> {
    id: string,
    name: string,
}
<br />

- Food details<br />

<b>IFoodDetails</b> {
    id: string,
    index: number,
    name: string,
    categoryId: string,
    rating: number,
    minCookTime: number,
    maxCookTime: number,
    restaurant: string,
    imageUrl: string,
    promotion?: FoodPromotion, //gift | '1+1' | 'discount'
    isNew?: boolean,
}

### Components:


The web app will open in your default browser (https://localhost:3000).
