import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY as string)

export const checkOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { amount, paymentMethodId, email, name, address } = req.body;

    // Crear un cliente en Stripe
    const customer = await stripe.customers.create({
      email,
      name,
      address,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Crear el Intento de Pago
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: "EUR",
      customer: customer.id,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
    });

    if (paymentIntent.status === "succeeded") {
      res.json({ success: true, paymentIntent });
    } else {
      res.status(400).json({ error: "Transaction failed", message: paymentIntent.last_payment_error?.message });
    }
  } catch (error) {
    next(error);
  }
};

export const stripeService = {
  checkOut,
};
