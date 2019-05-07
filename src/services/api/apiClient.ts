import axios from "axios";
import { createSearchUrl } from "../../const/apiUrl";

export interface SearchResponse {
  url: string;
  title: string;
  publishedAt: string;
  thumbnails: string;
  type: number;
}

export default class ApiClient {
  public static search = async (q: string) => {
    const url = createSearchUrl();
    const params = {
      params: {
        q: q
      }
    };

    const result = await axios.get<SearchResponse[]>(url, params);
    return result.data || [];
  };
}
