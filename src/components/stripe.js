const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = pk_test_51KwTJ0DroLN21QkjmKvv2qHFtWb2PSw1wjZ0wWw0hmDqE8cfwLsS0AxuYuLm123gD7lxWWuEcrOjtYFAJgIiTAJE00JPdEEGVY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;