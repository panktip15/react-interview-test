# Bonsai React Interview Test

A user can add a product and can update and remove the product when viewing the cart. Cart icon is only visible once the user clicks `Add to Cart` button. User can update or remove products from the cart modal. If the user removes all the items from the cart, the Modal will close and the cart button will disappear.

Working Feature:
![Landing Page and interact with cart](https://share.getcloudapp.com/8LubP12B)

## Summary:

- User's cart items persist as they are stored in local storage.
- Created a hook with all the logic and is called on the `LandingPage` component.
- The props are then passed to the associated child components.
- Added Material-ui for styling and adding an AppBar

## Considerations

- We could have created a Context Provider for the Cart logic and then just used the associated props directly inside the components instead of passing them in.
- We are storing the cart information in the local storage as the assumption is this is either a user using the application for the first time, or they are just browsing and have not signed in. If they already have an account with items in their cart (which would be stored in the database), the application will combine both items in the cart for the use and add the local storage items to the database. If the user accesses the application logged in, we would not be storing any items in the local storage and would be saved directly to the database.

## Next steps

### Tests

- Add unit tests to make sure the application runs as expected. Needed additional time to set up Jest with msw.
- Would install Jest, msw, @testing-library. Add test setup files server and renderWithContext which would be used for all testing.
- Tests would include mock response for Products,
- Test Landing page and assert total products the DOM renders
- Assert correct information is displayed in the ProductCard
- Adding a product will display the Cart icon and correct number of items
- Clicking on the Cart Icon will display a table with correct products and quantities
- Test removing, and updating of products in the cart work as expected

### Improvements in the current feature for better UX

- Products page would update the button from "Add to Cart" to "update Quantity to show that the product is already added to the cart
- Add quantity dropdown to the ProductCard to update quantity directly from the landing page.
- Details page displaying more information of the product which would be a modal
- Ability to clear the cart. Add a function `clearCart` to the `useUpdateCart` hook which will default to empty cart.

## Install

1. Ensure `yarn` is installed

## Run

1. `yarn dev`
2. View at `http://localhost:8080/`
