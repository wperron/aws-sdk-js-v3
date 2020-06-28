import { RegionInfo, RegionInfoProvider } from "../types/mod.ts";

// Partition default templates
const AWS_TEMPLATE = "datasync.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "datasync.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "datasync.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "datasync.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "datasync.{region}.amazonaws.com";

// Partition regions
const AWS_REGIONS = new Set([
  "ap-south-1",
  "eu-north-1",
  "eu-west-3",
  "eu-west-2",
  "eu-west-1",
  "ap-northeast-2",
  "ap-northeast-1",
  "me-south-1",
  "ca-central-1",
  "sa-east-1",
  "ap-east-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "eu-central-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2"
]);
const AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
const AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
const AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
const AWS_US_GOV_REGIONS = new Set(["us-gov-west-1", "us-gov-east-1"]);

export const defaultRegionInfoProvider: RegionInfoProvider = (
  region: string,
  options?: any
) => {
  let regionInfo: RegionInfo | undefined = undefined;
  switch (region) {
    // First, try to match exact region names.
    case "ap-east-1":
      regionInfo = {
        hostname: "datasync.ap-east-1.amazonaws.com"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "datasync.ap-northeast-1.amazonaws.com"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "datasync.ap-northeast-2.amazonaws.com"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "datasync.ap-south-1.amazonaws.com"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "datasync.ap-southeast-1.amazonaws.com"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "datasync.ap-southeast-2.amazonaws.com"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "datasync.ca-central-1.amazonaws.com"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "datasync.eu-central-1.amazonaws.com"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "datasync.eu-north-1.amazonaws.com"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "datasync.eu-west-1.amazonaws.com"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "datasync.eu-west-2.amazonaws.com"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "datasync.eu-west-3.amazonaws.com"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "datasync-fips.us-east-1.amazonaws.com",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "datasync-fips.us-east-2.amazonaws.com",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "datasync-fips.us-gov-west-1.amazonaws.com",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "datasync-fips.us-west-1.amazonaws.com",
        signingRegion: "us-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "datasync-fips.us-west-2.amazonaws.com",
        signingRegion: "us-west-2"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "datasync.me-south-1.amazonaws.com"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "datasync.sa-east-1.amazonaws.com"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "datasync.us-east-1.amazonaws.com"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "datasync.us-east-2.amazonaws.com"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "datasync.us-gov-east-1.amazonaws.com"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "datasync.us-gov-west-1.amazonaws.com"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "datasync.us-west-1.amazonaws.com"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "datasync.us-west-2.amazonaws.com"
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region)
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region)
        };
      }
      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region)
        };
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region)
        };
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region)
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region)
        };
      }
  }
  return Promise.resolve(regionInfo);
};
