import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import uuid from "uuid";

const initialCartState = {};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!Object.keys(state).includes(action.guid)) {
        return {
          ...state,
          [action.guid]: [
            {
              variationId: uuid(),
              ...action.details
            }
          ]
        };
      } else {
        const sameItemFound = state[action.guid];
        sameItemFound.push({ variationId: uuid(), ...action.details });

        return {
          ...state,
          [action.guid]: sameItemFound
        };
      }

    case REMOVE_FROM_CART:
      const updatedCart = state[action.guid].filter(
        item => item.variationId !== action.variationId
      );

      return {
        ...state,
        [action.guid]: updatedCart
      };
    default:
      return state;
  }
};

export default cartReducer;

// const cart = {
//   cart: {
//     "c33b6d10-889f-42e7-a5c3-8a69f9d9acb3": [
//       {
//         variationId: "f5b2ed9f-0cdb-4de4-8e6a-982f0a23813e",
//         currentSize: "A6",
//         currentColor: "purple",
//         photo_url: "/photos/notebook/notebook-13.jpg",
//         fullItemName: "Ad Plain Notebook",
//         price: "42.09",
//         quantity: 4
//       },
//       {
//         variationId: "5d7h234349f-0c43-4ed4-wa4a-982f5faref13e",
//         currentSize: "A4",
//         currentColor: "blue",
//         photo_url: "/photos/notebook/notebook-13.jpg",
//         fullItemName: "Too Cool Notebook",
//         price: "56.04",
//         quantity: 10
//       }
//     ],
//     "76434d29-8b13-4ecc-871d-a7754e105d2e": [
//       {
//         variationId: "86462b35-b617-4f31-92da-0ea55b019ab5",
//         currentSize: "A4",
//         currentColor: "purple",
//         photo_url: "/photos/journal/journal-2.jpg",
//         fullItemName: "Magna Dotted Grid Journal",
//         price: "41.66",
//         quantity: 3
//       }
//     ],
//     "efe93c63-9f25-4e5a-90ad-042273cdb81c": [
//       {
//         variationId: "1832cf58-f240-4988-a520-1bfe4aa51807",
//         currentSize: "A6",
//         currentColor: "blue",
//         photo_url: "/photos/notebook/notebook-5.jpg",
//         fullItemName: "Elit Sketch Notebook",
//         price: "22.54",
//         quantity: 4
//       }
//     ],
//     "7522480a-4e55-4b79-9ab8-1aa94b374d76": [
//       {
//         variationId: "153f11e3-ac06-42ca-a9fa-620321a0b7a8",
//         currentSize: "A5",
//         currentColor: "pink",
//         photo_url: "/photos/journal/journal-6.jpg",
//         fullItemName: "Pariatur Dotted Grid Journal",
//         price: "43.15",
//         quantity: 4
//       }
//     ]
//   }
// };
