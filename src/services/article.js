import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rapidApiKey = import.meta.env.RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        `d0df24893fmsh3d2acc9c6529cfcp1db6d7jsn0e4b2f6ee11a`
      ),
        headers.set(
          "X-RapidAPI-Host",
          "article-extractor-and-summarizer.p.rapidapi.com"
        );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=4`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
