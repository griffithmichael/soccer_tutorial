import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  UpdatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    //Get endpoint
    .get(getPlayers)
    //Post endpoint
    .post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    // Get specific player
    .get(getPlayerWithID)
    // update specific player
    .put(UpdatePlayer)

    // update specific player
    .delete(deletePlayer);
};
export default routes;
