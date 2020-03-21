"use strict";

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

var _serializer = require("./serializer");

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is merge updated from steemd's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/steemit_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/steemit_future_extensions/future_extensions/g'|
sed 's/steemit_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

var uint8 = _types2.default.uint8,
    uint16 = _types2.default.uint16,
    int16 = _types2.default.int16,
    uint32 = _types2.default.uint32,
    uint64 = _types2.default.uint64,
    int64 = _types2.default.int64,
    uint128 = _types2.default.uint128,
    string = _types2.default.string,
    string_binary = _types2.default.string_binary,
    bytes = _types2.default.bytes,
    bool = _types2.default.bool,
    array = _types2.default.array,
    static_variant = _types2.default.static_variant,
    map = _types2.default.map,
    set = _types2.default.set,
    public_key = _types2.default.public_key,
    time_point_sec = _types2.default.time_point_sec,
    optional = _types2.default.optional,
    asset = _types2.default.asset,
    asset_symbol = _types2.default.asset_symbol;


var future_extensions = _types2.default.void;
var hardfork_version_vote = _types2.default.void;
var version = _types2.default.void;
var required_automated_actions = _types2.default.void;
var optional_automated_actions = _types2.default.void;

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
module.exports.operation = operation;

// For module.exports
var Serializer = function Serializer(operation_name, serilization_types_object) {
    var s = new _serializer2.default(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
};

var beneficiaries = new Serializer("beneficiaries", {
    account: string,
    weight: uint16
});

var comment_payout_beneficiaries = new Serializer(0, {
    beneficiaries: set(beneficiaries)
});

var votable_asset_options = new Serializer("votable_asset_options", {
    max_accepted_payout: int64,
    allow_curation_rewards: bool,
    beneficiaries: comment_payout_beneficiaries
});

var allowed_vote_assets = new Serializer(1, {
    votable_assets: map(asset_symbol, votable_asset_options)
});

var smt_generation_unit = new Serializer("smt_generation_unit", {
    steem_unit: map(string, uint16),
    token_unit: map(string, uint16)
});

var smt_capped_generation_policy = new Serializer(0, {
    generation_unit: smt_generation_unit,
    extensions: set(future_extensions)
});

var smt_emissions_unit = new Serializer("smt_emissions_unit", {
    token_unit: map(string, uint16)
});

var smt_param_allow_voting = new Serializer(0, {
    value: bool
});

var smt_param_windows_v1 = new Serializer(0, {
    cashout_window_seconds: uint32,
    reverse_auction_window_seconds: uint32
});

var smt_param_vote_regeneration_period_seconds_v1 = new Serializer(1, {
    vote_regeneration_period_seconds: uint32,
    votes_per_regeneration_period: uint32
});

var smt_param_rewards_v1 = new Serializer(2, {
    content_constant: uint128,
    percent_curation_rewards: uint16,
    author_reward_curve: int64,
    curation_reward_curve: int64
});

var smt_param_allow_downvotes = new Serializer(3, {
    value: bool
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer(
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer(
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
var signed_transaction = new Serializer("signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
});

var signed_block = new Serializer("signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote, required_automated_actions, optional_automated_actions])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
});

var block_header = new Serializer("block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote]))
});

var signed_block_header = new Serializer("signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote, required_automated_actions, optional_automated_actions])),
    witness_signature: bytes(65)
});

var vote = new Serializer("vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: int16
});

var comment = new Serializer("comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json_metadata: string
});

var transfer = new Serializer("transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_to_vesting = new Serializer("transfer_to_vesting", {
    from: string,
    to: string,
    amount: asset
});

var withdraw_vesting = new Serializer("withdraw_vesting", {
    account: string,
    vesting_shares: asset
});

var limit_order_create = new Serializer("limit_order_create", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    min_to_receive: asset,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var limit_order_cancel = new Serializer("limit_order_cancel", {
    owner: string,
    orderid: uint32
});

var price = new Serializer("price", {
    base: asset,
    quote: asset
});

var feed_publish = new Serializer("feed_publish", {
    publisher: string,
    exchange_rate: price
});

var convert = new Serializer("convert", {
    owner: string,
    requestid: uint32,
    amount: asset
});

var authority = new Serializer("authority", {
    weight_threshold: uint32,
    account_auths: map(string, uint16),
    key_auths: map(public_key, uint16)
});

var account_create = new Serializer("account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
});

var account_update = new Serializer("account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
});

var chain_properties = new Serializer("chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
});

var witness_update = new Serializer("witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
});

var account_witness_vote = new Serializer("account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
});

var account_witness_proxy = new Serializer("account_witness_proxy", {
    account: string,
    proxy: string
});

var pow = new Serializer("pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
});

var custom = new Serializer("custom", {
    required_auths: set(string),
    id: uint16,
    data: bytes()
});

var report_over_production = new Serializer("report_over_production", {
    reporter: string,
    first_block: signed_block_header,
    second_block: signed_block_header
});

