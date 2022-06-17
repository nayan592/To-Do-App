package com.ToDoList.backend.controller;




import com.ToDoList.backend.model.Item;
import com.ToDoList.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class ItemController {


    @Autowired
    public ItemService itemService;


        @PostMapping("/addItem")
        public Item addItem(@RequestBody Item item)
    {
        return itemService.saveItem(item);
    }

       @GetMapping("/showAllItem")
        public List<Item> showAllItem()
    {
        return itemService.getItem();
    }


      @GetMapping("/findItemById/{id}")
       public  Item findItemById(@PathVariable int id)
       {
           return itemService.getItemById(id);
       }


       @PutMapping("/updateItem")
        public Item updateItem(@RequestBody Item item)
    {
        return itemService.saveItem(item);
    }


       @DeleteMapping("/deleteItem/{id}")
       public  String deleteItem(@PathVariable int id)
   {
       return itemService.deleteItem(id);
   }


       @GetMapping("/removeItem")
       public  String removeItem()
   {
       return itemService.removeAll();
   }



}
