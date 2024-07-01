import express from "express";
import { braintreeService } from "../domain/services/brainTreeCheckOut.service";

export const braintreeRouter = express.Router();

braintreeRouter.post("/checkout", braintreeService.checkOut);
