import mongoose from 'mongoose';
import {InventorySchema} from '../models/inventoryModel';

const Item = mongoose.model('Inventory', InventorySchema);

export const addNewItem = (req, res) => {
    let newItem = new Item(req.body);

    newItem.save((err, Item) => {
        if (err){
            res.send(err);
        }
        res.json(Item);
    });
};

export const getItems = (req, res) => {
    Item.find({},(err, Item) => {
        if (err){
            res.send(err);
        }
        res.json(Item);
    });
};

export const getItemWithID = (req, res) => {
    Item.findById(req.params.ItemId,(err, Item) => {
        if (err){
            res.send(err);
        }
        res.json(Item);
    });
};

export const UpdateItem = (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.ItemId}, req.body, {new: true}, (err, Item) => {
        if (err){
            res.send(err);
        }
        res.json(Item);
    });
};

export const deleteItem = (req, res) => {
    Item.remove({_id: req.params.ItemId},(err, Item) => {
        if (err){
            res.send(err);
        }
        res.json({message: 'Successfully deleted item.'});
    });
};

