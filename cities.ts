//Question no:38

function describe_city(city: string, country:string = 'Default country.'){
    console.log(` ${city} is in ${country}`);
}

describe_city('Karachi','Pakistan');
describe_city('Tokyo','Japan');
describe_city('paris');