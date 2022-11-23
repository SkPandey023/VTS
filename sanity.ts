import { createClient } from "next-sanity";

import createImageUrlBuilderder from "@sanity/image-url";
//...

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-11-19", // or today's date for latest

  useCdn: false,
  token: process.env.NEXT_PUBLIC_TOKEN,
};

//Setting client for fetching data

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilderder(config).image(source);
