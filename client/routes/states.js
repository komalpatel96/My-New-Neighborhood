const router = require("express").Router();
const stateController = require("../../controllers/stateController");

// Matches with "/api/books"
router.route("/")
  .get(stateController.findAll)
  .post(stateController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(stateController.findById)
  .put(stateController.update)
  .delete(stateController.remove);

module.exports = router;