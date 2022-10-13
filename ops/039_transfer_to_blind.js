let _operation = [
    39,
    {
      amount: {
        amount: 1,
        asset_id: "1.3.x"
      },
      from: "1.2.x",
      blinding_factor: "",
      outputs: [{
        commitment: "",
        range_proof: "",
        owner: {
          weight_threshold: 1,
          account_auths: [{"1.2.x": 1}],
          key_auths: [{"": 1}],
          address_auths: [{"": 1}]
        },
        stealth_memo: { // optional
          one_time_key: "",
          to: "",
          encrypted_memo: ""
        }
      }]
    }
]

export const operation = _operation;