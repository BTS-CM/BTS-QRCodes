import prompts from 'prompts';
import { generateQRWithImage } from '@trisbee/qr-image-nodejs';
import fs from 'fs';

const onCancel = prompt => {
    console.log('rejected prompt')
}

let operations = [
    "001_limit_order_create",
    "002_limit_order_cancel",
    "003_call_order_update",
    "005_account_create",
    "006_account_update",
    "007_account_whitelist",
    "008_account_upgrade",
    "009_account_transfer",
    "010_asset_create",
    "011_asset_update ",
    "012_asset_update_bitasset",
    "013_asset_update_feed_producers",
    "014_asset_issue",
    "015_asset_reserve",
    "016_asset_fund_fee_pool",
    "017_asset_settle",
    "018_asset_global_settle",
    "019_asset_publish_feed",
    "020_witness_create",
    "021_witness_update",
    "022_proposal_create",
    "023_proposal_update",
    "024_proposal_delete",
    "025_withdraw_permission_create",
    "026_withdraw_permission_update",
    "027_withdraw_permission_claim",
    "028_withdraw_permission_delete",
    "029_committee_member_create",
    "030_committee_member_update",
    "031_committee_member_update_global_parameters",
    "032_vesting_balance_create",
    "033_vesting_balance_withdraw",
    "034_worker_create",
    "035_custom",
    "036_assert",
    "037_balance_claim",
    "038_override_transfer",
    "039_transfer_to_blind",
    "040_blind_transfer",
    "041_transfer_from_blind",
    "043_asset_claim_fees",
    "045_bid_collateral",
    "047_asset_claim_pool",
    "048_asset_update_issuer",
    "049_htlc_create",
    "050_htlc_redeem",
    "052_htlc_extend",
    "054_custom_authority_create",
    "055_custom_authority_update",
    "056_custom_authority_delete",
    "057_ticket_create",
    "058_ticket_update",
    "059_liquidity_pool_create",
    "060_liquidity_pool_delete",
    "061_liquidity_pool_deposit",
    "062_liquidity_pool_withdraw",
    "063_liquidity_pool_exchange",
    "064_samet_fund_create",
    "065_samet_fund_delete",
    "066_samet_fund_update",
    "067_samet_fund_borrow",
    "068_samet_fund_repay",
    "069_credit_offer_create",
    "070_credit_offer_delete",
    "071_credit_offer_update",
    "072_credit_offer_accept",
    "073_credit_deal_repay"
]

let run = async function () { 
    let response;
    try {
        response = await prompts(
            [
                {
                    type: 'select',
                    name: 'operation',
                    message: 'Run which operation example?',
                    choices: operations.map(op => {
                        return {
                            title: op,
                            value: op
                        }
                    })
                }
            ],
            { onCancel }
        );
    } catch (error) {
        console.log(error);
    }
    
    if (!response || !response.operation) {
        console.log('Prompt select error')
        return;
    }       
    
    let requestedOP;
    try {
        requestedOP = await import('./ops/' + response.operation + '.js');
    } catch (error) {
        console.error(error);
        return;
    }

    let imageBuffer = await fs.readFileSync('./logo.png');

    const resultWithImage = await generateQRWithImage(
        JSON.stringify(requestedOP.operation),
        500, // width
        10, // margin
        imageBuffer, //imageBuffer
        {
            errorCorrectionLevel: 'H',
            color: {
                dark: '#36415C',
                light: '#F2F3F8'
            }
        }
    );

    fs.writeFile('./output/' + response.operation + '.png', resultWithImage.buffer, function(err) {
        if (err) throw err;
        console.log("✅ File saved");
    });
}

run();
