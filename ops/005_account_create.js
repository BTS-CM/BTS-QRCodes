export const operation = [
  "account_create",
  {
    registrar: "1.2.x",
    referrer: "1.2.x",
    referrer_percent: 0,
    name: "",
    owner: {
      weight_threshold: uint32,
      account_auths: [{"1.2.x": 1}],
      key_auths: [{"1.2.x": 1}],
      address_auths: [{"1.2.x": 1}]
    },
    active: {
      weight_threshold: uint32,
      account_auths: [{"1.2.x": 1}],
      key_auths: [{"1.2.x": 1}],
      address_auths: [{"1.2.x": 1}]
    },
    options: {
      memo_key: "",
      voting_account: "1.2.x",
      num_witness: 0,
      num_committee: 0,
      votes: [],
      extensions: []
    },
    extensions: []
  }
]
