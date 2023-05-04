

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



// actions for when button is clicked

let dragged 

const handleDragStart = (event) => { 
  dragged = event.target;
}//called when a drag operation is started 
const handleDragEnd = (event) => { } //and ended


const handleHelpToggle = (event) => {//event handler that fires when the "Help" button is clicked
    html.help.overlay.style.display = "block"
} 
function handleHelpCancel() {
    html.help.overlay.style.display = "none"
    html.other.add.focus()

    
} //fires when the "Cancel" button is clicked in the "Help" overlay
const handleAddToggle = () => {
    html.add.overlay.style.display = 'block'
}
const handleAddCancel = () => {
    html.add.overlay.style.display = 'none'
    html.other.add.focus()
}


//SUBMIT AND ADD ORDER.
// const addDataForm = html.add.form
// const displayElement = document.querySelector('[data-column="ordered"]')



const handleAddSubmit = (event) => {
    event.preventDefault(); //prevent reload
    const order = {
        title: html.add.title.value,
        table: html.add.table.value,
    }

    let orderData = createOrderData(order)

    const orderDetails = createOrderHtml(orderData)

    const customerOrder = html.other.grid.querySelector('[data-column="ordered"]')

    customerOrder.appendChild(orderDetails);
    html.add.form.reset();
    html.add.overlay.style.display = 'none';
};




html.add.form.addEventListener('submit', handleAddSubmit)


const handleEditToggle = (event) => {  //Edit Block
    html.edit.overlay.style.display = 'block'
 }

const handleEditSubmit = (event) => { }


const handleDelete = (event) => {
    html.delete.overlay.style.display = '' 
    html.other.add.focus()
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
}

