import express from "express";
import { checkOutService } from "../domain/services/checkOut.service";

export const checkOutRouter = express.Router();

checkOutRouter.get("/:id", checkOutService.getCheckOutById);
checkOutRouter.post("/", checkOutService.createCheckOut);
checkOutRouter.put("/:id", checkOutService.updateCheckOut);
