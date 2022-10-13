var expiry = new Date();
expiry.setMinutes(expiry.getMinutes() + 60);

let _operation = [
  1,
  {
    seller: "1.2.26299",
    amount_to_sell: {
      amount: 1,
      asset_id: "1.3.0"
    },
    min_to_receive: {
      amount: 1,
      asset_id: "1.3.1756"
    },
    expiration: expiry,
    fill_or_kill: true,
    extensions: []
  }
]

export const operation = _operation;