var delete_comment = new Serializer("delete_comment", {
    author: string,
    permlink: string
});

var custom_json = new Serializer("custom_json", {
    required_auths: set(string),
    required_posting_auths: set(string),
    id: string,
    json: string
});

var comment_options = new Serializer("comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    percent_steem_dollars: uint16,
    allow_votes: bool,
    allow_curation_rewards: bool,
    extensions: set(static_variant([comment_payout_beneficiaries, allowed_vote_assets]))
});

var set_withdraw_vesting_route = new Serializer("set_withdraw_vesting_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
});

var limit_order_create2 = new Serializer("limit_order_create2", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    exchange_rate: price,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var claim_account = new Serializer("claim_account", {
    creator: string,
    fee: asset,
    extensions: set(future_extensions)
});

var create_claimed_account = new Serializer("create_claimed_account", {
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
});

var request_account_recovery = new Serializer("request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
});

var recover_account = new Serializer("recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
});

var change_recovery_account = new Serializer("change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
});

var escrow_transfer = new Serializer("escrow_transfer", {
    from: string,
    to: string,
    sbd_amount: asset,
    steem_amount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json_meta: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
});

var escrow_dispute = new Serializer("escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
});

var escrow_release = new Serializer("escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    sbd_amount: asset,
    steem_amount: asset
});

var pow2_input = new Serializer("pow2_input", {
    worker_account: string,
    prev_block: bytes(20),
    nonce: uint64
});

var pow2 = new Serializer("pow2", {
    input: pow2_input,
    pow_summary: uint32
});

var equihash_proof = new Serializer("equihash_proof", {
    n: uint32,
    k: uint32,
    seed: bytes(32),
    inputs: array(uint32)
});

var equihash_pow = new Serializer("equihash_pow", {
    input: pow2_input,
    proof: equihash_proof,
    prev_block: bytes(20),
    pow_summary: uint32
});

var escrow_approve = new Serializer("escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
});

var transfer_to_savings = new Serializer("transfer_to_savings", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_from_savings = new Serializer("transfer_from_savings", {
    from: string,
    request_id: uint32,
    to: string,
    amount: asset,
    memo: string
});

var cancel_transfer_from_savings = new Serializer("cancel_transfer_from_savings", {
    from: string,
    request_id: uint32
});

var custom_binary = new Serializer("custom_binary", {
    required_owner_auths: set(string),
    required_active_auths: set(string),
    required_posting_auths: set(string),
    required_auths: array(authority),
    id: string,
    data: bytes()
});

var decline_voting_rights = new Serializer("decline_voting_rights", {
    account: string,
    decline: bool
});

var reset_account = new Serializer("reset_account", {
    reset_account: string,
    account_to_reset: string,
    new_owner_authority: authority
});

var set_reset_account = new Serializer("set_reset_account", {
    account: string,
    current_reset_account: string,
    reset_account: string
});

var claim_reward_balance = new Serializer("claim_reward_balance", {
    account: string,
    reward_steem: asset,
    reward_sbd: asset,
    reward_vests: asset
});

var delegate_vesting_shares = new Serializer("delegate_vesting_shares", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset
});

var account_create_with_delegation = new Serializer("account_create_with_delegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
});

var witness_set_properties = new Serializer("witness_set_properties", {
    owner: string,
    props: string,
    extensions: set(future_extensions)
});

var account_update2 = new Serializer("account_update2", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: optional(public_key),
    json_metadata: string,
    posting_json_metadata: string,
    extensions: set(future_extensions)
});

var create_proposal = new Serializer("create_proposal", {
    creator: string,
    receiver: string,
    start_date: time_point_sec,
    end_date: time_point_sec,
    daily_pay: asset,
    subject: string,
    permlink: string,
    extensions: set(future_extensions)
});

var update_proposal_votes = new Serializer("update_proposal_votes", {
    voter: string,
    proposal_ids: array(uint64),
    approve: bool,
    extensions: set(future_extensions)
});

var remove_proposal = new Serializer("remove_proposal", {
    proposal_owner: string,
    proposal_ids: array(uint64),
    extensions: set(future_extensions)
});

var claim_reward_balance2 = new Serializer("claim_reward_balance2", {
    account: string,
    reward_tokens: array(asset),
    extensions: set(future_extensions)
});

var vote2 = new Serializer("vote2", {
    voter: string,
    author: string,
    permlink: string,
    rshares: map(asset_symbol, int64),
    extensions: set(future_extensions)
});

var smt_create = new Serializer("smt_create", {
    control_account: string,
    symbol: asset_symbol,
    smt_creation_fee: asset,
    precision: uint8,
    extensions: set(future_extensions)
});

var smt_setup = new Serializer("smt_setup", {
    control_account: string,
    symbol: asset_symbol,
    max_supply: int64,
    contribution_begin_time: time_point_sec,
    contribution_end_time: time_point_sec,
    launch_time: time_point_sec,
    steem_units_min: int64,
    min_unit_ratio: uint32,
    max_unit_ratio: uint32,
    extensions: set(future_extensions)
});

