// Contract addresses configuration
const CONTRACT_ADDRESSES = {
    TAURUS: '0x0BC9d3f04F3A48753bFf69a9e533d9a10bB34Ac2'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTRACT_ADDRESSES;
} else {
    window.CONTRACT_ADDRESSES = CONTRACT_ADDRESSES;
}
