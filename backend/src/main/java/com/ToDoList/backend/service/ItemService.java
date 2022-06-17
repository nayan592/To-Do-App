package com.ToDoList.backend.service;


import com.ToDoList.backend.model.Item;
import com.ToDoList.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    public ItemRepository itemRepository;

//    to save item in database
    public Item saveItem(Item item){
        return itemRepository.save(item);
    }


//    show data in forntend

    public List<Item> getItem()
    {
        return itemRepository.findAll();
    }


    // get item by id
    public Item getItemById(int id)
    {
        return itemRepository.findById(id).orElse(null);
    }

    // delete item form database
    public String deleteItem(int id)
    {
         itemRepository.deleteById(id);
         return "Item deleted successfully"+id;
    }

    // update item by edit
    public Item upadteItem(Item item)
    {

        // find by id
        Item updateProduct=itemRepository.findById(item.getId()).orElse(null);
        updateProduct.setName(item.getName());
        return itemRepository.save(updateProduct);

    }

    public String removeAll()
    {
        itemRepository.deleteAll();
        return "Items deleted successfully";
    }

}