var smt_setup_emissions = new Serializer("smt_setup_emissions", {
    control_account: string,
    symbol: asset_symbol,
    schedule_time: time_point_sec,
    emissions_unit: smt_emissions_unit,
    interval_seconds: uint32,
    emission_count: uint32,
    lep_time: time_point_sec,
    rep_time: time_point_sec,
    lep_abs_amount: int64,
    rep_abs_amount: int64,
    lep_rel_amount_numerator: uint32,
    rep_rel_amount_numerator: uint32,
    rel_amount_denom_bits: uint8,
    remove: bool,
    floor_emissions: bool,
    extensions: set(future_extensions)
});

var smt_setup_ico_tier = new Serializer("smt_setup_ico_tier", {
    control_account: string,
    symbol: asset_symbol,
    steem_units_cap: int64,
    generation_policy: static_variant([smt_capped_generation_policy]),
    remove: bool,
    extensions: set(future_extensions)
});

var smt_set_setup_parameters = new Serializer("smt_set_setup_parameters", {
    control_account: string,
    symbol: asset_symbol,
    setup_parameters: set(static_variant([smt_param_allow_voting])),
    extensions: set(future_extensions)
});

var smt_set_runtime_parameters = new Serializer("smt_set_runtime_parameters", {
    control_account: string,
    symbol: asset_symbol,
    runtime_parameters: set(static_variant([smt_param_windows_v1, smt_param_vote_regeneration_period_seconds_v1, smt_param_rewards_v1, smt_param_allow_downvotes])),
    extensions: set(future_extensions)
});

var smt_contribute = new Serializer("smt_contribute", {
    contributor: string,
    symbol: asset_symbol,
    contribution_id: uint32,
    contribution: asset,
    extensions: set(future_extensions)
});

var fill_convert_request = new Serializer("fill_convert_request", {
    owner: string,
    requestid: uint32,
    amount_in: asset,
    amount_out: asset
});

var author_reward = new Serializer("author_reward", {
    author: string,
    permlink: string,
    sbd_payout: asset,
    steem_payout: asset,
    vesting_payout: asset
});

var curation_reward = new Serializer("curation_reward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
});

var comment_reward = new Serializer("comment_reward", {
    author: string,
    permlink: string,
    payout: asset
});

var liquidity_reward = new Serializer("liquidity_reward", {
    owner: string,
    payout: asset
});

var interest = new Serializer("interest", {
    owner: string,
    interest: asset
});

var fill_vesting_withdraw = new Serializer("fill_vesting_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
});

var fill_order = new Serializer("fill_order", {
    current_owner: string,
    current_orderid: uint32,
    current_pays: asset,
    open_owner: string,
    open_orderid: uint32,
    open_pays: asset
});

var shutdown_witness = new Serializer("shutdown_witness", { owner: string });

var fill_transfer_from_savings = new Serializer("fill_transfer_from_savings", {
    from: string,
    to: string,
    amount: asset,
    request_id: uint32,
    memo: string
});

var hardfork = new Serializer("hardfork", { hardfork_id: uint32 });

var comment_payout_update = new Serializer("comment_payout_update", {
    author: string,
    permlink: string
});

var return_vesting_delegation = new Serializer("return_vesting_delegation", {
    account: string,
    vesting_shares: asset
});

var comment_benefactor_reward = new Serializer("comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
});

operation.st_operations = [vote, comment, transfer, transfer_to_vesting, withdraw_vesting, limit_order_create, limit_order_cancel, feed_publish, convert, account_create, account_update, witness_update, account_witness_vote, account_witness_proxy, pow, custom, report_over_production, delete_comment, custom_json, comment_options, set_withdraw_vesting_route, limit_order_create2, claim_account, create_claimed_account, request_account_recovery, recover_account, change_recovery_account, escrow_transfer, escrow_dispute, escrow_release, pow2, escrow_approve, transfer_to_savings, transfer_from_savings, cancel_transfer_from_savings, custom_binary, decline_voting_rights, reset_account, set_reset_account, claim_reward_balance, delegate_vesting_shares, account_create_with_delegation, witness_set_properties, account_update2, create_proposal, update_proposal_votes, remove_proposal, claim_reward_balance2, vote2, smt_setup, smt_setup_emissions, smt_setup_ico_tier, smt_set_setup_parameters, smt_set_runtime_parameters, smt_create, smt_contribute, fill_convert_request, author_reward, curation_reward, comment_reward, liquidity_reward, interest, fill_vesting_withdraw, fill_order, shutdown_witness, fill_transfer_from_savings, hardfork, comment_payout_update, return_vesting_delegation, comment_benefactor_reward];

var transaction = new Serializer("transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
});

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

var encrypted_memo = new Serializer("encrypted_memo", { from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary });
/*

// Make sure all tests pass

npm test

*/