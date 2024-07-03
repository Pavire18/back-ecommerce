import express from "express";
import { stripeService } from "../domain/services/stripeCheckOut.service";

export const stripeRouter = express.Router();

stripeRouter.post("/checkout", stripeService.checkOut);