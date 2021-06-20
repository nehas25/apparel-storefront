# Snazzle
Project 1 - Apparel Store

[Snazzle Website](https://snazzle.herokuapp.com/)

## Fashion Store

This project was developed as a part of General Assembly's Software Engineering Immersive program. It is a full CRUD application for the admin side of a fashion store, which allows users to Create, Read, Update, Delete items. It was done in a team of 2. Full CRUD was minimum requirement and we were able to implement a few stretch goals as well: 

* Search Bar
* Filter by color
* Filter by size
* Filter by price range
* Add to favorites - not fully implemented yet


## Technologies Used

**MEN stack**
- Mongoose
- Express
- Node


## Model

### Item

*   imgUrl
*   name
*   description
*   price

### Routes

<table>
  <tr>
   <td><strong>URL</strong>
   </td>
   <td><strong>HTTP Verb</strong>
   </td>
   <td><strong>Action</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>/items
   </td>
   <td>GET
   </td>
   <td>index
   </td>
   <td>Retrieve many/all items
   </td>
  </tr>
  <tr>
   <td>/items/new
   </td>
   <td>GET
   </td>
   <td>new
   </td>
   <td>Retrieve a form that can be used to create a new item
   </td>
  </tr>
  <tr>
   <td>/items
   </td>
   <td>POST
   </td>
   <td>create
   </td>
   <td>Send data to create a new item
   </td>
  </tr>
  <tr>
   <td>/items/:id
   </td>
   <td>GET
   </td>
   <td>show
   </td>
   <td>Retrieve one item
   </td>
  </tr>
  <tr>
   <td>/items/:id/edit
   </td>
   <td>GET
   </td>
   <td>edit
   </td>
   <td>Retrieve a item and a prepopulated form that can be used to edit that item
   </td>
  </tr>
  <tr>
   <td>/items/:id
   </td>
   <td>PUT
   </td>
   <td>update
   </td>
   <td>Send data to update an existing item
   </td>
  </tr>
  <tr>
   <td>/items/:id
   </td>
   <td>DELETE
   </td>
   <td>destroy
   </td>
   <td>Remove a item
   </td>
  </tr>
</table>


**User Stories and Template Plan**

Persona - Admin

*   Index
    *   When an admin user hit the index page we want to see
        *   Title of the website
        *   Add item button
            *   Redirect to “/items/new”
        *   Grid of product with simple details
            *   Image
            *   Item Name
            *   Price
        *   When a user clicks on an item
            *   SHOW “/items/:id’
*   Create item - /items/new - autofocus(item name)
    *   Form to add item data
        *   Image
            *   Input TBD
        *   Item Name
            *   Text input
        *   Item Description
            *   Text input
        *   Price
            *   Text input
    *   Submit button
        *   /items - POST
        *   Redirect to new item show page with created information
    *   Cancel button
        *   Redirect to index page without creating item
*   Show
    *   When the user hits a show page they will see expanded item details and have the ability to edit and delete an item.
        *   Product details
            *   Image
            *   Item Name
            *   Item Description
            *   Price
        *   Edit Button
            *   Redirect to “/items/:id/edit”
        *   Delete Button
            *   Delete item from DB
            *   Redirect to  /items - GET
*   Edit - When the user hit an edit page they can change product details.
    *   User can edit
        *   Image
            *   Input path
                *   Method TBD
        *   Item Name
            *   Text input
        *   Item Description
            *   Text input
        *   Price
            *   Text input 
    *   Submit button - /items/:id PUT
        *   Updates model 
        *   Redirect to SHOW page for edited item with updated information
    *   Cancel button
        *   Redirect to show page without editing item


**Stretch Goals:**

1. Mark items as favorites. Add it to your collection.
2. Template for reused HTML - done
3. EJS Partials - done
4. Search functionality - done
5. Filter by size, color, length, type, occasion, price, etc (ref: express store website) - done
6. Header controls based on user type
    1. Admin sees edit/delete/etc
    2. Customer sees collections/cart/etc
7. Store and display multiple images per item


