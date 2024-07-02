import { type Request, type Response, type NextFunction } from "express";
import braintree from "braintree";

export const checkOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Ruta para crear una transacción
    const nonceFromTheClient = req.body.paymentMethodNonce;
    const amount = req.body.amount;

    const gateway = new braintree.BraintreeGateway({
      environment: braintree.Environment.Sandbox,
      merchantId: "dw25mfqrppq3bf49",
      publicKey: "p8krtfds6ksdk7c8",
      privateKey: "1e16511a64598befbf89607dcb28c0c5",
    });

    const customerData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    };

    const saleRequest = {
      amount,
      paymentMethodNonce: nonceFromTheClient,
      customer: customerData,
      creditCard: {
        number: req.body.creditCardNumber,
        expirationMonth: req.body.expirationMonth,
        expirationYear: req.body.expirationYear,
        cvv: req.body.cvv,
        cardholderName: req.body.cardholderName,
      },
      billing: {
        streetAddress: req.body.streetAddress,
        locality: req.body.locality,
        region: req.body.region,
        postalCode: req.body.postalCode,
        countryName: req.body.countryName,
      },
      options: {
        submitForSettlement: true,
      },
    };

    const result = await gateway.transaction.sale(saleRequest);
    if (result.success) {
      res.json(result);
    } else {
      res.status(400).json({ error: "Transaction failed", message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

export const braintreeService = {
  checkOut,
};
