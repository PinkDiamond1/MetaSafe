const translation_en = {
    dialog: {
        danger: 'Danger',
        success: 'Security',
        warning: 'Warning',
        address: 'Wallet',
        contract: 'Contract',
        domain: 'Domain',
        address_danger: '{{type}} blacklist',
        address_success: '{{type}} whitelist',
        address_warning: 'Unknown address',
        open_source: 'Open source',
        not_open_source: 'Not open source',
        approve: 'Approve',
        transfer: 'Send',
        approve_tips: 'Approve warning',
        transfer_tips: 'Transfer warning',
        eth_sign_tips: 'Sign warning',
        eth_sign_text_tips: 'Warning. You are signing a transaction that may transfer all your assets! Please make sure the site is trusted',
        cancel: 'Cancel',
        continue: 'Continue',
        try_action: 'You are trying to {{action}} {{type}} <0>{{symbol}}</0> to',
        contract_try_action: 'You are calling the contract and sending {{sendNumber}} {{symbol}} to',
        transfer_address_private_tips: 'You are trying to transfer assets, the receiving address is a private wallet, please make sure it is your trusted wallet!',
        transfer_address_contract_tips: 'You are trying to transfer assets, the receiving address is a contract address, please make sure it is your trusted contract!',
        transfer_address_danger_tips: 'The current recipient wallet or website exists in CoinTool blacklist, please do not transfer!',
        approve_warning_tips: `The current site or contract do not exist in CoinTool's whitelist, this contract may transfer your assets, please decide whether to continue {{action}}!`,
        approve_danger_tips: `The current website or contract exists in CoinTool's blacklist, this contract is likely to transfer your assets, please do not {{action}}!`,
        approve_private_address: 'Danger! This address is not a contract, but a private wallet address! This address is very likely to transfer your assets, please do not approve!',
    },
    popup: {
        safeing: 'Protecting your wallet...',
        submit_list: 'Submit whilelist or blacklist',
        check_approve: 'Check Approve',
    }
};

export default translation_en;
