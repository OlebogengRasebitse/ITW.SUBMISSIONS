import { createOrderHtml, html, updateDraggingHtml, moveToColumn, } from './view.js'
import { createOrderData, updateDragging } from './data.js'
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath() // determine which column the user is dragging over.
    let column = null
    for (const element of path) {
        const { area } //used to determine if the current element is a column.

            = element.dataset
        if (area) {
            column = area
            break;
        }
    }
    if (!column) return
    updateDragging({ over: column })//updates the state of the item being dragged
    updateDraggingHtml({ over: column }) //updates the visual appearance of the item being dragged
}



// called when the user starts dragging an item
let dragged;
const handleDragStart = (event) => { 
  dragged = event.target;
}

//called when the user drops an item
//adds the dragged item to the drop target.
function handleDragDrop (event) {
    event.target.append(dragged);
}

//sets the display property of the dragged item to block.
const handleDragEnd = (event) => {
    const drag = event.target.closest('section');
    drag.style.displaygroundcolor = 'block';
 } //and ended



//HELP

//handle toggling the help overlay on and off.
const handleHelpToggle = (event) => {//event handler that fires when the "Help" button is clicked
    html.help.overlay.style.display = "block"
} 
function handleHelpCancel() {
    html.help.overlay.style.display = "none"
    html.other.add.focus()

    
} 


//add + cancel
// handle toggling the add overlay on and off.
const handleAddToggle = () => {
    html.add.overlay.style.display = 'block'
    
}
const handleAddCancel = () => {
    html.add.overlay.style.display = 'none'
    html.other.add.focus()
}



//creates an order from the form 
const handleAddSubmit = (event) => {
    event.preventDefault(); //prevent reload
    const order = {
        title: html.add.title.value,
        table: html.add.table.value,
    }

    let orderData = createOrderData(order)
    const orderDetails = createOrderHtml(orderData)

    const customerOrder = html.other.grid.querySelector('[data-column="ordered"]') //where the order goes.

    customerOrder.appendChild(orderDetails);
    html.add.form.reset();
    html.add.overlay.style.display = 'none';
};


//calls the handleAddSubmit function when the add form is submitted.
html.add.form.addEventListener('submit', handleAddSubmit)

const handleEditToggle = (event) => {
    const overlay = html.edit.overlay;
    const cancelButton = html.edit.cancel;
    const input = html.edit.title;
    const select = html.edit.table;
    const option = html.edit.column;
    event.target.dataset.id ? overlay.show() : undefined;
    const id = event.target.dataset.id ? event.target.dataset.id : undefined;
    input.value = event.target.dataset.id
        ? event.target.querySelector(".order__title").textContent
        : undefined;
    select.value = event.target.dataset.id
        ? event.target.querySelector(".order__value").textContent
        : undefined;
    let section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
    if (event.target === cancelButton) {
        overlay.close();
    }
    html.edit.delete.id = id;
}

const handleEditSubmit = (event) => {   
    event.preventDefault();
    const idRemove = html.edit.delete.id;
    const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
    orderDelete.remove();
    const overlay = html.edit.overlay;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const appended = document.querySelector(`[data-area="${newData.column}"]`);
    appended.appendChild(htmlData);
    event.target.reset();
    overlay.close();
}


const handleDelete = (event) => {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(
        `[data-id="${idToBeDeleted}"]`
    );
    
    const overlay = html.edit.overlay;
    orderToBeDeleted.remove();
    overlay.close();
}

html.add.cancel.addEventListener('click', handleAddCancel)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)
html.help.cancel.addEventListener('click', handleHelpCancel)
html.other.help.addEventListener('click', handleHelpToggle)
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
    htmlArea.addEventListener('drop', handleDragDrop)
}

