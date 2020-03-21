import { addNewItem, getItems, getItemWithID, UpdateItem, deleteItem} from '../controllers/inventoryControllers';

const routes = (app) => {
    app.route('/inventory')
        //GET endpoint
        .get(getItems)

        //POST endpoint
        .post(addNewItem);

    app.route('/inventory/:ItemId')
        //GET specific item
        .get(getItemWithID)
        
        //Update specific item
        .put(UpdateItem)

        //Delete a specific item
        .delete(deleteItem);
    }

export default routes;