import databaseConnection from "../../config/database.js";
import authMiddleware from "../../middleware/auth.js";
import ReclamoController from "./controller/reclamoController.js";
import ReclamoRepository from "./repository/reclamoRepository.js";
import ReclamoService from "./service/reclamoService.js";
import expressValidator from "express-validator"

export default function reclamoModule(app) {
  const authRequest = authMiddleware;
  const validationService = expressValidator;

  const reclamoRepository = new ReclamoRepository(databaseConnection);
  const reclamoService = new ReclamoService(reclamoRepository);
  const reclamoController = new ReclamoController(reclamoService, authRequest, validationService);

  reclamoController.configRoutes(app);
}