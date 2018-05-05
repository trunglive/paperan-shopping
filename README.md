**Design credit of the project: Patrik Michalicka**

* https://dribbble.com/shots/4414196-paperan-shopping-exploration-Add-to-cart
* https://dribbble.com/shots/4104241-paperan-shopping-exploration
* https://dribbble.com/shots/4185894-paperan-shopping-exploration-collection

---

## Paperan

> This project is an implementation of design concept Paperan from Designer Patrik Michalicka. The app serves as a small ecommerce app about notebooks. The purpose of building this app is to solidify my knowledge in React & Redux. All random API data are created from [JSON Generator](https://next.json-generator.com/) and just for illustration purpose.

## Notes on my work

* I am working on responsiveness of the app to different screen sizes, checkout form, authentication, and data persistence on page refresh.

Redux store works as a global immutable state tree and it prevents props drilling problems as the app grows. I used some new features in React 16.3 in this app in combination with Redux ([React Context API](https://reactjs.org/docs/context.html), [getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)).

Additional features I added to the app that are not related to original design:

* Filter Sidebar
  * User could filter the products based on type, price range, color, sheet style, cover material and audience.
* Sorting
  * User could sort the products by best sellers, price, most reviews, top-rated and newest.
* Footer
  * This is just a markup with no link connected

## Stack

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/reactjs/redux)
* [Redux Persist](https://github.com/rt2zz/redux-persist)
* [Firebase](https://firebase.google.com/)

## Demo

https://paperan-shop.firebaseapp.com

![paperan-shop](paperan-demo.png)

## Quick Start

**Clone the project**

```shell
$ git clone https://github.com/trunglive/paperan-shopping.git
```

**Run the app**

```shell
$ cd paperan-shopping
$ yarn install
$ yarn start
```

## Contributor

Trung Vo ([trunglive](https://github.com/trunglive))

## License

This project is licensed under the MIT License. Please check the `LICENSE` file.
