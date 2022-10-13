let _operation = [
    41,
    {
      amount: {
        amount: 1,
        asset_id: "1.3.x"
      },
      to: "1.2.x",
      blinding_factor: "",
      inputs: [{
        commitment: "",
        owner: {
          weight_threshold: 1,
          account_auths: [{"1.2.x": 1}],
          key_auths: [{"": 1}],
          address_auths: [{"": 1}]
        }
      }],
    }
]

export const operation = _operation;