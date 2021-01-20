module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.create);
  
    // Retrieve all Tutorials
    router.get("/", users.findAll);

    // Update a Tutorial with id
    router.put("/:id", users.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", users.delete);
      
    app.use('/api/users', router);
  };
  