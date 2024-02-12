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


function listNFTS(){
    for(let i=0;i<NFTS.length;i++)
    {
        console.log("\nID :\t\t" + (i+1));
        console.log("\nName:\t\t" + NFTS[i].name);
        console.log("\neyecolor:\t" + NFTS[i].eyecolor);
        console.log("\nshirtType:\t" + NFTS[i].shirtType);
        console.log("\nbling:\t\t" + NFTS[i].bling);
    }
}

function getTotalSupply(){
    console.log("\n" + NFTS.length);
}

mintNFT("bob", "blue" , "hoodie" , "gold chain");
mintNFT("sue", "blue" , "hoodie" , "gold chain");
mintNFT("jack", "blue" , "hoodie" , "gold chain");
mintNFT("john", "blue" , "hoodie" , "gold chain");
listNFTS();
getTotalSupply();
