let _operation = [
    36,
    {
      fee_paying_account: "1.2.x",
      predicates: [
        [0, {"account_id":"1.2.x","name":"abc"}],
        [1, {"asset_id":"1.3.x","symbol":"ABC"}]
      ],
      required_auths: ["1.2.x"],
      extensions: []
    }
]

export const operation = _operation;