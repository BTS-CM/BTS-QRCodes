let _operation = [
    71,
    {
      owner_account: "1.2.x",
      offer_id: "1.21.x",
      delta_amount: optional(asset), // todo: fix this line
      fee_rate: 1,
      max_duration_seconds: 6000,
      min_deal_amount: 1,
      enabled: true,
      auto_disable_time: 600,
      acceptable_collateral: [
        [
          "1.3.0", // matching quote asset_id
          {
            base: {
              amount: 1,
              asset_id: "1.3.x"
            },
            quote: {
              amount: 1,
              asset_id: "1.3.0"
            }
          }
        ]
      ],
      acceptable_borrowers: [{
        "1.2.x": 1
      }],
      extensions: []
    }
]

export const operation = _operation;