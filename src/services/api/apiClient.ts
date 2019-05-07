import axios from "axios";
import { createSearchUrl } from "../../const/apiUrl";

export default class ApiClient {
  public static search = async (q: string) => {
    const url = createSearchUrl();
    const params = {
      params: {
        q: q
      }
    };

    const result = await axios.get(url, params);
    return result.data || [];
  };
}
