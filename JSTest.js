const NFTS =[]


function mintNFT( _name , _eyecolor , _shirtType , _bling)
{
    const NFT={
        "name":_name,
        "eyecolor": _eyecolor,
        "shirtType":_shirtType,
        "bling":_bling
    }
        NFTS.push(NFT);
        console.log("minted: "+ _name);
}


function listNFTs(){
    for(let i=0;i<NFTs.length;i++)
    {
        console.log("\nID :\t\t" + (i+1));
        console.log("\n Name:\t\t " + NFTs[i].name);
        console.log("\n eyecolor: \t\t" + NFTs[i].eyecolor);
        console.log("\n shirtType:\t\t " + NFTs[i].shirtType);
        console.log("\n bling:\t\t" + NFTs[i].bling);
    }
}

function getTotalSupply(){
    console.log("\n" + NFTS.length);
}

mintNFT("bob", "blue" , "hoodie" , "gold chain");
mintNFT("sue", "blue" , "hoodie" , "gold chain");
mintNFT("jack", "blue" , "hoodie" , "gold chain");
mintNFT("john", "blue" , "hoodie" , "gold chain");
listNFTs();
getTotalSupply();
