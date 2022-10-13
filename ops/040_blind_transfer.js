export const operation = [
    "blind_transfer",
    {
      inputs: [{
        commitment: "",
        owner: {
          weight_threshold: 1,
          account_auths: [{"1.2.x": 1}],
          key_auths: [{"": 1}],
          address_auths: [{"": 1}]
        }
      }],
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