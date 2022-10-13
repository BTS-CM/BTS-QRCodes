export const operation = [
    "asset_global_settle",
    {
      issuer: "1.2.x",
      asset_to_settle: "1.3.x",
      settle_price: {
        base: {
          amount: 1,
          asset_id: "1.3.x"
        },
        quote: {
          amount: 1,
          asset_id: "1.3.x"
        }
    },
      extensions: []
    }
]