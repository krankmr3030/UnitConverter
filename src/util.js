export const validTemps = ["kelvin", "celsius", "fahrenheit", "rankine"];
export const validVols = ["liters", "tablespoons", "cubic-inches", "cups", "cubic-feet", "gallons"];

export const toLowerCase = (val = "") => {
  if (!val) {
    return "";
  } else if (typeof val === "string") {
    return val.toLowerCase();
  } else return val.toString().toLowerCase();
};

//ref http://www.csgnetwork.com/temp2conv.html
export const tempConvert = (FROM, TO, val) => {
  let res = "";
  const from = toLowerCase(FROM);
  const to = toLowerCase(TO);

  if (from === "kelvin") {
    switch (to) {
      case "kelvin":
        res = val;
        break;
      case "celsius":
        res = val - 273.15;
        break;
      case "fahrenheit":
        res = val * 1.8 - 459.67;
        break;
      case "rankine":
        res = val * 1.8;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "celsius") {
    const C = val;
    switch (to) {
      case "kelvin":
        res = C + 273.15;
        break;
      case "celsius":
        res = C;
        break;
      case "fahrenheit":
        res = C * 1.8 + 32;
        break;
      case "rankine":
        res = C * 1.8 + 32 + 459.67;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "fahrenheit") {
    const F = val;
    switch (to) {
      case "kelvin":
        res = (F + 459.67) / 1.8;
        break;
      case "celsius":
        res = (F - 32) / 1.8;
        break;
      case "fahrenheit":
        res = F;
        break;
      case "rankine":
        res = F + 459.67;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "rankine") {
    const Ra = val;
    switch (to) {
      case "kelvin":
        res = Ra / 1.8;
        break;
      case "celsius":
        res = (Ra - 32 - 459.67) / 1.8;
        break;
      case "fahrenheit":
        res = Ra - 459.67;
        break;
      case "rankine":
        res = Ra;
        break;
      default:
        res = val;
        break;
    }
  }

  return res;
};

export const volumeConvert = (FROM, TO, val) => {
  let res = "";
  const from = toLowerCase(FROM);
  const to = toLowerCase(TO);

  if (from === "liters") {
    // ref https://www.milliliter.org/liters-conversions
    switch (to) {
      case "liters":
        res = val;
        break;
      case "tablespoons":
        res = val * 67.628067270991;
        break;
      case "cubic-inches":
        res = val * 61.023758990325;
        break;
      case "cups":
        res = val * 4.226753489819;
        break;
      case "cubic-feet":
        res = val * 0.035314662471285;
        break;
      case "gallons":
        res = val * 0.26417203728418;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "tablespoons") {
    //ref https://www.milliliter.org/tablespoon-conversions
    switch (to) {
      case "liters":
        res = val * 0.01478676;
        break;
      case "tablespoons":
        res = val;
        break;
      case "cubic-inches":
        res = val * 0.90234367848778;
        break;
      case "cups":
        res = val * 0.062499989433116;
        break;
      case "cubic-feet":
        res = val * 0.00052218943844389;
        break;
      case "gallons":
        res = val * 0.0039062485140323;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "cubic-inches") {
    //ref https://www.milliliter.org/cubic-inches-conversions
    switch (to) {
      case "liters":
        res = val * 0.01638706;
        break;
      case "tablespoons":
        res = val * 1.1082251960538;
        break;
      case "cubic-inches":
        res = val;
        break;
      case "cups":
        res = val * 0.069264063042874;
        break;
      case "cubic-feet":
        res = val * 0.00057870349279669;
        break;
      case "gallons":
        res = val * 0.0043290030252982;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "cups") {
    //ref https://www.milliliter.org/cup-conversions
    switch (to) {
      case "liters":
        res = val * 0.2365882;
        break;
      case "tablespoons":
        res = val * 16.000002705123;
        break;
      case "cubic-inches":
        res = val * 14.437501296755;
        break;
      case "cups":
        res = val;
        break;
      case "cubic-feet":
        res = val * 0.0083550324276888;
        break;
      case "gallons":
        res = val * 0.062499986791398;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "cubic-feet") {
    //ref https://www.milliliter.org/cubic-feet-conversions
    switch (to) {
      case "liters":
        res = val * 28.31685;
        break;
      case "tablespoons":
        res = val * 1915.0138367026;
        break;
      case "cubic-inches":
        res = val * 1728.0006297652;
        break;
      case "cups":
        res = val * 119.68834455818;
        break;
      case "cubic-feet":
        res = val;
        break;
      case "gallons":
        res = val * 7.4805199539707;
        break;
      default:
        res = val;
        break;
    }
  }

  if (from === "gallons") {
    // ref https://www.milliliter.org/gallons-us-conversions
    switch (to) {
      case "liters":
        res = val * 3.785412;
        break;
      case "tablespoons":
        res = val * 256.00009738442;
        break;
      case "cubic-inches":
        res = val * 231.00006956709;
        break;
      case "cups":
        res = val * 16.000003381403;
        break;
      case "cubic-feet":
        res = val * 0.13368054709475;
        break;
      case "gallons":
        res = val;
        break;
      default:
        res = val;
        break;
    }
  }

  return res;
};
