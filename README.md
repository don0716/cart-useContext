## PRD Checklist

### Routes
- [x] **ProductListing Page** – Displays products with option to add to cart  
- [x] **Cart Page** – Displays list of products added to the cart  

###  Global Cart State
- [x] Created `CartContext` using React’s `useContext`  
- [x] Cart updates when products are added from `ProductListing`

###  CartStatus Component
- [ ] Create a `CartStatus` component to show total items in cart  
- [ ] Place `CartStatus` in the Navbar to be visible on all pages  

###  Functionality
#### ProductListing Page:
- [x] Show list of products with name and price  
- [ ] Add “Add to Cart” button for each product  
- [ ] Cart reflects added products correctly  

#### Cart Page:
- [ ] Display all added products with their details  
- [ ] Show message: "Cart is empty" if no items  

###  Navigation
- [x] Add Navbar with links to `ProductListing` and `Cart` pages  
- [x] Navbar visible on all pages  
