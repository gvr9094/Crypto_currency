
function convertToJson(response){
    return response.json();
}
function showData(data){
 const bitcoin_result = document.getElementById('bitcoin_price');
 bitcoin_result.innerHTML =data.bitcoin.inr;
 console.log(data);
 const ethereum_result = document.getElementById('ethereum_price');
 ethereum_price.innerHTML =data.ethereum.inr;
 console.log(data);
 const polkadot_result = document.getElementById('polkadot_price');
 polkadot_result.innerHTML =data.polkadot.inr;
 console.log(data);
 const dogecoin_result = document.getElementById('dogecoin_price');
 dogecoin_result.innerHTML =data.dogecoin.inr;
 console.log(data); 
 const tether_result = document.getElementById('tether_price');
 tether_result.innerHTML =data.tether.inr;
 console.log(data);
 const binancecoin_result = document.getElementById('binancecoin_price');
 binancecoin_result.innerHTML =data.binancecoin.inr;
 console.log(data);
 const cardano_result = document.getElementById('cardano_price');
 cardano_result.innerHTML =data.cardano.inr;
 console.log(data);
 const solana_result = document.getElementById('solana_price');
 solana_result.innerHTML =data.solana.inr;
 console.log(data);
 const stellar_result = document.getElementById('stellar_price');
 stellar_result.innerHTML =data.stellar.inr;
 console.log(data);
 const litecoin_result = document.getElementById('litecoin_price');
 litecoin_result.innerHTML =data.litecoin.inr;
 console.log(data);
 const helium_result = document.getElementById('helium_price');
 helium_result.innerHTML =data.helium.inr;
 console.log(data);
 const flow_result = document.getElementById('flow_price');
 flow_result.innerHTML =data.flow.inr;
 console.log(data);
}
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Ccardano%2Csolana%2Cstellar%2Clitecoin%2Chelium%2Cflow&vs_currencies=inr").then(convertToJson).then(showData)