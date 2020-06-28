import { RegionInfo, RegionInfoProvider } from "../types/mod.ts";

// Partition default templates
const AWS_TEMPLATE = "cloudhsmv2.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "cloudhsmv2.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "cloudhsmv2.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "cloudhsmv2.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "cloudhsmv2.{region}.amazonaws.com";

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
        hostname: "cloudhsmv2.ap-east-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "cloudhsmv2.ap-northeast-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "cloudhsmv2.ap-northeast-2.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "cloudhsmv2.ap-south-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "cloudhsmv2.ap-southeast-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "cloudhsmv2.ap-southeast-2.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "cloudhsmv2.ca-central-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "cloudhsmv2.eu-central-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "cloudhsmv2.eu-north-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "cloudhsmv2.eu-west-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "cloudhsmv2.eu-west-2.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "cloudhsmv2.eu-west-3.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "cloudhsmv2.me-south-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "cloudhsmv2.sa-east-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "cloudhsmv2.us-east-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "cloudhsmv2.us-east-2.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "cloudhsmv2.us-gov-east-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "cloudhsmv2.us-gov-west-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "cloudhsmv2.us-west-1.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "cloudhsmv2.us-west-2.amazonaws.com",
        signingService: "cloudhsm"
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          signingService: "cloudhsm"
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
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
          signingService: "cloudhsm"
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          signingService: "cloudhsm"
        };
      }
  }
  return Promise.resolve(regionInfo);
};
