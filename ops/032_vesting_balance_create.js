let _operation = [
    32,
    {
      creator: "1.2.x",
      owner: "1.2.x",
      amount: {
        amount: 1,
        asset_id: "1.3.x"
      },
      policy: [0, {
        begin_timestamp: 1663765941,
        vesting_cliff_seconds: 60000,
        vesting_duration_seconds: 60000
      }]
    }
]

export const operation = _operation;